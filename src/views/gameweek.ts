import { store } from '../store/store';
import { PLAYERS, Prediction, Player } from '../types';
import { calculateGameweekScores, applyNemesisSteals, getEffectivePredictions } from '../engine/scoring';
import { getProfile, isAdmin } from '../auth';

let activeGW = 1;
let autosaveTimer: ReturnType<typeof setInterval> | null = null;
let lockingGW = false;
const draftPredictions = new Map<string, Prediction>();
let lastSaveStatus: 'idle' | 'dirty' | 'saving' | 'saved' | 'error' = 'idle';

function predictionKey(matchId: string, player: string): string { return `${matchId}_${player}`; }

function setSaveStatus(status: typeof lastSaveStatus, message = '') {
  lastSaveStatus = status;
  const el = document.getElementById('pred-save-status');
  if (!el) return;
  const states = {
    idle: ['', ''], dirty: ['•', 'Unsaved changes'], saving: ['↻', 'Saving…'],
    saved: ['✓', 'Saved'], error: ['!', message || 'Save failed']
  } as const;
  const [icon, text] = states[status];
  el.innerHTML = text ? `<span class="pred-save-indicator pred-save-${status}"><span class="pred-save-icon">${icon}</span>${text}</span>` : '';
}

function readEditableInputs(): Record<string, Prediction> {
  const profile = getProfile();
  const admin = isAdmin();
  const preds: Record<string, Prediction> = {};
  document.querySelectorAll('.pred-input:not([readonly])').forEach(input => {
    const i = input as HTMLInputElement;
    const matchId = i.dataset.match, player = i.dataset.player, team = i.dataset.team;
    if (!matchId || !player || !team || !(admin || player === profile?.player)) return;
    const key = predictionKey(matchId, player);
    if (!preds[key]) preds[key] = { matchId, player, home: null, away: null };
    if (i.value !== '') {
      const value = Number.parseInt(i.value, 10);
      if (!Number.isNaN(value)) {
        if (team === 'home') preds[key].home = value;
        else preds[key].away = value;
      }
    }
  });
  return preds;
}

function mergeDraftsFromInputs() {
  if (!isAdmin() && store.isGameweekLocked(activeGW)) return;
  const preds = readEditableInputs();
  Object.entries(preds).forEach(([key, pred]) => draftPredictions.set(key, pred));
  if (Object.keys(preds).length) setSaveStatus('dirty');
}

function mergedPrediction(matchId: string, player: Player): Prediction | undefined {
  return draftPredictions.get(predictionKey(matchId, player)) ?? store.getPrediction(matchId, player);
}

async function saveDraftPredictions(): Promise<boolean> {
  if (!draftPredictions.size) { setSaveStatus('saved'); return true; }
  const entries = [...draftPredictions.entries()];
  setSaveStatus('saving');
  try {
    await Promise.all(entries.map(async ([key, pred]) => {
      await store.setPrediction(pred);
      if (draftPredictions.get(key) === pred) draftPredictions.delete(key);
    }));
    setSaveStatus('saved');
    return true;
  } catch (error) {
    setSaveStatus('error', error instanceof Error ? error.message : 'Save failed.');
    return false;
  }
}

function startAutosave() {
  if (autosaveTimer) clearInterval(autosaveTimer);
  autosaveTimer = setInterval(() => {
    if (lockingGW || !draftPredictions.size) return;
    if (!isAdmin() && store.isGameweekLocked(activeGW)) {
      draftPredictions.clear();
      return;
    }
    mergeDraftsFromInputs();
    void saveDraftPredictions();
  }, 3000);
}

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
  const locked = store.isGameweekLocked(gw);

  const gwSelect = available.length
    ? `<select id="gw-select" style="background:var(--ink);border:1px solid var(--line);color:var(--chalk);padding:6px 10px;border-radius:4px;font-family:'JetBrains Mono',monospace;">${available.map(g => `<option value="${g}" ${g === gw ? 'selected' : ''}>GW ${g}</option>`).join('')}</select>`
    : `<input type="number" id="gw-select" min="1" max="38" value="${gw}" style="background:var(--ink);border:1px solid var(--line);color:var(--chalk);padding:6px;width:60px;border-radius:4px;font-family:'JetBrains Mono',monospace;">`;

  let html = `<div style="margin-bottom:16px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
    <label style="font-family:'Oswald',sans-serif;color:var(--chalk);">Select GW:</label>${gwSelect}
    ${!admin ? `<span style="font-size:11px;color:var(--pitch);font-family:'JetBrains Mono',monospace;">EDITING AS ${player?.toUpperCase()} · ALL PICKS VISIBLE</span>` : ''}
    <span style="font-size:11px;color:${locked ? 'var(--red)' : 'var(--pitch)'};font-family:'JetBrains Mono',monospace;font-weight:800;">${locked ? '🔒 PREDICTIONS LOCKED' : 'PREDICTIONS OPEN'}</span>
    <span id="pred-save-status" style="font-size:12px;font-family:'JetBrains Mono',monospace;margin-left:auto;"></span>
  </div>`;

  const matches = store.getMatchesByGW(gw);
  if (matches.length === 0) return html + `<div class="panel-box" style="padding:20px;color:var(--muted);text-align:center;">No fixtures set up for GW${gw}.</div>`;

  const gwCards = store.getCardsForGW(gw);
  const { predictions: effectivePredictions, mirrors } = getEffectivePredictions(matches, store.state.predictions, gwCards);
  const mirrorFor = (matchId: string, p: Player) => mirrors.find(m => m.matchId === matchId && m.targetPlayer === p);
  const effectivePredictionFor = (matchId: string, p: Player) => effectivePredictions.find(x => x.matchId === matchId && x.player === p);

  html += `<div style="display:flex;flex-direction:column;gap:16px;">`;
  matches.forEach(m => {
    html += `<div class="panel-box" style="background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;border-bottom:1px solid var(--line);padding-bottom:8px;gap:12px;flex-wrap:wrap;">
        <h3 style="font-family:'Oswald',sans-serif;font-size:16px;margin:0;">Match ${m.matchNo}: ${m.home} vs ${m.away}</h3>
        ${admin ? `<div style="display:flex;align-items:center;gap:8px;"><span style="font-size:12px;color:var(--muted);font-family:'JetBrains Mono',monospace;">Result:</span><input type="number" class="res-input" data-match="${m.id}" data-team="home" value="${m.result ? m.result.home : ''}" placeholder="H" style="width:40px;background:var(--ink);border:1px solid var(--line);color:var(--chalk);padding:4px;text-align:center;"><span>-</span><input type="number" class="res-input" data-match="${m.id}" data-team="away" value="${m.result ? m.result.away : ''}" placeholder="A" style="width:40px;background:var(--ink);border:1px solid var(--line);color:var(--chalk);padding:4px;text-align:center;"><button class="save-res-btn" data-match="${m.id}" style="background:var(--pitch);border:none;padding:4px 8px;border-radius:4px;cursor:pointer;font-weight:bold;">Save</button></div>` : `<span style="font-size:12px;color:var(--muted);font-family:'JetBrains Mono',monospace;">${m.result ? `FINAL ${m.result.home}-${m.result.away}` : 'RESULT PENDING'}</span>`}
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:12px;">
        ${PLAYERS.map(p => {
          const original = mergedPrediction(m.id, p);
          const stored = store.getPrediction(m.id, p);
          const effective = effectivePredictionFor(m.id, p);
          const mirror = mirrorFor(m.id, p);
          const editable = admin || (p === player && !locked);
          const shownHome = effective?.home != null ? effective.home : null;
          const shownAway = effective?.away != null ? effective.away : null;
          const originalText = stored && stored.home != null && stored.away != null ? `${stored.home}-${stored.away}` : '—';
          return `<div style="background:var(--ink);padding:10px;border-radius:4px;border:1px solid ${p === player && !admin ? 'var(--pitch)' : 'var(--line)'};">
            <div style="display:flex;justify-content:space-between;align-items:center;font-size:12px;color:${p === player ? 'var(--pitch)' : 'var(--muted)'};margin-bottom:6px;font-weight:bold;"><span>${p}${p === player && !admin ? ' · YOU' : ''}</span>${editable ? '<span style="font-size:9px;color:var(--pitch);font-family:\'JetBrains Mono\',monospace;">EDIT</span>' : '<span style="font-size:9px;color:var(--muted);font-family:\'JetBrains Mono\',monospace;">VIEW</span>'}</div>
            ${mirror ? `<div style="margin-bottom:7px;padding:6px 8px;border:1px solid var(--violet);background:var(--panel-2);border-radius:4px;font-size:10px;line-height:1.35;color:var(--violet);font-family:'JetBrains Mono',monospace;">🪞 MIRRORED BY ${mirror.sourcePlayer.toUpperCase()} · ORIGINAL ${originalText} → EFFECTIVE ${mirror.sourceHome}-${mirror.sourceAway}</div>` : ''}
            <div style="display:flex;gap:4px;align-items:center;"><input type="number" class="pred-input" data-match="${m.id}" data-player="${p}" data-team="home" value="${editable && original?.home != null ? original.home : (shownHome != null ? shownHome : '')}" placeholder="H" ${editable ? '' : 'readonly'} style="width:48px;background:var(--panel);border:1px solid var(--line);color:var(--chalk);padding:5px;text-align:center;${editable ? '' : 'opacity:.55;cursor:not-allowed;'}"><span>-</span><input type="number" class="pred-input" data-match="${m.id}" data-player="${p}" data-team="away" value="${editable && original?.away != null ? original.away : (shownAway != null ? shownAway : '')}" placeholder="A" ${editable ? '' : 'readonly'} style="width:48px;background:var(--panel);border:1px solid var(--line);color:var(--chalk);padding:5px;text-align:center;${editable ? '' : 'opacity:.55;cursor:not-allowed;'}"></div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  });
  html += `</div>`;

  const saveDisabled = !admin && locked;
  const lockDisabled = lockingGW;
  html += `<div style="margin-top:20px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
    <button id="save-all-preds" ${saveDisabled ? 'disabled' : ''} style="background:${saveDisabled ? 'var(--panel)' : 'var(--pitch)'};color:${saveDisabled ? 'var(--muted)' : '#0d1712'};padding:10px 20px;border:${saveDisabled ? '1px solid var(--line)' : 'none'};border-radius:4px;font-family:'Oswald',sans-serif;font-size:14px;font-weight:bold;cursor:${saveDisabled ? 'not-allowed' : 'pointer'};">SAVE ${admin ? 'ALL CHANGES' : 'MY PREDICTIONS'} FOR GW${gw}</button>
    ${admin ? `<button id="toggle-gw-lock" ${lockDisabled ? 'disabled' : ''} style="background:${locked ? 'var(--panel)' : 'var(--red)'};color:${locked ? 'var(--red)' : '#fff'};border:1px solid var(--red);padding:10px 18px;border-radius:4px;font-family:'Oswald',sans-serif;font-size:14px;font-weight:800;cursor:${lockDisabled ? 'wait' : 'pointer'};text-transform:uppercase;">${lockingGW ? 'LOCKING…' : (locked ? 'UNLOCK PREDICTIONS' : 'LOCK PREDICTIONS')}</button>` : ''}
    <span style="font-size:11px;color:var(--muted);font-family:'JetBrains Mono',monospace;">${lockingGW ? 'Saving predictions and applying the lock…' : (locked ? 'Only the admin can edit while this GW is locked.' : 'Auto-saves every 3 seconds.')}</span>
  </div>`;

  const scores = calculateGameweekScores(gw, matches, store.state.predictions, gwCards);
  applyNemesisSteals(scores, gwCards);
  html += `<div class="panel-box" style="background:var(--panel-2);border:1px solid var(--line);border-radius:6px;padding:16px;margin-top:24px;"><h3 style="font-family:'Oswald',sans-serif;margin-bottom:12px;">GW${gw} Points Breakdown</h3><table style="width:100%;border-collapse:collapse;text-align:left;font-size:13px;"><thead><tr style="border-bottom:1px solid var(--line);color:var(--muted);font-family:'JetBrains Mono',monospace;"><th style="padding:8px 4px;">Player</th><th style="padding:8px 4px;">Raw Pts</th><th style="padding:8px 4px;">Cards Applied</th><th style="padding:8px 4px;">Final GW Pts</th></tr></thead><tbody>${PLAYERS.map(p => { const sc = scores[p]; const pCards = gwCards.filter(c => c.player === p || c.target === p || c.card === 'chaos'); const tags = pCards.map(c => `<span style="color:${c.card === 'chaos' ? 'var(--red)' : c.card === 'mirror' ? 'var(--violet)' : c.card === 'nemesis' ? 'var(--maroon)' : 'var(--pitch)'}">${c.card.toUpperCase()}</span>`).join(', '); return `<tr style="border-bottom:1px solid var(--line);"><td style="padding:8px 4px;font-weight:bold;">${p}</td><td style="padding:8px 4px;font-family:'JetBrains Mono',monospace;">${sc.rawPoints}</td><td style="padding:8px 4px;font-size:11px;">${tags || '-'}</td><td style="padding:8px 4px;font-weight:bold;font-family:'JetBrains Mono',monospace;color:var(--pitch);">${sc.finalPoints}</td></tr>`; }).join('')}</tbody></table></div>`;
  return html;
}

export function attachGameweekHandlers(reRender: () => void) {
  const admin = isAdmin();
  const profile = getProfile();
  const gwInput = document.getElementById('gw-select') as HTMLInputElement | HTMLSelectElement | null;
  if (gwInput) {
    const applyGw = () => {
      if (lockingGW) return;
      mergeDraftsFromInputs();
      const next = parseInt(gwInput.value, 10);
      if (!Number.isInteger(next) || next < 1 || next > 38 || next === activeGW) return;
      activeGW = next;
      reRender();
    };
    gwInput.addEventListener('change', applyGw);
    gwInput.addEventListener('input', applyGw);
  }

  startAutosave();
  document.querySelectorAll('.pred-input:not([readonly])').forEach(input => input.addEventListener('input', mergeDraftsFromInputs));

  document.getElementById('save-all-preds')?.addEventListener('click', async () => {
    if (lockingGW) return;
    if (!admin && store.isGameweekLocked(activeGW)) {
      setSaveStatus('error', 'This gameweek is locked by the administrator.');
      return;
    }
    mergeDraftsFromInputs();
    await saveDraftPredictions();
    reRender();
  });

  document.getElementById('toggle-gw-lock')?.addEventListener('click', async () => {
    if (!admin || lockingGW) return;

    const locked = store.isGameweekLocked(activeGW);
    const targetLocked = !locked;
    const warning = targetLocked
      ? `Lock GW${activeGW}? Players will not be able to change predictions until you unlock it.`
      : `Unlock GW${activeGW}? Players will be able to edit their predictions again.`;
    if (!window.confirm(warning)) return;

    lockingGW = true;
    reRender();

    try {
      if (targetLocked) {
        mergeDraftsFromInputs();
        const saved = await saveDraftPredictions();
        if (!saved) throw new Error('Predictions could not be saved, so the GW was not locked.');
      }

      await store.setGameweekLocked(activeGW, targetLocked);
      draftPredictions.clear();
      setSaveStatus('saved');
    } catch (error) {
      setSaveStatus('error', error instanceof Error ? error.message : 'Lock update failed.');
    } finally {
      lockingGW = false;
      reRender();
    }
  });

  if (admin) {
    document.querySelectorAll('.save-res-btn').forEach(btn => btn.addEventListener('click', async e => {
      if (lockingGW) return;
      const matchId = (e.currentTarget as HTMLElement).dataset.match;
      if (!matchId) return;
      const home = Number((document.querySelector(`.res-input[data-match="${matchId}"][data-team="home"]`) as HTMLInputElement)?.value);
      const away = Number((document.querySelector(`.res-input[data-match="${matchId}"][data-team="away"]`) as HTMLInputElement)?.value);
      if (!Number.isInteger(home) || !Number.isInteger(away) || home < 0 || away < 0) return;
      const match = store.getMatch(matchId);
      if (!match) return;
      try {
        await store.addOrUpdateMatch({ ...match, result: { home, away } });
        reRender();
      } catch (error) {
        setSaveStatus('error', error instanceof Error ? error.message : 'Result save failed.');
      }
    }));
  }

  void profile;
}
