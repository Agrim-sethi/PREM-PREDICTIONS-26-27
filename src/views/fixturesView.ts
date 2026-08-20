import { store } from '../store/store';
import { PREMIER_LEAGUE_TEAMS, FIXTURES } from '../data/fixtures';
import { Match } from '../types';

let adminGw = 1;
let editingMatchId: string | null = null;
let seedStatus = '';

function genId() { return 'm_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6); }

export function renderFixturesView(): string {
  const available = store.getAvailableGameweeks();
  const missingCount = FIXTURES.filter(f => !store.state.matches.some(m => m.gw === f.gw && m.matchNo === f.matchNo)).length;

  let html = `
    <div class="panel-box" style="background:var(--panel); border:1px solid var(--line); border-radius:6px; padding:16px; margin-bottom:18px;">
      <h2 style="font-family:'Oswald',sans-serif; color:var(--chalk); margin-bottom:8px; font-size:16px; text-transform:uppercase;">Season Fixture Import</h2>
      <p style="color:var(--muted); font-size:13px; margin-bottom:12px; line-height:1.45;">
        Gameweeks only appear in the Gameweek tab after matches exist in Firestore.
        Currently loaded: <b style="color:var(--chalk);">${available.length ? available.map(g => `GW${g}`).join(', ') : 'none'}</b>
        · Missing seed rows: <b style="color:${missingCount ? 'var(--gold)' : 'var(--pitch)'};">${missingCount}</b>
      </p>
      <button id="fx-seed-all" style="background:var(--pitch); color:#0d1712; padding:10px 16px; border:none; border-radius:4px; font-family:'Oswald',sans-serif; font-weight:700; cursor:pointer;">
        Import full season fixtures
      </button>
      <span id="fx-seed-status" style="margin-left:12px;font-size:12px;font-family:'JetBrains Mono',monospace;color:var(--muted);">${seedStatus}</span>
    </div>

    <div class="panel-box" style="background:var(--panel); border:1px solid var(--line); border-radius:6px; padding:16px;">
      <h2 style="font-family:'Oswald',sans-serif; color:var(--chalk); margin-bottom:16px; font-size:16px; text-transform:uppercase;">Setup Fixtures</h2>
      
      <div style="margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
        <label style="font-family:'Oswald',sans-serif; color:var(--chalk);">Setup for GW:</label>
        <input type="number" id="fx-gw-select" min="1" max="38" value="${adminGw}" style="background:var(--ink); border:1px solid var(--line); color:var(--chalk); padding:6px; width:60px; border-radius:4px; font-family:'JetBrains Mono',monospace;">
      </div>
  `;

  const matches = store.getMatchesByGW(adminGw);

  if (matches.length > 0) {
    html += `<div style="display:flex; flex-direction:column; gap:8px; margin-bottom:20px;">`;
    matches.forEach(m => {
      html += `
        <div style="display:flex; justify-content:space-between; align-items:center; background:var(--ink); padding:8px 12px; border:1px solid var(--line); border-radius:4px;">
          <div>
            <div style="font-weight:bold;">Match ${m.matchNo}: ${m.home} vs ${m.away}</div>
            <div style="font-size:12px; color:var(--muted);">${m.date} ${m.time}</div>
          </div>
          <div style="display:flex; gap:8px;">
            <button class="fx-edit-btn" data-id="${m.id}" style="background:var(--pitch); color:#0d1712; padding:4px 8px; border:none; border-radius:4px; font-weight:bold; cursor:pointer; font-size:12px;">Edit</button>
            <button class="fx-del-btn" data-id="${m.id}" style="background:var(--red); color:white; padding:4px 8px; border:none; border-radius:4px; font-weight:bold; cursor:pointer; font-size:12px;">Delete</button>
          </div>
        </div>
      `;
    });
    html += `</div>`;
  }

  if (matches.length < 10 || editingMatchId) {
    const editingMatch = editingMatchId ? store.getMatch(editingMatchId) : null;
    const nextMatchNo = editingMatch ? editingMatch.matchNo : matches.length + 1;

    const buildTeamOptions = (selected?: string) =>
      PREMIER_LEAGUE_TEAMS.map(t => `<option value="${t}" ${t === selected ? 'selected' : ''}>${t}</option>`).join('');

    html += `
      <div style="background:var(--ink); padding:16px; border:1px dashed var(--line); border-radius:6px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <h3 style="font-size:14px; font-family:'Oswald',sans-serif; margin:0;">${editingMatch ? 'Edit Match ' + nextMatchNo : 'Add Match ' + nextMatchNo}</h3>
          ${editingMatch ? `<button id="fx-cancel-edit" style="background:none; border:none; color:var(--muted); cursor:pointer; font-size:12px; text-decoration:underline;">Cancel</button>` : ''}
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
          <div>
            <label style="display:block; font-size:11px; margin-bottom:4px; color:var(--muted);">Home Team</label>
            <select id="fx-home" style="width:100%; background:var(--panel); border:1px solid var(--line); color:var(--chalk); padding:6px; border-radius:4px;">
              ${buildTeamOptions(editingMatch?.home)}
            </select>
          </div>
          <div>
            <label style="display:block; font-size:11px; margin-bottom:4px; color:var(--muted);">Away Team</label>
            <select id="fx-away" style="width:100%; background:var(--panel); border:1px solid var(--line); color:var(--chalk); padding:6px; border-radius:4px;">
              ${buildTeamOptions(editingMatch?.away)}
            </select>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
          <div>
            <label style="display:block; font-size:11px; margin-bottom:4px; color:var(--muted);">Date (Optional)</label>
            <input type="date" id="fx-date" value="${editingMatch?.date || ''}" style="width:100%; background:var(--panel); border:1px solid var(--line); color:var(--chalk); padding:6px; border-radius:4px;">
          </div>
          <div>
            <label style="display:block; font-size:11px; margin-bottom:4px; color:var(--muted);">Time (Optional)</label>
            <input type="time" id="fx-time" value="${editingMatch?.time || ''}" style="width:100%; background:var(--panel); border:1px solid var(--line); color:var(--chalk); padding:6px; border-radius:4px;">
          </div>
        </div>
        <div id="fx-warn" style="color:var(--red); font-size:12px; margin-bottom:8px;"></div>
        <button id="fx-add-btn" style="background:var(--pitch); color:#0d1712; padding:8px 16px; border:none; border-radius:4px; font-weight:bold; cursor:pointer;">
          ${editingMatch ? 'Update Match' : 'Add Match'}
        </button>
      </div>
    `;
  } else {
    html += `<div style="color:var(--pitch); font-weight:bold;">All 10 matches for GW${adminGw} have been configured.</div>`;
  }

  html += `</div>`;
  return html;
}

export function attachFixturesHandlers(reRender: () => void) {
  const gwInput = document.getElementById('fx-gw-select') as HTMLInputElement;
  if (gwInput) {
    gwInput.addEventListener('change', (e) => {
      adminGw = parseInt((e.target as HTMLInputElement).value, 10);
      editingMatchId = null;
      reRender();
    });
  }

  const seedBtn = document.getElementById('fx-seed-all') as HTMLButtonElement | null;
  const seedStatusEl = document.getElementById('fx-seed-status');
  seedBtn?.addEventListener('click', async () => {
    seedBtn.disabled = true;
    seedStatus = 'Importing…';
    if (seedStatusEl) seedStatusEl.textContent = seedStatus;
    try {
      const written = await store.seedFixtures(FIXTURES);
      seedStatus = written === 0 ? 'All fixtures already present.' : `Imported ${written} match(es).`;
      if (seedStatusEl) {
        seedStatusEl.style.color = 'var(--pitch)';
        seedStatusEl.textContent = seedStatus;
      }
      reRender();
    } catch (error) {
      seedStatus = error instanceof Error ? error.message : 'Import failed.';
      if (seedStatusEl) {
        seedStatusEl.style.color = 'var(--red)';
        seedStatusEl.textContent = seedStatus;
      }
      seedBtn.disabled = false;
    }
  });

  const cancelBtn = document.getElementById('fx-cancel-edit');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      editingMatchId = null;
      reRender();
    });
  }

  document.querySelectorAll('.fx-edit-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLButtonElement;
      editingMatchId = target.getAttribute('data-id');
      reRender();
    });
  });

  document.querySelectorAll('.fx-del-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (confirm('Are you sure you want to delete this match?')) {
        const target = e.currentTarget as HTMLButtonElement;
        const id = target.getAttribute('data-id');
        if (id) {
          store.deleteMatch(id);
          const matches = store.getMatchesByGW(adminGw);
          matches.forEach((m, idx) => {
            m.matchNo = idx + 1;
            store.addOrUpdateMatch(m);
          });
          if (editingMatchId === id) editingMatchId = null;
          reRender();
        }
      }
    });
  });

  const addBtn = document.getElementById('fx-add-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const home = (document.getElementById('fx-home') as HTMLSelectElement).value;
      const away = (document.getElementById('fx-away') as HTMLSelectElement).value;
      const date = (document.getElementById('fx-date') as HTMLInputElement).value || '';
      const time = (document.getElementById('fx-time') as HTMLInputElement).value || '';
      const warn = document.getElementById('fx-warn')!;
      warn.textContent = '';

      if (home === away) {
        warn.textContent = 'Home and Away teams must be different.';
        return;
      }

      const matches = store.getMatchesByGW(adminGw);

      if (editingMatchId) {
        const existingMatch = store.getMatch(editingMatchId);
        if (existingMatch) {
          store.addOrUpdateMatch({
            ...existingMatch,
            home,
            away,
            date,
            time
          });
        }
        editingMatchId = null;
      } else {
        const newMatch: Match = {
          id: genId(),
          gw: adminGw,
          matchNo: matches.length + 1,
          home,
          away,
          date,
          time
        };
        store.addOrUpdateMatch(newMatch);
      }
      reRender();
    });
  }
}
