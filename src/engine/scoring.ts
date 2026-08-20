import { Match, Prediction, CardEntry, PLAYERS, PlayerGWScore } from '../types';

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

  // Filter for this GW
  const gwMatches = matches.filter(m => m.gw === gw);
  if (gwMatches.length === 0) return scores;

  // 1. Mirror Card Pre-processing
  // "The rival's prediction for the chosen match is overwritten with Player A's prediction"
  const gwCards = cards.filter(c => c.gw === gw);
  const effectivePredictions = predictions.map(p => ({ ...p })); // deep copy

  const mirrorCards = gwCards.filter(c => c.card === 'mirror');
  for (const mirror of mirrorCards) {
    if (!mirror.matchNo || !mirror.target) continue;
    const targetMatch = gwMatches.find(m => m.matchNo === mirror.matchNo);
    if (!targetMatch) continue;

    // Find the player's prediction to copy
    const sourcePred = effectivePredictions.find(p => p.matchId === targetMatch.id && p.player === mirror.player);
    if (sourcePred && sourcePred.home !== null && sourcePred.away !== null) {
      // Overwrite target's prediction
      const targetPredIdx = effectivePredictions.findIndex(p => p.matchId === targetMatch.id && p.player === mirror.target);
      if (targetPredIdx >= 0) {
        effectivePredictions[targetPredIdx].home = sourcePred.home;
        effectivePredictions[targetPredIdx].away = sourcePred.away;
      } else {
        effectivePredictions.push({
          matchId: targetMatch.id,
          player: mirror.target,
          home: sourcePred.home,
          away: sourcePred.away
        });
      }
    }
  }

  // 2. Base match scoring
  for (const match of gwMatches) {
    if (!match.result) {
      // Initialize zero breakdown for unplayed matches
      PLAYERS.forEach(p => {
        scores[p].breakdown[match.id] = { matchId: match.id, outcomePts: 0, scorePts: 0, uniquePts: 0, total: 0 };
      });
      continue;
    }

    const { home: actualHome, away: actualAway } = match.result;
    const actualDiff = actualHome - actualAway;

    // Evaluate all predictions for this match
    const matchPreds = effectivePredictions.filter(p => p.matchId === match.id && p.home !== null && p.away !== null);
    
    const correctScorePlayers: string[] = [];
    const correctOutcomePlayers: string[] = [];

    const baseScores: Record<string, { outcome: number, score: number }> = {};
    PLAYERS.forEach(p => baseScores[p] = { outcome: 0, score: 0 });

    for (const pred of matchPreds) {
      const pHome = pred.home as number;
      const pAway = pred.away as number;
      const pDiff = pHome - pAway;

      // Outcome match
      if ((actualDiff > 0 && pDiff > 0) || (actualDiff < 0 && pDiff < 0) || (actualDiff === 0 && pDiff === 0)) {
        baseScores[pred.player].outcome = 1;
        correctOutcomePlayers.push(pred.player);
      }

      // Scoreline match
      if (actualHome === pHome && actualAway === pAway) {
        baseScores[pred.player].score = 2;
        correctScorePlayers.push(pred.player);
      }
    }

    // 3. Unique +1
    const uniqueScores: Record<string, number> = {};
    PLAYERS.forEach(p => uniqueScores[p] = 0);

    if (correctScorePlayers.length === 1) {
      // Exactly one person got exact scoreline
      uniqueScores[correctScorePlayers[0]] = 1;
    } else if (correctScorePlayers.length === 0 && correctOutcomePlayers.length === 1) {
      // No one got exact scoreline, exactly one person got outcome
      uniqueScores[correctOutcomePlayers[0]] = 1;
    }

    // Assign points to breakdown. Raw pts exclude all card multipliers (including Captain).
    // Captain is applied only into finalPoints / breakdown.total.
    PLAYERS.forEach(p => {
      const matchNo = match.matchNo;
      const isCap = gwCards.some(c => c.player === p && c.card === 'captain' && c.matchNo === matchNo);

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

  // 5. Wild Card
  PLAYERS.forEach(p => {
    const wcCount = gwCards.filter(c => c.player === p && c.card === 'wildcard').length;
    if (wcCount > 0) {
      scores[p].finalPoints *= Math.pow(2, wcCount);
    }
  });

  // 6. Chaos Card
  const chaosCount = gwCards.filter(c => c.card === 'chaos').length;
  if (chaosCount > 0) {
    const multiplier = Math.pow(2, chaosCount);
    PLAYERS.forEach(p => {
      scores[p].finalPoints *= multiplier;
    });
  }

  // 7. Floor Card (Applied last)
  PLAYERS.forEach(p => {
    const hasFloor = gwCards.some(c => c.player === p && c.card === 'floor');
    if (hasFloor && scores[p].finalPoints < 5) {
      scores[p].finalPoints = 5;
    }
  });

  return scores;
}

export function applyNemesisSteals(gwScores: Record<string, PlayerGWScore>, cards: CardEntry[]) {
  // 8. Nemesis Card (post-GW)
  // Must clone to avoid mutating while evaluating
  const originalFinals: Record<string, number> = {};
  PLAYERS.forEach(p => {
    originalFinals[p] = gwScores[p].finalPoints;
  });

  for (const c of cards) {
    if (c.card === 'nemesis' && c.target) {
      const pScore = originalFinals[c.player];
      const targetScore = originalFinals[c.target];
      if (pScore > targetScore) {
        // Steal successful!
        gwScores[c.player].finalPoints += 3;
        gwScores[c.target].finalPoints -= 3;
      }
    }
  }
}
