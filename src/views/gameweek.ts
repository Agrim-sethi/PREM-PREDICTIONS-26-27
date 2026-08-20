import { store } from '../store/store';
import { PLAYERS, Prediction } from '../types';
import { calculateGameweekScores, applyNemesisSteals } from '../engine/scoring';
import { getProfile, isAdmin } from '../auth';

let activeGW = 1;

export function renderGameweek(): string {
  const profile = getProfile();
  const admin = isAdmin();
  const player = profile?.player;
  let html = `
    <div style="margin-bottom: 16px; display: flex; align-items: center; gap: 12px;">
      <label style="font-family:'Oswald',sans-serif; color:var(--chalk);">Select GW:</label>
      <input type="number" id="gw-select" min="1" max="38" value="${activeGW}" style="background:var(--ink); border:1px solid var(--line); color:var(--chalk); padding:6px; width:60px; border-radius:4px; font-family:'JetBrains Mono',monospace;">
      ${!admin ? `<span style="font-size:11px;color:var(--pitch);font-family:'JetBrains Mono',monospace;">ENTERING AS ${player?.toUpperCase()}</span>` : ''}
    </div>
  `;

  const matches = store.getMatchesByGW(activeGW);
  if (matches.length === 0) {
    return html + `<div class="panel-box" style="padding:20px; color:var(--muted); text-align:center;">No fixtures set up for GW${activeGW}. ${admin ? 'Go to Fixtures Setup to add them.' : 'The administrator has not set them up yet.'}</div>`;
  }

  html += `<div style="display:flex; flex-direction:column; gap:16px;">`;
  matches.forEach(m => {
    html += `
      <div class="panel-box" style="background:var(--panel); border:1px solid var(--line); border-radius:6px; padding:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid var(--line); padding-bottom:8px; gap:12px; flex-wrap:wrap;">
          <h3 style="font-family:'Oswald',sans-serif; font-size:16px; margin:0;">Match ${m.matchNo}: ${m.home} vs ${m.away}</h3>
          ${admin ? `
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:12px; color:var(--muted); font-family:'JetBrains Mono',monospace;">Result:</span>
              <input type="number" class="res-input" data-match="${m.id}" data-team="home" value="${m.result ? m.result.home : ''}" placeholder="H" style="width:40px; background:var(--ink); border:1px solid var(--line); color:var(--chalk); padding:4px; text-align:center;">
              <span>-</span>
              <input type="number" class="res-input" data-match="${m.id}" data-team="away" value="${m.result ? m.result.away : ''}" placeholder="A" style="width:40px; background:var(--ink); border:1px solid var(--line); color:var(--chalk); padding:4px; text-align:center;">
              <button class="save-res-btn" data-match="${m.id}" style="background:var(--pitch); border:none; padding:4px 8px; border-radius:4px; cursor:pointer; font-weight:bold;">Save</button>
            </div>
          ` : `<span style="font-size:12px;color:var(--muted);font-family:'JetBrains Mono',monospace;">${m.result ? `FINAL ${m.result.home}-${m.result.away}` : 'RESULT PENDING'}</span>`}
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:12px;">
          ${(admin ? PLAYERS : [player!]).map(p => {
            const pred = store.getPrediction(m.id, p);
            return `
              <div style="background:var(--ink); padding:8px; border-radius:4px; border:1px solid var(--line);">
                <div style="font-size:12px; color:var(--muted); margin-bottom:4px; font-weight:bold;">${p}${p === player && !admin ? ' · YOU' : ''}</div>
                <div style="display:flex; gap:4px; align-items:center;">
                  <input type="number" class="pred-input" data-match="${m.id}" data-player="${p}" data-team="home" value="${pred && pred.home !== null ? pred.home : ''}" placeholder="H" style="width:40px; background:var(--panel); border:1px solid var(--line); color:var(--chalk); padding:4px; text-align:center;">
                  <span>-</span>
                  <input type="number" class="pred-input" data-match="${m.id}" data-player="${p}" data-team="away" value="${pred && pred.away !== null ? pred.away : ''}" placeholder="A" style="width:40px; background:var(--panel); border:1px solid var(--line); color:var(--chalk); padding:4px; text-align:center;">
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  });
  html += `</div>`;

  html += `<div style="margin-top:20px;"><button id="save-all-preds" style="background:var(--pitch); color:#0d1712; padding:10px 20px; border:none; border-radius:4px; font-family:'Oswald',sans-serif; font-size:14px; font-weight:bold; cursor:pointer;">SAVE ${admin ? 'ALL' : 'MY'} PREDICTIONS FOR GW${activeGW}</button></div>`;

  const gwCards = store.getCardsForGW(activeGW);
  const scores = calculateGameweekScores(activeGW, matches, store.state.predictions, gwCards);
  applyNemesisSteals(scores, gwCards);
  html += `
    <div class="panel-box" style="background:var(--panel-2); border:1px solid var(--line); border-radius:6px; padding:16px; margin-top:24px;">
      <h3 style="font-family:'Oswald',sans-serif; margin-bottom:12px;">GW${activeGW} Points Breakdown</h3>
      <table style="width:100%; border-collapse: collapse; text-align: left; font-size:13px;">
        <thead><tr style="border-bottom:1px solid var(--line);color:var(--muted);font-family:'JetBrains Mono',monospace;"><th style="padding:8px 4px;">Player</th><th style="padding:8px 4px;">Raw Pts</th><th style="padding:8px 4px;">Cards Applied</th><th style="padding:8px 4px;">Final GW Pts</th></tr></thead>
        <tbody>${PLAYERS.map(p => {
          const sc = scores[p];
          const pCards = gwCards.filter(c => c.player === p || c.target === p || c.card === 'chaos');
          const cardTags = pCards.map(c => c.card === 'chaos' ? `<span style="color:var(--red)">CHAOS</span>` : c.player === p ? `<span style="color:var(--pitch)">${c.card.toUpperCase()}</span>` : `<span style="color:var(--maroon)">Target of ${c.card}</span>`).join(', ');
          return `<tr style="border-bottom:1px solid var(--line);"><td style="padding:8px 4px;font-weight:bold;">${p}</td><td style="padding:8px 4px;font-family:'JetBrains Mono',monospace;">${sc.rawPoints}</td><td style="padding:8px 4px;font-size:11px;">${cardTags || '-'}</td><td style="padding:8px 4px;font-weight:bold;font-family:'JetBrains Mono',monospace;color:var(--pitch);">${sc.finalPoints}</td></tr>`;
        }).join('')}</tbody>
      </table>
    </div>
  `;
  return html;
}

export function attachGameweekHandlers(reRender: () => void) {
  const admin = isAdmin();
  const profile = getProfile();
  const gwInput = document.getElementById('gw-select') as HTMLInputElement;
  if (gwInput) gwInput.addEventListener('change', e => { activeGW = parseInt((e.target as HTMLInputElement).value, 10); reRender(); });

  if (admin) {
    document.querySelectorAll('.save-res-btn').forEach(btn => btn.addEventListener('click', async e => {
      const matchId = (e.currentTarget as HTMLElement).dataset.match;
      if (!matchId) return;
      const hInput = document.querySelector(`.res-input[data-match="${matchId}"][data-team="home"]`) as HTMLInputElement;
      const aInput = document.querySelector(`.res-input[data-match="${matchId}"][data-team="away"]`) as HTMLInputElement;
      const match = store.getMatch(matchId);
      if (!match) return;
      match.result = hInput.value === '' || aInput.value === '' ? undefined : { home: parseInt(hInput.value, 10), away: parseInt(aInput.value, 10) };
      await store.addOrUpdateMatch(match);
      reRender();
    }));
  }

  document.getElementById('save-all-preds')?.addEventListener('click', async () => {
    const inputs = document.querySelectorAll('.pred-input');
    const predsMap: Record<string, Prediction> = {};
    inputs.forEach(input => {
      const i = input as HTMLInputElement;
      const matchId = i.dataset.match!;
      const player = i.dataset.player!;
      const team = i.dataset.team!;
      const key = matchId + '_' + player;
      if (!predsMap[key]) predsMap[key] = { matchId, player, home: null, away: null };
      if (i.value !== '') {
        if (team === 'home') predsMap[key].home = parseInt(i.value, 10);
        if (team === 'away') predsMap[key].away = parseInt(i.value, 10);
      }
    });
    const allowedPlayer = admin ? null : profile?.player;
    await Promise.all(Object.values(predsMap).filter(p => !allowedPlayer || p.player === allowedPlayer).map(p => store.setPrediction(p)));
    reRender();
  });
}
