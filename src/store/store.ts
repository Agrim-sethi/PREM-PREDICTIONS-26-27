import { Match, Prediction, CardEntry, CardType, CARDS, PLAYERS } from '../types';
import { db } from '../firebase';
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  QuerySnapshot,
  DocumentData
} from 'firebase/firestore';
import { FixtureSeed } from '../data/fixtures';

export interface AppState {
  matches: Match[];
  predictions: Prediction[];
  cards: CardEntry[];
}

const defaultState: AppState = { matches: [], predictions: [], cards: [] };
const matchesCol = collection(db, 'matches');
const predictionsCol = collection(db, 'predictions');
const cardsCol = collection(db, 'cards');
const _unsubscribers: (() => void)[] = [];

function cardValidationError(card: CardEntry, existingCards: CardEntry[]): string | null {
  if (!PLAYERS.includes(card.player as typeof PLAYERS[number])) return 'Unknown player.';
  if (card.gw < 1 || card.gw > 38) return 'Gameweek must be between 1 and 38.';

  const def = CARDS[card.card];
  if (!def) return 'Unknown card type.';

  if (def.needsMatch && (!card.matchNo || card.matchNo < 1 || card.matchNo > 10)) {
    return `${def.label} requires a match number from 1-10.`;
  }
  if (!def.needsMatch && card.matchNo !== undefined) return `${def.label} does not use a match number.`;
  if (def.needsTarget && !card.target) return `${def.label} requires a target player.`;
  if (!def.needsTarget && card.target) return `${def.label} does not use a target player.`;
  if (card.target && card.target === card.player) return 'A player cannot target themselves.';

  const samePlayerCards = existingCards.filter(c => c.player === card.player && c.card === card.card);
  if (def.perGameweek) {
    const alreadyThisGW = samePlayerCards.some(c => c.gw === card.gw);
    if (alreadyThisGW) return `${card.player} has already played a ${def.label} in GW${card.gw}. Only 1 ${def.label} is allowed per player per gameweek.`;
  } else if (samePlayerCards.length >= def.allowance) {
    return `${card.player} has exhausted their ${def.label} allowance (${def.allowance}).`;
  }

  // A player may not use the same card instance twice on the same exact target/match combination.
  if (card.card === 'mirror' && samePlayerCards.some(c => c.gw === card.gw && c.matchNo === card.matchNo && c.target === card.target)) {
    return `${card.player} has already played a Mirror on that match/target in GW${card.gw}.`;
  }

  return null;
}

export const store = {
  state: { ...defaultState } as AppState,
  _onUpdate: null as (() => void) | null,

  load(onUpdate?: () => void, onMatchesLoaded?: (matches: Match[]) => void) {
    if (onUpdate) this._onUpdate = onUpdate;
    let firstMatchSnapshot = true;

    _unsubscribers.push(onSnapshot(matchesCol, (snap: QuerySnapshot<DocumentData>) => {
      this.state.matches = snap.docs.map(d => ({ ...d.data(), id: d.id } as Match));
      if (firstMatchSnapshot) {
        firstMatchSnapshot = false;
        onMatchesLoaded?.(this.state.matches);
      }
      this._onUpdate?.();
    }));

    _unsubscribers.push(onSnapshot(predictionsCol, (snap: QuerySnapshot<DocumentData>) => {
      this.state.predictions = snap.docs.map(d => d.data() as Prediction);
      this._onUpdate?.();
    }));

    _unsubscribers.push(onSnapshot(cardsCol, (snap: QuerySnapshot<DocumentData>) => {
      this.state.cards = snap.docs.map(d => ({ ...d.data(), id: d.id } as CardEntry));
      this._onUpdate?.();
    }));
  },

  async seedFixtures(fixtures: FixtureSeed[]): Promise<void> {
    const missing = fixtures.filter(f => !this.state.matches.some(m => m.gw === f.gw && m.matchNo === f.matchNo));
    if (!missing.length) return;
    await Promise.all(missing.map(fixture => {
      const match: Match = { id: fixture.id, gw: fixture.gw, matchNo: fixture.matchNo, home: fixture.home, away: fixture.away, date: '', time: '' };
      this.state.matches.push(match);
      return setDoc(doc(matchesCol, match.id), match);
    }));
  },

  getMatchesByGW(gw: number): Match[] { return this.state.matches.filter(m => m.gw === gw).sort((a, b) => a.matchNo - b.matchNo); },
  getMatch(id: string): Match | undefined { return this.state.matches.find(m => m.id === id); },

  async addOrUpdateMatch(match: Match) {
    const idx = this.state.matches.findIndex(m => m.id === match.id);
    if (idx >= 0) this.state.matches[idx] = match; else this.state.matches.push(match);
    await setDoc(doc(matchesCol, match.id), match);
  },

  getPredictionsForMatch(matchId: string): Prediction[] { return this.state.predictions.filter(p => p.matchId === matchId); },
  getPrediction(matchId: string, player: string): Prediction | undefined { return this.state.predictions.find(p => p.matchId === matchId && p.player === player); },

  async setPrediction(pred: Prediction) {
    const idx = this.state.predictions.findIndex(p => p.matchId === pred.matchId && p.player === pred.player);
    if (idx >= 0) this.state.predictions[idx] = pred; else this.state.predictions.push(pred);
    await setDoc(doc(predictionsCol, `${pred.matchId}_${pred.player}`), pred);
  },

  getCardsForGW(gw: number): CardEntry[] { return this.state.cards.filter(c => c.gw === gw).sort((a, b) => a.ts - b.ts); },
  getCardsByPlayer(player: string): CardEntry[] { return this.state.cards.filter(c => c.player === player); },

  getCardRemaining(player: string, card: CardType): number | null {
    const def = CARDS[card];
    if (def.perGameweek) return null;
    return Math.max(0, def.allowance - this.state.cards.filter(c => c.player === player && c.card === card).length);
  },

  async addCard(card: CardEntry): Promise<void> {
    const error = cardValidationError(card, this.state.cards);
    if (error) throw new Error(error);
    this.state.cards.push(card);
    try {
      await setDoc(doc(cardsCol, card.id), card);
    } catch (error) {
      this.state.cards = this.state.cards.filter(c => c.id !== card.id);
      throw error;
    }
  },

  async removeCard(id: string) {
    this.state.cards = this.state.cards.filter(c => c.id !== id);
    await deleteDoc(doc(cardsCol, id));
  },

  async deleteMatch(id: string) {
    this.state.matches = this.state.matches.filter(m => m.id !== id);
    await deleteDoc(doc(matchesCol, id));
  }
};

export { cardValidationError };
