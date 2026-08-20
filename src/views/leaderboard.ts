import { store } from '../store/store';
import { calculateGameweekScores, applyNemesisSteals } from '../engine/scoring';
import { PLAYERS, CARDS, Player } from '../types';

const PLAYER_COLORS: Record<Player, string> = {
  Agrim: '#4caf6d',
  Samarth: '#e0b94d',
  Dhairya: '#4c94d9',
  Luvi: '#a24450',
  Claude: '#5ec4b6'
};

interface RaceChartData {
  gws: number[];
  cumulative: Record<Player, number[]>;
}

let raceChartData: RaceChartData | null = null;

function computeLeaderboardData() {
  const totals: Record<string, number> = {};
  PLAYERS.forEach(p => { totals[p] = 0; });

  const stats: Record<string, { exactScores: number; correctOutcomes: number; uniques: number; cardsRemaining: number }> = {};
  PLAYERS.forEach(p => { stats[p] = { exactScores: 0, correctOutcomes: 0, uniques: 0, cardsRemaining: 0 }; });

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

  const running: Record<Player, number> = {} as Record<Player, number>;
  PLAYERS.forEach(p => { running[p] = 0; });
  const cumulative: Record<Player, number[]> = {} as Record<Player, number[]>;
  PLAYERS.forEach(p => { cumulative[p] = []; });
  const gws: number[] = [];

  let latestScoredGw = 0;
  for (let gw = 1; gw <= 38; gw++) {
    const gwMatches = store.getMatchesByGW(gw);
    if (gwMatches.some(m => m.result)) latestScoredGw = gw;
  }

  const chartThrough = latestScoredGw;

  for (let gw = 1; gw <= 38; gw++) {
    const gwCards = store.getCardsForGW(gw);
    const scores = calculateGameweekScores(gw, store.state.matches, store.state.predictions, gwCards);
    applyNemesisSteals(scores, gwCards);

    PLAYERS.forEach(p => {
      totals[p] += scores[p].finalPoints;
      if (gw <= chartThrough) running[p] += scores[p].finalPoints;

      Object.values(scores[p].breakdown).forEach(matchScore => {
        if (matchScore.outcomePts > 0) stats[p].correctOutcomes++;
        if (matchScore.scorePts > 0) stats[p].exactScores++;
        if (matchScore.uniquePts > 0) stats[p].uniques++;
      });
    });

    if (gw <= chartThrough && chartThrough > 0) {
      gws.push(gw);
      PLAYERS.forEach(p => cumulative[p].push(running[p]));
    }
  }

  raceChartData = chartThrough > 0 ? { gws, cumulative } : null;
  return { totals, stats, bankValues, sortedPlayers: PLAYERS.slice().sort((a, b) => totals[b] - totals[a]) };
}

function renderRaceChart(data: RaceChartData | null): string {
  if (!data || data.gws.length === 0) {
    return `
      <div class="panel-box race-chart">
        <h2 class="race-chart-title">Season Race</h2>
        <p class="race-chart-empty">Cumulative points will appear here once results are logged.</p>
      </div>
    `;
  }

  const W = 720;
  const H = 320;
  const pad = { top: 24, right: 28, bottom: 40, left: 44 };
  const plotW = W - pad.left - pad.right;
  const plotH = H - pad.top - pad.bottom;
  const n = data.gws.length;
  const allVals = PLAYERS.flatMap(p => data.cumulative[p]);
  const maxY = Math.max(10, ...allVals);
  const yMax = Math.ceil(maxY * 1.08);

  const xAt = (i: number) => pad.left + (n === 1 ? plotW / 2 : (i / (n - 1)) * plotW);
  const yAt = (v: number) => pad.top + plotH - (v / yMax) * plotH;

  const gridLines = 4;
  const grid = Array.from({ length: gridLines + 1 }, (_, i) => {
    const v = Math.round((yMax / gridLines) * i);
    const y = yAt(v);
    return `<line class="race-grid" x1="${pad.left}" y1="${y}" x2="${W - pad.right}" y2="${y}" />
      <text class="race-axis-label" x="${pad.left - 8}" y="${y + 3}" text-anchor="end">${v}</text>`;
  }).join('');

  const xLabels = data.gws.map((gw, i) => {
    const show = n <= 12 || i === 0 || i === n - 1 || gw % Math.ceil(n / 8) === 0;
    if (!show) return '';
    return `<text class="race-axis-label" x="${xAt(i)}" y="${H - 14}" text-anchor="middle">GW${gw}</text>`;
  }).join('');

  const lines = PLAYERS.map(p => {
    const pts = data.cumulative[p].map((v, i) => `${xAt(i)},${yAt(v)}`).join(' ');
    const color = PLAYER_COLORS[p];
    const dots = data.cumulative[p].map((v, i) =>
      `<circle class="race-dot" data-player="${p}" cx="${xAt(i)}" cy="${yAt(v)}" r="3.5" fill="${color}" />`
    ).join('');
    return `
      <polyline class="race-line-glow" points="${pts}" stroke="${color}" />
      <polyline class="race-line" points="${pts}" stroke="${color}" />
      ${dots}
    `;
  }).join('');

  const legend = PLAYERS.map(p =>
    `<span class="race-legend-item"><i style="background:${PLAYER_COLORS[p]}"></i>${p}</span>`
  ).join('');

  return `
    <div class="panel-box race-chart">
      <div class="race-chart-head">
        <h2 class="race-chart-title">Season Race</h2>
        <div class="race-legend">${legend}</div>
      </div>
      <div class="race-chart-stage" id="race-chart-stage">
        <svg id="race-chart-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Cumulative points by gameweek">
          <defs>
            <linearGradient id="race-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#1a2420" stop-opacity="0.15"/>
              <stop offset="100%" stop-color="#10151a" stop-opacity="0.55"/>
            </linearGradient>
          </defs>
          <rect x="${pad.left}" y="${pad.top}" width="${plotW}" height="${plotH}" fill="url(#race-fade)" rx="4"/>
          ${grid}
          ${lines}
          ${xLabels}
          <line id="race-crosshair" class="race-crosshair" x1="0" y1="${pad.top}" x2="0" y2="${pad.top + plotH}" visibility="hidden"/>
          <rect id="race-hit" class="race-hit" x="${pad.left}" y="${pad.top}" width="${plotW}" height="${plotH}" />
        </svg>
      </div>
      <div class="race-stats" id="race-chart-stats">
        <div class="race-stats-hint">Hover the chart to inspect standings by gameweek</div>
      </div>
    </div>
  `;
}

function formatRaceStats(gw: number, index: number): string {
  if (!raceChartData) return '';
  const rows = PLAYERS
    .map(p => ({ player: p, pts: raceChartData!.cumulative[p][index], color: PLAYER_COLORS[p] }))
    .sort((a, b) => b.pts - a.pts);
  return `
    <div class="race-stats-gw">GW${gw}</div>
    <div class="race-stats-list">
      ${rows.map(r => `
        <div class="race-stats-row">
          <span class="race-stats-name"><i style="background:${r.color}"></i>${r.player}</span>
          <span class="race-stats-pts">${r.pts}</span>
        </div>
      `).join('')}
    </div>
  `;
}

export function renderLeaderboard(): string {
  const { totals, stats, bankValues, sortedPlayers } = computeLeaderboardData();

  return `
    ${renderRaceChart(raceChartData)}
    <div class="panel-box" style="background:var(--panel); border:1px solid var(--line); border-radius:6px; padding:16px; overflow-x:auto; margin-top:18px;">
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
  if (!raceChartData || raceChartData.gws.length === 0) return;

  const svg = document.getElementById('race-chart-svg') as SVGSVGElement | null;
  const hit = document.getElementById('race-hit') as SVGRectElement | null;
  const crosshair = document.getElementById('race-crosshair') as SVGLineElement | null;
  const statsEl = document.getElementById('race-chart-stats');
  if (!svg || !hit || !crosshair || !statsEl) return;

  const data = raceChartData;
  const W = 720;
  const padLeft = 44;
  const padRight = 28;
  const plotW = W - padLeft - padRight;
  const n = data.gws.length;

  const xAt = (i: number) => padLeft + (n === 1 ? plotW / 2 : (i / (n - 1)) * plotW);

  const showAt = (index: number) => {
    const x = xAt(index);
    crosshair.setAttribute('x1', String(x));
    crosshair.setAttribute('x2', String(x));
    crosshair.setAttribute('visibility', 'visible');
    statsEl.innerHTML = formatRaceStats(data.gws[index], index);
    statsEl.classList.add('is-active');

    svg.querySelectorAll('.race-dot').forEach(dot => {
      const el = dot as SVGCircleElement;
      const cx = Number(el.getAttribute('cx'));
      el.classList.toggle('is-active', Math.abs(cx - x) < 0.5);
    });
  };

  const indexFromClientX = (clientX: number) => {
    const rect = svg.getBoundingClientRect();
    const scaleX = W / rect.width;
    const svgX = (clientX - rect.left) * scaleX;
    if (n === 1) return 0;
    const t = (svgX - padLeft) / plotW;
    return Math.max(0, Math.min(n - 1, Math.round(t * (n - 1))));
  };

  hit.addEventListener('mousemove', e => showAt(indexFromClientX(e.clientX)));
  hit.addEventListener('mouseleave', () => showAt(n - 1));

  // Seed with latest GW so the panel isn't empty on load
  showAt(n - 1);
}
