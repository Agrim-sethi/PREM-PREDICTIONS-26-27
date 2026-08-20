export const PLAYERS = ['Agrim', 'Samarth', 'Dhairya', 'Luvi', 'Claude'] as const;
export type Player = typeof PLAYERS[number];

export type CardType = 'captain' | 'wildcard' | 'chaos' | 'floor' | 'mirror' | 'nemesis';

export interface CardDef {
  label: string;
  short: string;
  allowance: number;
  color: string;
  needsMatch: boolean;
  needsTarget: boolean;
  desc: string;
}

export const CARDS: Record<CardType, CardDef> = {
  captain: {label:'Captain', short:'CAPT', allowance:Infinity, color:'var(--pitch)', needsMatch:true, needsTarget:false, desc:'Doubles one match (base+scoreline+unique)'},
  wildcard:{label:'Wild Card', short:'WILD', allowance:2, color:'var(--gold)', needsMatch:false, needsTarget:false, desc:'Doubles your whole GW (stacks: 1=2x, 2=4x)'},
  chaos:   {label:'Chaos Card', short:'CHAOS', allowance:1, color:'var(--red)', needsMatch:false, needsTarget:false, desc:"Doubles EVERYONE's GW points"},
  floor:   {label:'Floor Card', short:'FLOOR', allowance:3, color:'var(--blue)', needsMatch:false, needsTarget:false, desc:'Guarantees 5 pts min for the GW'},
  mirror:  {label:'Mirror Card', short:'MIRR', allowance:5, color:'var(--violet)', needsMatch:true, needsTarget:true, desc:"Forces target's prediction to be overwritten by yours"},
  nemesis: {label:'Nemesis Card', short:'NEM', allowance:3, color:'var(--maroon)', needsMatch:false, needsTarget:true, desc:'Outscore target this GW, steal 3 pts'}
};

export interface Match {
  id: string;
  gw: number;
  matchNo: number; // 1-10
  home: string;
  away: string;
  date: string;
  time: string;
  result?: { home: number; away: number };
}

export interface Prediction {
  matchId: string;
  player: string;
  home: number | null; // null if unpredicted
  away: number | null;
}

export interface CardEntry {
  id: string;
  gw: number;
  player: string;
  card: CardType;
  matchNo?: number;
  target?: string;
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
  breakdown: Record<string, MatchScore>; // keyed by matchId
}
