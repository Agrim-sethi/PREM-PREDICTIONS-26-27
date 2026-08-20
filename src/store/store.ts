import { Match, Prediction, CardEntry, CardType, CARDS, PLAYERS, Player } from '../types';
import { db } from '../firebase';
import { collection, doc, setDoc, deleteDoc, onSnapshot, runTransaction } from 'firebase/firestore';
import { FixtureSeed } from '../data/fixtures';

export interface AppState {
  matches: Match[];
  predictions: Prediction[];
  cards: CardEntry[];
  gameweekLocks: Record<number, boolean>;
}

const defaultState: AppState = { matches: [], predictions: [], cards: [], gameweekLocks: {} };
const matchesCol = collection(db, 'matches');
const predictionsCol = collection(db, 'predictions');
const cardsCol = collection(db, 'cards');
const gameweeksCol = collection(db, 'gameweeks');
let _unsubscribers: (() => void)[] = [];

function firestoreError(context: string, error: unknown): Error {
  const code = typeof error === 'object' && error && 'code' in error ? String((error as { code?: unknown }).code) : '';
  if (code === 'permission-denied') return new Error(`${context}: Firestore permission denied.`);
  return new Error(`${context}: ${error instanceof Error ? error.message : String(error)}`);
}

export function cardSlotId(player: Player, card: CardType, gw: number, slotIndex = 1): string {
  return card === 'captain' ? `${player}_captain_gw${gw}` : `${player}_${card}_${slotIndex}`;
}

function slotIsUsed(cards: CardEntry[], slot: string): boolean { return cards.some(c => c.slotId === slot || c.id === slot); }

function normalizeLoadedCard(raw: any, docId: string): CardEntry | null {
  const player = raw.player as Player | undefined;
  const card = raw.card as CardType | undefined;
  if (!player || !PLAYERS.includes(player) || !card || !CARDS[card]) return null;
  const gw = typeof raw.gw === 'number' ? raw.gw : Number(raw.gw);
  if (!Number.isInteger(gw) || gw < 1 || gw > 38) return null;
  return {
    id: docId, slotId: typeof raw.slotId === 'string' && raw.slotId ? raw.slotId : docId,
    gw, player, card,
    matchNo: raw.matchNo == null ? null : Number(raw.matchNo),
    target: (raw.target ?? null) as Player | null,
    note: (raw.note ?? null) as string | null,
    createdByUid: typeof raw.createdByUid === 'string' ? raw.createdByUid : '',
    ts: typeof raw.ts === 'number' ? raw.ts : Date.now()
  };
}

function validateCardShape(card: CardEntry): string | null {
  const def = CARDS[card.card];
  if (!def) return 'Unknown card type.';
  if (!PLAYERS.includes(card.player)) return 'Unknown player.';
  if (!Number.isInteger(card.gw) || card.gw < 1 || card.gw > 38) return 'Gameweek must be between 1 and 38.';
  if (def.needsMatch) {
    if (!Number.isInteger(card.matchNo) || (card.matchNo as number) < 1 || (card.matchNo as number) > 10) return `${def.label} requires a match number from 1-10.`;
  } else if (card.matchNo !== null) return `${def.label} does not use a match number.`;
  if (def.needsTarget) {
    if (!card.target) return `${def.label} requires a target player.`;
    if (card.target === card.player) return 'A player cannot target themselves.';
  } else if (card.target !== null) return `${def.label} does not use a target player.`;
  if (!card.createdByUid) return 'Missing authenticated user.';
  if (card.id !== card.slotId) return 'Invalid card slot.';
  return null;
}

export const store = {
  state: { ...defaultState } as AppState,
  loadError: null as string | null,
  _onUpdate: null as (() => void) | null,

  load(onUpdate?: () => void, onMatchesLoaded?: (matches: Match[]) => void) {
    if (onUpdate) this._onUpdate = onUpdate;
    for (const unsub of _unsubscribers) unsub();
    _unsubscribers = [];
    this.loadError = null;

    let firstMatchSnapshot = true;
    _unsubscribers.push(onSnapshot(matchesCol, snap => {
      this.state.matches = snap.docs.map(d => ({ ...d.data(), id: d.id } as Match));
      if (firstMatchSnapshot) { firstMatchSnapshot = false; onMatchesLoaded?.(this.state.matches); }
      this._onUpdate?.();
    }, error => { this.loadError = firestoreError('Matches could not be loaded', error).message; this._onUpdate?.(); }));

    _unsubscribers.push(onSnapshot(predictionsCol, snap => {
      this.state.predictions = snap.docs.map(d => d.data() as Prediction);
      this._onUpdate?.();
    }, error => { this.loadError = firestoreError('Predictions could not be loaded', error).message; this._onUpdate?.(); }));

    _unsubscribers.push(onSnapshot(cardsCol, snap => {
      this.state.cards = snap.docs.map(d => normalizeLoadedCard(d.data(), d.id)).filter((c): c is CardEntry => c !== null);
      this._onUpdate?.();
    }, error => { this.state.cards = []; this.loadError = firestoreError('Cards could not be loaded', error).message; this._onUpdate?.(); }));

    _unsubscribers.push(onSnapshot(gameweeksCol, snap => {
      const locks: Record<number, boolean> = {};
      snap.docs.forEach(d => {
        const gw = Number(d.id.replace('gw', ''));
        if (Number.isInteger(gw) && gw >= 1 && gw <= 38) locks[gw] = d.data().locked === true;
      });
      this.state.gameweekLocks = locks;
      this._onUpdate?.();
    }, error => { this.loadError = firestoreError('Gameweek locks could not be loaded', error).message; this._onUpdate?.(); }));
  },

  getAvailableGameweeks(): number[] {
    const gws = new Set(this.state.matches.map(m => m.gw));
    return [...gws].filter(g => Number.isInteger(g) && g >= 1 && g <= 38).sort((a, b) => a - b);
  },
  isGameweekLocked(gw: number): boolean { return this.state.gameweekLocks[gw] === true; },
  async setGameweekLocked(gw: number, locked: boolean): Promise<void> {
    if (!Number.isInteger(gw) || gw < 1 || gw > 38) throw new Error('Invalid gameweek.');
    try {
      await setDoc(doc(gameweeksCol, `gw${gw}`), { gw, locked, updatedAt: Date.now() });
      this.state.gameweekLocks[gw] = locked;
      this._onUpdate?.();
    } catch (error) { throw firestoreError(`GW${gw} lock could not be updated`, error); }
  },

  getMatchesByGW(gw: number): Match[] { return this.state.matches.filter(m => m.gw === gw).sort((a, b) => a.matchNo - b.matchNo); },
  getMatch(id: string): Match | undefined { return this.state.matches.find(m => m.id === id); },
  async addOrUpdateMatch(match: Match) { try { await setDoc(doc(matchesCol, match.id), match); const idx = this.state.matches.findIndex(m => m.id === match.id); if (idx >= 0) this.state.matches[idx] = match; else this.state.matches.push(match); } catch (error) { throw firestoreError('Match could not be saved', error); } },
  getPredictionsForMatch(matchId: string): Prediction[] { return this.state.predictions.filter(p => p.matchId === matchId); },
  getPrediction(matchId: string, player: string): Prediction | undefined { return this.state.predictions.find(p => p.matchId === matchId && p.player === player); },
  async setPrediction(pred: Prediction) {
    try { await setDoc(doc(predictionsCol, `${pred.matchId}_${pred.player}`), pred); const idx = this.state.predictions.findIndex(p => p.matchId === pred.matchId && p.player === pred.player); if (idx >= 0) this.state.predictions[idx] = pred; else this.state.predictions.push(pred); }
    catch (error) { throw firestoreError('Prediction could not be saved', error); }
  },
  getCardsForGW(gw: number): CardEntry[] { return this.state.cards.filter(c => c.gw === gw).sort((a, b) => a.ts - b.ts); },
  getCardsByPlayer(player: string): CardEntry[] { return this.state.cards.filter(c => c.player === player); },
  getAvailableCardSlot(player: Player, card: CardType, gw: number): string | null { if (card === 'captain') { const slot = cardSlotId(player, card, gw); return slotIsUsed(this.state.cards, slot) ? null : slot; } for (let i = 1; i <= CARDS[card].allowance; i++) { const slot = cardSlotId(player, card, gw, i); if (!slotIsUsed(this.state.cards, slot)) return slot; } return null; },
  getCardRemaining(player: Player, card: CardType, gw: number): number { if (CARDS[card].perGameweek) return slotIsUsed(this.state.cards, cardSlotId(player, card, gw)) ? 0 : 1; return Math.max(0, CARDS[card].allowance - this.state.cards.filter(c => c.player === player && c.card === card).length); },
  async addCard(card: CardEntry): Promise<void> {
    const error = validateCardShape(card); if (error) throw new Error(error);
    if (slotIsUsed(this.state.cards, card.slotId)) throw new Error(`That ${CARDS[card.card].label} slot has already been used.`);
    const cleanCard = { ...card, id: card.slotId, slotId: card.slotId, matchNo: card.matchNo ?? null, target: card.target ?? null, note: card.note ?? null };
    const ref = doc(cardsCol, cleanCard.id);
    try { await runTransaction(db, async tx => { const existing = await tx.get(ref); if (existing.exists()) throw new Error(`That ${CARDS[cleanCard.card].label} slot has already been used.`); tx.set(ref, cleanCard); }); if (!slotIsUsed(this.state.cards, cleanCard.id)) this.state.cards.push(cleanCard); }
    catch (error) { throw firestoreError('Card could not be saved', error); }
  },
  async removeCard(id: string) { try { await deleteDoc(doc(cardsCol, id)); this.state.cards = this.state.cards.filter(c => c.id !== id); } catch (error) { throw firestoreError('Card could not be deleted', error); } },
  async deleteMatch(id: string) { try { await deleteDoc(doc(matchesCol, id)); this.state.matches = this.state.matches.filter(m => m.id !== id); } catch (error) { throw firestoreError('Match could not be deleted', error); } },
  async seedFixtures(fixtures: FixtureSeed[]): Promise<number> {
    const missing = fixtures.filter(f => !this.state.matches.some(m => m.gw === f.gw && m.matchNo === f.matchNo));
    if (!missing.length) return 0;
    let written = 0;
    for (const fixture of missing) { const match: Match = { id: fixture.id, gw: fixture.gw, matchNo: fixture.matchNo, home: fixture.home, away: fixture.away, date: '', time: '' }; await setDoc(doc(matchesCol, match.id), match); this.state.matches.push(match); written++; }
    this._onUpdate?.(); return written;
  }
};

export { validateCardShape };
