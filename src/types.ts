export const PLAYERS = ['Agrim', 'Samarth', 'Dhairya', 'Luvi', 'Claude'] as const;
export type Player = typeof PLAYERS[number];

export type CardType = 'captain' | 'wildcard' | 'chaos' | 'floor' | 'mirror' | 'nemesis';

export interface CardDef {
  label: string;
  short: string;
  allowance: number;
  perGameweek: boolean;
  color: string;
  needsMatch: boolean;
  needsTarget: boolean;
  desc: string;
}

export const CARDS: Record<CardType, CardDef> = {
  captain: {label:'Captain', short:'CAPT', allowance:1, perGameweek:true, color:'var(--pitch)', needsMatch:true, needsTarget:false, desc:'1 available every GW · doubles one match (base+scoreline+unique)'},
  wildcard:{label:'Wild Card', short:'WILD', allowance:2, perGameweek:false, color:'var(--gold)', needsMatch:false, needsTarget:false, desc:'2 available for the season · doubles your whole GW (stacks: 1=2x, 2=4x)'},
  chaos:   {label:'Chaos Card', short:'CHAOS', allowance:1, perGameweek:false, color:'var(--red)', needsMatch:false, needsTarget:false, desc:'1 available for the season · doubles EVERYONE\'s GW points'},
  floor:   {label:'Floor Card', short:'FLOOR', allowance:3, perGameweek:false, color:'var(--blue)', needsMatch:false, needsTarget:false, desc:'3 available for the season · guarantees 5 pts minimum for the GW'},
  mirror:  {label:'Mirror Card', short:'MIRR', allowance:5, perGameweek:false, color:'var(--violet)', needsMatch:true, needsTarget:true, desc:'5 available for the season · forces target\'s prediction to be overwritten by yours'},
  nemesis: {label:'Nemesis', short:'NEM', allowance:3, perGameweek:false, color:'var(--maroon)', needsMatch:false, needsTarget:true, desc:'3 available for the season · outscore target this GW, steal 3 pts'}
};

export interface Match {
  id: string;
  gw: number;
  matchNo: number;
  home: string;
  away: string;
  date: string;
  time: string;
  result?: { home: number; away: number };
}

export interface Prediction {
  matchId: string;
  player: string;
  home: number | null;
  away: number | null;
}

export interface CardEntry {
  id: string;
  gw: number;
  player: string;
  card: CardType;
  matchNo?: number;
  target?: Player;
  note?: string;
  ts: number;
}

export interface MatchScore {
  matchId: string;
  outcomePts: number;
  scorePts: number;
  uniquePts: number;
  total: number;
}

export interface PlayerGWScore {
  player: string;
  gw: number;
  rawPoints: number;
  finalPoints: number;
  breakdown: Record<string, MatchScore>;
}
