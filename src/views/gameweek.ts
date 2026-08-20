import { store } from '../store/store';
import { PLAYERS, Prediction, Player } from '../types';
import { calculateGameweekScores, applyNemesisSteals, getEffectivePredictions } from '../engine/scoring';
import { getProfile, isAdmin } from '../auth';

let activeGW = 1;

function resolveActiveGW(available: number[]): number {
  if (!available.length) return activeGW;
  if (available.includes(activeGW)) return activeGW;
  activeGW = available[0];
  return activeGW;
}

export function renderGameweek(): string {
  const profile = getProfile();
  const admin = isAdmin();
  const player = profile?.player;
  const available = store.getAvailableGameweeks();
  const gw = resolveActiveGW(available);

  const gwSelect = available.length
    ? `<select id="gw-select" style="background:var(--ink); border:1px solid var(--line); color:var(--chalk); padding:6px 10px; border-radius:4px; font-family:'JetBrains Mono',monospace;">
        ${available.map(g => `<option value="${g}" ${g === gw ? 'selected' : ''}>GW ${g}</option>`).join('')}
      </select>`
    : `<input type="number" id="gw-select" min="1" max="38" value="${gw}" style="background:var(--ink); border:1px solid var(--line); color:var(--chalk); padding:6px; width:60px; border-radius:4px; font-family:'JetBrains Mono',monospace;">`;

  let html = `
    <div style="margin-bottom:16px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <label style="font-family:'Oswald',sans-serif;color:var(--chalk);">Select GW:</label>
      ${gwSelect}
      ${!admin ? `<span style="font-size:11px;color:var(--pitch);font-family:'JetBrains Mono',monospace;">EDITING AS ${player?.toUpperCase()} · ALL PICKS VISIBLE</span>` : ''}
      ${available.length ? `<span style="font-size:11px;color:var(--muted);font-family:'JetBrains Mono',monospace;">${available.length} GAMEWEEK${available.length === 1 ? '' : 'S'} WITH FIXTURES</span>` : ''}
    </div>`;

  const matches = store.getMatchesByGW(gw);
  if (matches.length === 0) {
    const hint = available.length
      ? `Fixtures currently exist for: ${available.map(g => `GW${g}`).join(', ')}.`
      : 'No fixtures have been imported yet.';
    return html + `<div class="panel-box" style="padding:20px;color:var(--muted);text-align:center;">
      No fixtures set up for GW${gw}. ${admin ? 'Open Fixtures Setup and click “Import full season fixtures”, or add matches manually.' : 'Ask the administrator to import the season fixtures.'}
      <div style="margin-top:10px;font-size:12px;font-family:'JetBrains Mono',monospace;">${hint}</div>
    </div>`;
  }

  const gwCards = store.getCardsForGW(gw);
  const { predictions: effectivePredictions, mirrors } = getEffectivePredictions(matches, store.state.predictions, gwCards);

  const mirrorFor = (matchId: string, player: Player) => mirrors.find(m => m.matchId === matchId && m.targetPlayer === player);
  const effectivePredictionFor = (matchId: string, player: Player) => effectivePredictions.find(p => p.matchId === matchId && p.player === player);

  html += `<div style="display:flex;flex-direction:column;gap:16px;">`;
  matches.forEach(m => {
    html += `<div class="panel-box" style="background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;border-bottom:1px solid var(--line);padding-bottom:8px;gap:12px;flex-wrap:wrap;">
        <h3 style="font-family:'Oswald',sans-serif;font-size:16px;margin:0;">Match ${m.matchNo}: ${m.home} vs ${m.away}</h3>
        ${admin ? `<div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:12px;color:var(--muted);font-family:'JetBrains Mono',monospace;">Result:</span>
          <input type="number" class="res-input" data-match="${m.id}" data-team="home" value="${m.result ? m.result.home : ''}" placeholder="H" style="width:40px;background:var(--ink);border:1px solid var(--line);color:var(--chalk);padding:4px;text-align:center;">
          <span>-</span>
          <input type="number" class="res-input" data-match="${m.id}" data-team="away" value="${m.result ? m.result.away : ''}" placeholder="A" style="width:40px;background:var(--ink);border:1px solid var(--line);color:var(--chalk);padding:4px;text-align:center;">
          <button class="save-res-btn" data-match="${m.id}" style="background:var(--pitch);border:none;padding:4px 8px;border-radius:4px;cursor:pointer;font-weight:bold;">Save</button>
        </div>` : `<span style="font-size:12px;color:var(--muted);font-family:'JetBrains Mono',monospace;">${m.result ? `FINAL ${m.result.home}-${m.result.away}` : 'RESULT PENDING'}</span>`}
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:12px;">
        ${PLAYERS.map(p => {
          const original = store.getPrediction(m.id, p);
          const effective = effectivePredictionFor(m.id, p);
          const mirror = mirrorFor(m.id, p);
          const editable = admin || p === player;
          const shownHome = effective && effective.home !== null ? effective.home : null;
          const shownAway = effective && effective.away !== null ? effective.away : null;
          const originalText = original && original.home !== null && original.away !== null ? `${original.home}-${original.away}` : '—';
          const isMirrored = !!mirror;
          return `<div style="background:var(--ink);padding:10px;border-radius:4px;border:1px solid ${p === player ? 'var(--pitch)' : (isMirrored ? 'var(--violet)' : 'var(--line)')};">
            <div style="display:flex;justify-content:space-between;align-items:center;font-size:12px;color:${p === player ? 'var(--pitch)' : 'var(--muted)'};margin-bottom:6px;font-weight:bold;gap:6px;">
              <span>${p}${p === player && !admin ? ' · YOU' : ''}</span>
              ${editable ? '<span style="font-size:9px;color:var(--pitch);font-family:JetBrains Mono,monospace;">EDIT</span>' : '<span style="font-size:9px;color:var(--muted);font-family:JetBrains Mono,monospace;">VIEW</span>'}
            </div>
            ${isMirrored ? `<div style="margin-bottom:7px;padding:6px 8px;border:1px solid var(--violet);background:var(--panel-2);border-radius:4px;font-size:10px;line-height:1.35;color:var(--violet);font-family:'JetBrains Mono',monospace;">🪞 MIRRORED BY ${mirror!.sourcePlayer.toUpperCase()} · ORIGINAL ${originalText} → EFFECTIVE ${mirror!.sourceHome}-${mirror!.sourceAway}</div>` : ''}
            <div style="display:flex;gap:4px;align-items:center;">
              <input type="number" class="pred-input" data-match="${m.id}" data-player="${p}" data-team="home" value="${editable && original && original.home !== null ? original.home : (shownHome !== null ? shownHome : '')}" placeholder="H" ${editable ? '' : 'readonly'} style="width:48px;background:var(--panel);border:1px solid var(--line);color:var(--chalk);padding:5px;text-align:center;${editable ? '' : 'opacity:.65;cursor:not-allowed;'}">
              <span>-</span>
              <input type="number" class="pred-input" data-match="${m.id}" data-player="${p}" data-team="away" value="${editable && original && original.away !== null ? original.away : (shownAway !== null ? shownAway : '')}" placeholder="A" ${editable ? '' : 'readonly'} style="width:48px;background:var(--panel);border:1px solid var(--line);color:var(--chalk);padding:5px;text-align:center;${editable ? '' : 'opacity:.65;cursor:not-allowed;'}">
            </div>
            ${isMirrored && !editable ? `<div style="margin-top:6px;font-size:10px;color:var(--violet);font-family:'JetBrains Mono',monospace;">SCORING USES EFFECTIVE PICK: ${shownHome}-${shownAway}</div>` : ''}
          </div>`;
        }).join('')}
      </div>
    </div>`;
  });
  html += `</div>`;

  html += `<div style="margin-top:20px;"><button id="save-all-preds" style="background:var(--pitch);color:#0d1712;padding:10px 20px;border:none;border-radius:4px;font-family:'Oswald',sans-serif;font-size:14px;font-weight:bold;cursor:pointer;">SAVE ${admin ? 'ALL' : 'MY'} PREDICTIONS FOR GW${gw}</button><span id="pred-save-status" style="margin-left:12px;font-size:12px;font-family:'JetBrains Mono',monospace;color:var(--muted);"></span></div>`;

  const scores = calculateGameweekScores(gw, matches, store.state.predictions, gwCards);
  applyNemesisSteals(scores, gwCards);
  html += `<div class="panel-box" style="background:var(--panel-2);border:1px solid var(--line);border-radius:6px;padding:16px;margin-top:24px;">
    <h3 style="font-family:'Oswald',sans-serif;margin-bottom:12px;">GW${gw} Points Breakdown</h3>
    <table style="width:100%;border-collapse:collapse;text-align:left;font-size:13px;">
      <thead><tr style="border-bottom:1px solid var(--line);color:var(--muted);font-family:'JetBrains Mono',monospace;"><th style="padding:8px 4px;">Player</th><th style="padding:8px 4px;">Raw Pts</th><th style="padding:8px 4px;">Cards Applied</th><th style="padding:8px 4px;">Final GW Pts</th></tr></thead>
      <tbody>${PLAYERS.map(p => {
        const sc = scores[p];
        const pCards = gwCards.filter(c => c.player === p || c.target === p || c.card === 'chaos');
        const cardTags = pCards.map(c => c.card === 'chaos'
          ? `<span style="color:var(--red)">CHAOS</span>`
          : c.card === 'mirror'
            ? `<span style="color:var(--violet)">MIRROR ${c.player === p ? 'PLAYED' : `BY ${c.player}`}</span>`
            : c.card === 'nemesis'
              ? `<span style="color:var(--maroon)">NEMESIS ${c.player === p ? `→ ${c.target}` : `BY ${c.player}`}</span>`
              : c.player === p
                ? `<span style="color:var(--pitch)">${c.card.toUpperCase()}</span>`
                : `<span style="color:var(--maroon)">Target of ${c.card}`
        ).join(', ');
        return `<tr style="border-bottom:1px solid var(--line);"><td style="padding:8px 4px;font-weight:bold;">${p}</td><td style="padding:8px 4px;font-family:'JetBrains Mono',monospace;">${sc.rawPoints}</td><td style="padding:8px 4px;font-size:11px;">${cardTags || '-'}</td><td style="padding:8px 4px;font-weight:bold;font-family:'JetBrains Mono',monospace;color:var(--pitch);">${sc.finalPoints}</td></tr>`;
      }).join('')}</tbody>
    </table>
  </div>`;
  return html;
}

export function attachGameweekHandlers(reRender: () => void) {
  const admin = isAdmin();
  const profile = getProfile();
  const gwInput = document.getElementById('gw-select') as HTMLInputElement | HTMLSelectElement | null;
  if (gwInput) {
    const applyGw = () => {
      const next = parseInt(gwInput.value, 10);
      if (!Number.isInteger(next) || next < 1 || next > 38 || next === activeGW) return;
      activeGW = next;
      reRender();
    };
    gwInput.addEventListener('change', applyGw);
    gwInput.addEventListener('input', applyGw);
  }

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
    const status = document.getElementById('pred-save-status');
    const button = document.getElementById('save-all-preds') as HTMLButtonElement | null;
    const inputs = document.querySelectorAll('.pred-input');
    const predsMap: Record<string, Prediction> = {};
    inputs.forEach(input => {
      const i = input as HTMLInputElement;
      const matchId = i.dataset.match!;
      const p = i.dataset.player!;
      const team = i.dataset.team!;
      const editable = admin || p === profile?.player;
      if (!editable) return;
      const key = matchId + '_' + p;
      if (!predsMap[key]) predsMap[key] = { matchId, player: p, home: null, away: null };
      if (i.value !== '') {
        if (team === 'home') predsMap[key].home = parseInt(i.value, 10);
        if (team === 'away') predsMap[key].away = parseInt(i.value, 10);
      }
    });

    if (button) button.disabled = true;
    if (status) {
      status.style.color = 'var(--muted)';
      status.textContent = 'Saving…';
    }
    try {
      await Promise.all(Object.values(predsMap).map(pred => store.setPrediction(pred)));
      if (status) {
        status.style.color = 'var(--pitch)';
        status.textContent = `Saved ${Object.keys(predsMap).length} prediction(s).`;
      }
      reRender();
    } catch (error) {
      if (status) {
        status.style.color = 'var(--red)';
        status.textContent = error instanceof Error ? error.message : 'Save failed.';
      }
      if (button) button.disabled = false;
    }
  });
}
