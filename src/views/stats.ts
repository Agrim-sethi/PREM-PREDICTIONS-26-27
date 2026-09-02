import { store } from '../store/store';
import { calculateGameweekScores } from '../engine/scoring';
import { CARDS, PLAYERS, Player } from '../types';

interface PlayerStats {
  player: Player;
  completedMatches: number;
  predictionsMade: number;
  correctOutcomes: number;
  exactScores: number;
  uniquePoints: number;
  rawPoints: number;
  finalPoints: number;
  cardAidedPoints: number;
  nemesisNet: number;
  captainUsed: number;
  wildcardUsed: number;
  chaosUsed: number;
  floorUsed: number;
  mirrorUsed: number;
  nemesisUsed: number;
  cardsPlayed: number;
}

function emptyStats(player: Player): PlayerStats {
  return { player, completedMatches: 0, predictionsMade: 0, correctOutcomes: 0, exactScores: 0, uniquePoints: 0, rawPoints: 0, finalPoints: 0, cardAidedPoints: 0, nemesisNet: 0, captainUsed: 0, wildcardUsed: 0, chaosUsed: 0, floorUsed: 0, mirrorUsed: 0, nemesisUsed: 0, cardsPlayed: 0 };
}

function computeStats(): Record<Player, PlayerStats> {
  const stats = {} as Record<Player, PlayerStats>;
  PLAYERS.forEach(p => { stats[p] = emptyStats(p); });

  for (let gw = 1; gw <= 38; gw++) {
    const matches = store.getMatchesByGW(gw);
    if (!matches.length) continue;
    const completed = matches.filter(m => !!m.result);
    if (!completed.length) continue;

    PLAYERS.forEach(p => {
      stats[p].completedMatches += completed.length;
      stats[p].predictionsMade += completed.filter(m => {
        const pred = store.getPrediction(m.id, p);
        return !!pred && pred.home != null && pred.away != null;
      }).length;
    });

    const gwCards = store.getCardsForGW(gw);
    PLAYERS.forEach(p => {
      const playerCards = gwCards.filter(c => c.player === p);
      stats[p].cardsPlayed += playerCards.length;
      stats[p].captainUsed += playerCards.filter(c => c.card === 'captain').length;
      stats[p].wildcardUsed += playerCards.filter(c => c.card === 'wildcard').length;
      stats[p].chaosUsed += playerCards.filter(c => c.card === 'chaos').length;
      stats[p].floorUsed += playerCards.filter(c => c.card === 'floor').length;
      stats[p].mirrorUsed += playerCards.filter(c => c.card === 'mirror').length;
      stats[p].nemesisUsed += playerCards.filter(c => c.card === 'nemesis').length;
    });

    const scores = calculateGameweekScores(gw, store.state.matches, store.state.predictions, gwCards);
    PLAYERS.forEach(p => {
      const sc = scores[p];
      stats[p].rawPoints += sc.rawPoints;
      Object.values(sc.breakdown).forEach(matchScore => {
        if (matchScore.outcomePts > 0) stats[p].correctOutcomes++;
        if (matchScore.scorePts > 0) stats[p].exactScores++;
        stats[p].uniquePoints += matchScore.uniquePts;
      });
      stats[p].finalPoints += sc.finalPoints;
    });

    // Nemesis is only evaluated after all ten results are in, and compares the
    // player's pre-Nemesis total against the target's pre-Nemesis total.
    if (matches.every(m => !!m.result)) {
      for (const card of gwCards) {
        if (card.card !== 'nemesis' || !card.target) continue;
        const playerScore = scores[card.player].finalPoints;
        const targetScore = scores[card.target].finalPoints;
        if (playerScore > targetScore) {
          stats[card.player].nemesisNet += 3;
          stats[card.target].nemesisNet -= 3;
        }
      }
    }
  }

  PLAYERS.forEach(p => {
    stats[p].finalPoints += stats[p].nemesisNet;
    stats[p].cardAidedPoints = stats[p].finalPoints - stats[p].rawPoints;
  });

  return stats;
}

function pct(numerator: number, denominator: number): string {
  if (!denominator) return '—';
  return `${((numerator / denominator) * 100).toFixed(1)}%`;
}

function winnerBy(rows: Player[], value: (p: Player) => number): Player | null {
  if (!rows.length) return null;
  return rows.slice().sort((a, b) => value(b) - value(a))[0] ?? null;
}

function statCard(label: string, value: string, note = ''): string {
  return `<div class="panel-box" style="background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:14px;min-width:0;">
    <div style="font:700 10px 'JetBrains Mono',monospace;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;">${label}</div>
    <div style="font:700 25px 'Oswald',sans-serif;color:var(--chalk);margin-top:5px;">${value}</div>
    ${note ? `<div style="font-size:10px;color:var(--muted);margin-top:3px;">${note}</div>` : ''}
  </div>`;
}

export function renderStats(): string {
  const stats = computeStats();
  const rows = PLAYERS.slice().sort((a, b) => stats[b].finalPoints - stats[a].finalPoints);
  const completedMatches = PLAYERS.length ? Math.max(...PLAYERS.map(p => stats[p].completedMatches)) : 0;
  const completedGameweeks = Array.from({ length: 38 }, (_, i) => i + 1).filter(gw => {
    const matches = store.getMatchesByGW(gw);
    return matches.length > 0 && matches.every(m => !!m.result);
  }).length;

  const bestAccuracy = winnerBy(rows, p => stats[p].completedMatches ? stats[p].correctOutcomes / Math.max(1, stats[p].predictionsMade) : 0);
  const mostExact = winnerBy(rows, p => stats[p].exactScores);
  const mostCardImpact = winnerBy(rows, p => stats[p].cardAidedPoints);

  return `<div>
    <div style="margin-bottom:16px;">
      <h2 style="font-family:'Oswald',sans-serif;font-size:18px;margin:0;text-transform:uppercase;">Participant Statistics</h2>
      <div style="font-size:11px;color:var(--muted);font-family:'JetBrains Mono',monospace;margin-top:4px;">LIVE PERFORMANCE PROFILE · ${completedGameweeks} COMPLETED GAMEWEEKS · ${completedMatches} COMPLETED MATCHES</div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:10px;margin-bottom:18px;">
      ${statCard('League Leader', rows[0] ?? '—', rows[0] ? `${stats[rows[0]].finalPoints} total pts` : '')}
      ${statCard('Best Accuracy', bestAccuracy ?? '—', bestAccuracy ? pct(stats[bestAccuracy].correctOutcomes, stats[bestAccuracy].predictionsMade) : '')}
      ${statCard('Most Exact Scores', mostExact ?? '—', mostExact ? `${stats[mostExact].exactScores} exact` : '')}
      ${statCard('Most Card Impact', mostCardImpact ?? '—', mostCardImpact ? `${stats[mostCardImpact].cardAidedPoints >= 0 ? '+' : ''}${stats[mostCardImpact].cardAidedPoints} pts` : '')}
    </div>

    <div class="panel-box" style="background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:16px;overflow-x:auto;">
      <h3 style="font-family:'Oswald',sans-serif;font-size:15px;margin-bottom:12px;text-transform:uppercase;">Full Participant Comparison</h3>
      <div class="table-scroll" tabindex="0" aria-label="Participant statistics table">
        <table style="width:100%;border-collapse:collapse;text-align:left;font-size:12px;min-width:1220px;">
          <thead><tr style="border-bottom:1px solid var(--line);color:var(--muted);font:11px 'JetBrains Mono',monospace;">
            <th style="padding:8px 5px;">Player</th><th style="padding:8px 5px;">Preds Made</th><th style="padding:8px 5px;">Correct Outcome</th><th style="padding:8px 5px;">Outcome %</th><th style="padding:8px 5px;">Exact Scores</th><th style="padding:8px 5px;">Exact %</th><th style="padding:8px 5px;">Unique Pts</th><th style="padding:8px 5px;">Unique %</th><th style="padding:8px 5px;">Raw Pts</th><th style="padding:8px 5px;">Card Aided</th><th style="padding:8px 5px;">Nemesis Net</th><th style="padding:8px 5px;">Final Pts</th>
          </tr></thead>
          <tbody>${rows.map(p => { const s = stats[p]; return `<tr style="border-bottom:1px solid var(--line);">
            <td style="padding:10px 5px;font-family:'Oswald',sans-serif;font-size:15px;font-weight:bold;">${p}</td>
            <td style="padding:10px 5px;font-family:'JetBrains Mono',monospace;">${s.predictionsMade} / ${s.completedMatches}</td>
            <td style="padding:10px 5px;font-family:'JetBrains Mono',monospace;">${s.correctOutcomes}</td>
            <td style="padding:10px 5px;font-family:'JetBrains Mono',monospace;color:var(--pitch);">${pct(s.correctOutcomes,s.predictionsMade)}</td>
            <td style="padding:10px 5px;font-family:'JetBrains Mono',monospace;">${s.exactScores}</td>
            <td style="padding:10px 5px;font-family:'JetBrains Mono',monospace;">${pct(s.exactScores,s.predictionsMade)}</td>
            <td style="padding:10px 5px;font-family:'JetBrains Mono',monospace;">${s.uniquePoints}</td>
            <td style="padding:10px 5px;font-family:'JetBrains Mono',monospace;">${pct(s.uniquePoints,s.predictionsMade)}</td>
            <td style="padding:10px 5px;font-family:'JetBrains Mono',monospace;font-weight:bold;">${s.rawPoints}</td>
            <td style="padding:10px 5px;font-family:'JetBrains Mono',monospace;color:${s.cardAidedPoints >= 0 ? 'var(--pitch)' : 'var(--red)'};">${s.cardAidedPoints >= 0 ? '+' : ''}${s.cardAidedPoints}</td>
            <td style="padding:10px 5px;font-family:'JetBrains Mono',monospace;">${s.nemesisNet >= 0 ? '+' : ''}${s.nemesisNet}</td>
            <td style="padding:10px 5px;font-family:'JetBrains Mono',monospace;font-weight:bold;color:var(--chalk);">${s.finalPoints}</td>
          </tr>`; }).join('')}</tbody>
        </table>
      </div>
    </div>

    <div class="panel-box" style="background:var(--panel-2);border:1px solid var(--line);border-radius:6px;padding:16px;margin-top:16px;overflow-x:auto;">
      <h3 style="font-family:'Oswald',sans-serif;font-size:15px;margin-bottom:12px;text-transform:uppercase;">Card Usage</h3>
      <div class="table-scroll" tabindex="0" aria-label="Card usage table">
        <table style="width:100%;border-collapse:collapse;text-align:left;font-size:12px;min-width:900px;">
          <thead><tr style="border-bottom:1px solid var(--line);color:var(--muted);font:11px 'JetBrains Mono',monospace;"><th style="padding:8px 5px;">Player</th><th style="padding:8px 5px;">Total Cards</th><th style="padding:8px 5px;">Captain</th><th style="padding:8px 5px;">Wild</th><th style="padding:8px 5px;">Chaos</th><th style="padding:8px 5px;">Floor</th><th style="padding:8px 5px;">Mirror</th><th style="padding:8px 5px;">Nemesis</th><th style="padding:8px 5px;">Card Uplift</th></tr></thead>
          <tbody>${rows.map(p => { const s = stats[p]; return `<tr style="border-bottom:1px solid var(--line);">
            <td style="padding:10px 5px;font-family:'Oswald',sans-serif;font-weight:bold;">${p}</td><td style="padding:10px 5px;font-family:'JetBrains Mono',monospace;">${s.cardsPlayed}</td><td style="padding:10px 5px;font-family:'JetBrains Mono',monospace;">${s.captainUsed}</td><td style="padding:10px 5px;font-family:'JetBrains Mono',monospace;">${s.wildcardUsed}</td><td style="padding:10px 5px;font-family:'JetBrains Mono',monospace;">${s.chaosUsed}</td><td style="padding:10px 5px;font-family:'JetBrains Mono',monospace;">${s.floorUsed}</td><td style="padding:10px 5px;font-family:'JetBrains Mono',monospace;">${s.mirrorUsed}</td><td style="padding:10px 5px;font-family:'JetBrains Mono',monospace;">${s.nemesisUsed}</td><td style="padding:10px 5px;font-family:'JetBrains Mono',monospace;color:var(--pitch);">${s.cardAidedPoints >= 0 ? '+' : ''}${s.cardAidedPoints}</td>
          </tr>`; }).join('')}</tbody>
        </table>
      </div>
    </div>

    <div style="margin-top:12px;color:var(--muted);font-size:10px;font-family:'JetBrains Mono',monospace;line-height:1.5;">OUTCOME % = correct outcomes ÷ predictions made · EXACT % = exact scorelines ÷ predictions made · UNIQUE % = unique points ÷ predictions made. Raw points exclude card effects. Card Aided = final points − raw points; Nemesis is shown separately.</div>
  </div>`;
}
