import { Match, Prediction, CardEntry } from '../types';
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

export interface AppState {
  matches: Match[];
  predictions: Prediction[];
  cards: CardEntry[];
}

const defaultState: AppState = {
  matches: [],
  predictions: [],
  cards: []
};

// Firestore collection references
const matchesCol = collection(db, 'matches');
const predictionsCol = collection(db, 'predictions');
const cardsCol = collection(db, 'cards');

// Unsubscribe functions stored for potential cleanup
const _unsubscribers: (() => void)[] = [];

export const store = {
  state: { ...defaultState } as AppState,
  _onUpdate: null as (() => void) | null,

  load(onUpdate?: () => void) {
    if (onUpdate) this._onUpdate = onUpdate;

    // Listen to matches collection
    _unsubscribers.push(onSnapshot(matchesCol, (snap: QuerySnapshot<DocumentData>) => {
      this.state.matches = snap.docs.map(d => ({ ...d.data(), id: d.id } as Match));
      this._onUpdate?.();
    }));

    // Listen to predictions collection
    _unsubscribers.push(onSnapshot(predictionsCol, (snap: QuerySnapshot<DocumentData>) => {
      this.state.predictions = snap.docs.map(d => d.data() as Prediction);
      this._onUpdate?.();
    }));

    // Listen to cards collection
    _unsubscribers.push(onSnapshot(cardsCol, (snap: QuerySnapshot<DocumentData>) => {
      this.state.cards = snap.docs.map(d => ({ ...d.data(), id: d.id } as CardEntry));
      this._onUpdate?.();
    }));
  },

  // Helpers (read from local state, which is kept in sync by onSnapshot)
  getMatchesByGW(gw: number): Match[] {
    return this.state.matches.filter(m => m.gw === gw).sort((a, b) => a.matchNo - b.matchNo);
  },

  getMatch(id: string): Match | undefined {
    return this.state.matches.find(m => m.id === id);
  },

  async addOrUpdateMatch(match: Match) {
    const idx = this.state.matches.findIndex(m => m.id === match.id);
    if (idx >= 0) {
      this.state.matches[idx] = match;
    } else {
      this.state.matches.push(match);
    }
    await setDoc(doc(matchesCol, match.id), match);
  },

  getPredictionsForMatch(matchId: string): Prediction[] {
    return this.state.predictions.filter(p => p.matchId === matchId);
  },

  getPrediction(matchId: string, player: string): Prediction | undefined {
    return this.state.predictions.find(p => p.matchId === matchId && p.player === player);
  },

  async setPrediction(pred: Prediction) {
    const idx = this.state.predictions.findIndex(p => p.matchId === pred.matchId && p.player === pred.player);
    if (idx >= 0) {
      this.state.predictions[idx] = pred;
    } else {
      this.state.predictions.push(pred);
    }
    // Use a composite key for prediction docs
    const predId = `${pred.matchId}_${pred.player}`;
    await setDoc(doc(predictionsCol, predId), pred);
  },

  getCardsForGW(gw: number): CardEntry[] {
    return this.state.cards.filter(c => c.gw === gw).sort((a, b) => a.ts - b.ts);
  },

  getCardsByPlayer(player: string): CardEntry[] {
    return this.state.cards.filter(c => c.player === player);
  },

  async addCard(card: CardEntry) {
    this.state.cards.push(card);
    await setDoc(doc(cardsCol, card.id), card);
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
