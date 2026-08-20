import { store } from '../store/store';
import { PLAYERS, CARDS, CardType } from '../types';
import { isAdmin } from '../auth';

function genId() { return 'e_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8); }

export function renderCardLog(): string {
  const admin = isAdmin();
  let html = `<div style="display:grid; grid-template-columns:${admin ? '1.3fr 1fr' : '1fr'}; gap:18px;">`;
  html += `<div class="panel-box" style="background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:16px;">
    <h2 style="font-family:'Oswald',sans-serif;color:var(--muted);margin-bottom:12px;font-size:14px;text-transform:uppercase;">Cards in Play</h2>
    <div style="color:var(--muted);font-size:11px;margin-bottom:12px;font-family:'JetBrains Mono',monospace;">ALL CARD PLAYS · READ-ONLY FOR PLAYERS</div>
    <div style="display:flex;flex-direction:column;gap:10px;">`;

  const cards = [...store.state.cards].sort((a, b) => b.ts - a.ts);
  if (!cards.length) html += `<div style="color:var(--muted);font-size:13px;font-style:italic;">No cards played yet.</div>`;
  else cards.forEach(c => {
    const def = CARDS[c.card];
    const meta: string[] = [];
    if (c.matchNo) meta.push(`Match ${c.matchNo}`);
    if (c.target) meta.push(`vs ${c.target}`);
    if (c.note) meta.push(c.note);
    html += `<div style="display:flex;gap:10px;align-items:flex-start;padding:9px 0;border-bottom:1px solid var(--line);">
      <div style="flex:0 0 46px;height:60px;border-radius:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-family:'Oswald',sans-serif;font-size:10px;font-weight:600;line-height:1.15;color:#0d1712;background:${def.color};">${def.short}</div>
      <div style="flex:1;"><div style="font-size:13.5px;font-weight:600;">GW${c.gw} · ${c.player} — ${def.label}</div><div style="font-size:11.5px;color:var(--muted);margin-top:2px;font-family:'JetBrains Mono',monospace;">${meta.join(' · ')}</div></div>
      ${admin ? `<button class="del-card-btn" data-id="${c.id}" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:16px;">✕</button>` : ''}
    </div>`;
  });
  html += `</div></div>`;

  if (admin) {
    html += `<div class="panel-box" style="background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:16px;">
      <h2 style="font-family:'Oswald',sans-serif;color:var(--muted);margin-bottom:12px;font-size:14px;text-transform:uppercase;">Log a Card</h2>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div><label>Gameweek</label><input type="number" id="fc-gw" min="1" max="38" value="1"></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;"><div><label>Player</label><select id="fc-player">${PLAYERS.map(p => `<option value="${p}">${p}</option>`).join('')}</select></div><div><label>Card</label><select id="fc-card">${Object.entries(CARDS).map(([k,v]) => `<option value="${k}">${v.label}</option>`).join('')}</select></div></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;"><div><label>Match No. (if req)</label><input type="number" id="fc-match" min="1" max="10" placeholder="—"></div><div><label>Target (if req)</label><select id="fc-target"><option value="">—</option>${PLAYERS.map(p => `<option value="${p}">${p}</option>`).join('')}</select></div></div>
        <div><label>Note (optional)</label><input type="text" id="fc-note" placeholder="Reasoning..."></div>
        <div id="fc-warn" style="color:var(--red);font-size:12px;"></div>
        <button id="fc-submit" style="width:100%;background:var(--pitch);color:#0d1712;border:none;padding:10px;border-radius:4px;font-family:'Oswald',sans-serif;font-size:14px;font-weight:600;text-transform:uppercase;cursor:pointer;">Log this card</button>
      </div>
    </div>`;
  }
  html += `</div>`;
  return html;
}

export function attachCardLogHandlers(reRender: () => void) {
  if (!isAdmin()) return;
  document.querySelectorAll('.del-card-btn').forEach(btn => btn.addEventListener('click', async e => {
    const id = (e.currentTarget as HTMLElement).dataset.id;
    if (id) { await store.removeCard(id); reRender(); }
  }));
  document.getElementById('fc-submit')?.addEventListener('click', async () => {
    const gw = parseInt((document.getElementById('fc-gw') as HTMLInputElement).value, 10);
    const player = (document.getElementById('fc-player') as HTMLSelectElement).value;
    const card = (document.getElementById('fc-card') as HTMLSelectElement).value as CardType;
    const matchNo = parseInt((document.getElementById('fc-match') as HTMLInputElement).value, 10) || undefined;
    const target = (document.getElementById('fc-target') as HTMLSelectElement).value || undefined;
    const note = (document.getElementById('fc-note') as HTMLInputElement).value;
    const warn = document.getElementById('fc-warn')!;
    warn.textContent = '';
    if (!gw || gw < 1 || gw > 38) { warn.textContent = 'Invalid GW.'; return; }
    const def = CARDS[card];
    if (def.needsMatch && !matchNo) { warn.textContent = `${def.label} requires a Match No.`; return; }
    if (def.needsTarget && !target) { warn.textContent = `${def.label} requires a Target.`; return; }
    const played = store.state.cards.filter(c => c.player === player && c.card === card).length;
    if (played >= def.allowance) { warn.textContent = `${player} has exhausted their ${def.label} allowance (${def.allowance}).`; return; }
    await store.addCard({ id: genId(), gw, player, card, matchNo, target, note, ts: Date.now() });
    reRender();
  });
}
