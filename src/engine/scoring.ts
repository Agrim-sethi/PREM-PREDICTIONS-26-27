import { Match, Prediction, CardEntry, PLAYERS, PlayerGWScore, Player } from '../types';

export interface MirrorEffect {
  matchId: string;
  matchNo: number;
  sourcePlayer: Player;
  targetPlayer: Player;
  sourceHome: number;
  sourceAway: number;
}

/**
 * Returns the predictions that actually count for scoring, plus a record of
 * every Mirror overwrite. Stored predictions are never mutated.
 */
export function getEffectivePredictions(
  matches: Match[],
  predictions: Prediction[],
  cards: CardEntry[]
): { predictions: Prediction[]; mirrors: MirrorEffect[] } {
  const effectivePredictions = predictions.map(p => ({ ...p }));
  const mirrors: MirrorEffect[] = [];

  for (const mirror of cards.filter(c => c.card === 'mirror')) {
    if (mirror.matchNo === null || mirror.target === null) continue;
    const targetMatch = matches.find(m => m.matchNo === mirror.matchNo);
    if (!targetMatch) continue;

    const sourcePred = effectivePredictions.find(
      p => p.matchId === targetMatch.id && p.player === mirror.player
    );
    if (!sourcePred || sourcePred.home === null || sourcePred.away === null) continue;

    const targetPredIndex = effectivePredictions.findIndex(
      p => p.matchId === targetMatch.id && p.player === mirror.target
    );

    if (targetPredIndex >= 0) {
      effectivePredictions[targetPredIndex].home = sourcePred.home;
      effectivePredictions[targetPredIndex].away = sourcePred.away;
    } else {
      effectivePredictions.push({
        matchId: targetMatch.id,
        player: mirror.target,
        home: sourcePred.home,
        away: sourcePred.away
      });
    }

    mirrors.push({
      matchId: targetMatch.id,
      matchNo: targetMatch.matchNo,
      sourcePlayer: mirror.player,
      targetPlayer: mirror.target,
      sourceHome: sourcePred.home,
      sourceAway: sourcePred.away
    });
  }

  return { predictions: effectivePredictions, mirrors };
}

export function calculateGameweekScores(
  gw: number,
  matches: Match[],
  predictions: Prediction[],
  cards: CardEntry[]
): Record<string, PlayerGWScore> {
  const scores: Record<string, PlayerGWScore> = {};

  PLAYERS.forEach(p => {
    scores[p] = {
      player: p,
      gw,
      rawPoints: 0,
      finalPoints: 0,
      breakdown: {}
    };
  });

  const gwMatches = matches.filter(m => m.gw === gw);
  if (gwMatches.length === 0) return scores;

  const gwCards = cards.filter(c => c.gw === gw);
  const { predictions: effectivePredictions } = getEffectivePredictions(gwMatches, predictions, gwCards);

  for (const match of gwMatches) {
    if (!match.result) {
      PLAYERS.forEach(p => {
        scores[p].breakdown[match.id] = {
          matchId: match.id,
          outcomePts: 0,
          scorePts: 0,
          uniquePts: 0,
          total: 0
        };
      });
      continue;
    }

    const { home: actualHome, away: actualAway } = match.result;
    const actualDiff = actualHome - actualAway;
    const matchPreds = effectivePredictions.filter(
      p => p.matchId === match.id && p.home !== null && p.away !== null
    );

    const correctScorePlayers: string[] = [];
    const correctOutcomePlayers: string[] = [];
    const baseScores: Record<string, { outcome: number; score: number }> = {};
    PLAYERS.forEach(p => { baseScores[p] = { outcome: 0, score: 0 }; });

    for (const pred of matchPreds) {
      const pHome = pred.home as number;
      const pAway = pred.away as number;
      const pDiff = pHome - pAway;

      if (
        (actualDiff > 0 && pDiff > 0) ||
        (actualDiff < 0 && pDiff < 0) ||
        (actualDiff === 0 && pDiff === 0)
      ) {
        baseScores[pred.player].outcome = 1;
        correctOutcomePlayers.push(pred.player);
      }

      if (actualHome === pHome && actualAway === pAway) {
        baseScores[pred.player].score = 2;
        correctScorePlayers.push(pred.player);
      }
    }

    const uniqueScores: Record<string, number> = {};
    PLAYERS.forEach(p => { uniqueScores[p] = 0; });

    if (correctScorePlayers.length === 1) {
      uniqueScores[correctScorePlayers[0]] = 1;
    } else if (correctScorePlayers.length === 0 && correctOutcomePlayers.length === 1) {
      uniqueScores[correctOutcomePlayers[0]] = 1;
    }

    PLAYERS.forEach(p => {
      const isCap = gwCards.some(
        c => c.player === p && c.card === 'captain' && c.matchNo === match.matchNo
      );

      const outcomePts = baseScores[p].outcome;
      const scorePts = baseScores[p].score;
      const uniquePts = uniqueScores[p];
      const baseTotal = outcomePts + scorePts + uniquePts;
      const withCaptain = isCap ? baseTotal * 2 : baseTotal;

      scores[p].breakdown[match.id] = {
        matchId: match.id,
        outcomePts,
        scorePts,
        uniquePts,
        total: withCaptain
      };

      scores[p].rawPoints += baseTotal;
      scores[p].finalPoints += withCaptain;
    });
  }

  PLAYERS.forEach(p => {
    const wcCount = gwCards.filter(c => c.player === p && c.card === 'wildcard').length;
    if (wcCount > 0) scores[p].finalPoints *= Math.pow(2, wcCount);
  });

  const chaosCount = gwCards.filter(c => c.card === 'chaos').length;
  if (chaosCount > 0) {
    const multiplier = Math.pow(2, chaosCount);
    PLAYERS.forEach(p => { scores[p].finalPoints *= multiplier; });
  }

  PLAYERS.forEach(p => {
    const hasFloor = gwCards.some(c => c.player === p && c.card === 'floor');
    if (hasFloor && scores[p].finalPoints < 5) scores[p].finalPoints = 5;
  });

  return scores;
}

export function applyNemesisSteals(
  gwScores: Record<string, PlayerGWScore>,
  cards: CardEntry[]
) {
  const originalFinals: Record<string, number> = {};
  PLAYERS.forEach(p => { originalFinals[p] = gwScores[p].finalPoints; });

  for (const c of cards) {
    if (c.card === 'nemesis' && c.target) {
      const pScore = originalFinals[c.player];
      const targetScore = originalFinals[c.target];
      if (pScore > targetScore) {
        gwScores[c.player].finalPoints += 3;
        gwScores[c.target].finalPoints -= 3;
      }
    }
  }
}
