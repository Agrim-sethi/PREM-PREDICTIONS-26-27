import { Match, Prediction, CardEntry, PLAYERS, Player } from '../types';

const STORE_KEY = 'pl_predictions_league_v1';

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

export const store = {
  state: { ...defaultState },

  load() {
    try {
      const data = localStorage.getItem(STORE_KEY);
      if (data) {
        this.state = JSON.parse(data);
      }
    } catch (e) {
      console.error('Failed to load state', e);
    }
  },

  save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('Failed to save state', e);
    }
  },

  // Helpers
  getMatchesByGW(gw: number): Match[] {
    return this.state.matches.filter(m => m.gw === gw).sort((a, b) => a.matchNo - b.matchNo);
  },

  getMatch(id: string): Match | undefined {
    return this.state.matches.find(m => m.id === id);
  },

  addOrUpdateMatch(match: Match) {
    const idx = this.state.matches.findIndex(m => m.id === match.id);
    if (idx >= 0) {
      this.state.matches[idx] = match;
    } else {
      this.state.matches.push(match);
    }
    this.save();
  },

  getPredictionsForMatch(matchId: string): Prediction[] {
    return this.state.predictions.filter(p => p.matchId === matchId);
  },

  getPrediction(matchId: string, player: string): Prediction | undefined {
    return this.state.predictions.find(p => p.matchId === matchId && p.player === player);
  },

  setPrediction(pred: Prediction) {
    const idx = this.state.predictions.findIndex(p => p.matchId === pred.matchId && p.player === pred.player);
    if (idx >= 0) {
      this.state.predictions[idx] = pred;
    } else {
      this.state.predictions.push(pred);
    }
    this.save();
  },

  getCardsForGW(gw: number): CardEntry[] {
    return this.state.cards.filter(c => c.gw === gw).sort((a, b) => a.ts - b.ts);
  },

  getCardsByPlayer(player: string): CardEntry[] {
    return this.state.cards.filter(c => c.player === player);
  },

  addCard(card: CardEntry) {
    this.state.cards.push(card);
    this.save();
  },

  removeCard(id: string) {
    this.state.cards = this.state.cards.filter(c => c.id !== id);
    this.save();
  },

  deleteMatch(id: string) {
    this.state.matches = this.state.matches.filter(m => m.id !== id);
    this.save();
  }
};
