import { store } from '../store/store';
import { calculateGameweekScores, applyNemesisSteals } from '../engine/scoring';
import { PLAYERS, CARDS } from '../types';

export function renderLeaderboard(): string {
  // Calculate total scores up to GW 38
  const totals: Record<string, number> = {};
  PLAYERS.forEach(p => totals[p] = 0);

  // Stats
  const stats: Record<string, { exactScores: number; correctOutcomes: number; uniques: number; cardsRemaining: number }> = {};
  PLAYERS.forEach(p => stats[p] = { exactScores: 0, correctOutcomes: 0, uniques: 0, cardsRemaining: 0 });

  // Bank values (unused cards)
  const bankValues: Record<string, number> = {};
  PLAYERS.forEach(p => {
    let unusedPoints = 0;
    let remainingCards = 0;
    const pCards = store.getCardsByPlayer(p);
    Object.entries(CARDS).forEach(([cardType, cardDef]) => {
      if (cardType === 'captain') return;
      const played = pCards.filter(c => c.card === cardType).length;
      const remaining = Math.max(0, cardDef.allowance - played);
      unusedPoints += remaining * 2;
      remainingCards += remaining;
    });
    bankValues[p] = unusedPoints;
    stats[p].cardsRemaining = remainingCards;
  });

  // Calculate scores per GW
  for (let gw = 1; gw <= 38; gw++) {
    const gwCards = store.getCardsForGW(gw);
    const scores = calculateGameweekScores(gw, store.state.matches, store.state.predictions, gwCards);
    // Apply nemesis
    applyNemesisSteals(scores, gwCards);

    PLAYERS.forEach(p => {
      totals[p] += scores[p].finalPoints;

      Object.values(scores[p].breakdown).forEach(matchScore => {
        if (matchScore.outcomePts > 0) stats[p].correctOutcomes++;
        if (matchScore.scorePts > 0) stats[p].exactScores++;
        if (matchScore.uniquePts > 0) stats[p].uniques++;
      });
    });
  }

  // Sort players by total (descending)
  const sortedPlayers = PLAYERS.slice().sort((a, b) => totals[b] - totals[a]);

  return `
    <div class="panel-box" style="background:var(--panel); border:1px solid var(--line); border-radius:6px; padding:16px; overflow-x:auto;">
      <h2 style="font-family:'Oswald',sans-serif; font-size:16px; color:var(--chalk); margin-bottom:16px; text-transform:uppercase;">Overall Leaderboard</h2>
      
      <table style="width:100%; border-collapse: collapse; text-align: left; min-width:600px;">
        <thead>
          <tr style="border-bottom: 1px solid var(--line); color: var(--muted); font-size: 11px; font-family: 'JetBrains Mono', monospace;">
            <th style="padding: 8px 4px;">Pos</th>
            <th style="padding: 8px 4px;">Player</th>
            <th style="padding: 8px 4px;" title="Any correct outcome prediction">Correct Preds</th>
            <th style="padding: 8px 4px;" title="Exact scoreline predictions">Exact Scores</th>
            <th style="padding: 8px 4px;" title="Predictions where only you got it right">Uniques</th>
            <th style="padding: 8px 4px;">Cards Left</th>
            <th style="padding: 8px 4px;">Points</th>
            <th style="padding: 8px 4px;">Total (Points + Value Of Cards)</th>
          </tr>
        </thead>
        <tbody>
          ${sortedPlayers.map((p, idx) => `
            <tr style="border-bottom: 1px solid var(--line); font-size: 13px;">
              <td style="padding: 10px 4px; font-weight: bold; font-family: 'JetBrains Mono', monospace; color: var(--pitch);">${idx + 1}</td>
              <td style="padding: 10px 4px; font-family: 'Oswald', sans-serif; font-size: 15px;">${p}</td>
              <td style="padding: 10px 4px; font-family: 'JetBrains Mono', monospace; color: var(--chalk);">${stats[p].correctOutcomes}</td>
              <td style="padding: 10px 4px; font-family: 'JetBrains Mono', monospace; color: var(--chalk);">${stats[p].exactScores}</td>
              <td style="padding: 10px 4px; font-family: 'JetBrains Mono', monospace; color: var(--chalk);">${stats[p].uniques}</td>
              <td style="padding: 10px 4px; font-family: 'JetBrains Mono', monospace; color: var(--chalk);">${stats[p].cardsRemaining}</td>
              <td style="padding: 10px 4px; font-family: 'JetBrains Mono', monospace; font-weight: bold; font-size: 15px;">${totals[p]}</td>
              <td style="padding: 10px 4px; font-family: 'JetBrains Mono', monospace; font-weight: bold; color: var(--chalk);">${totals[p] + bankValues[p]}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

export function attachLeaderboardHandlers() {
  // No specific handlers yet
}
