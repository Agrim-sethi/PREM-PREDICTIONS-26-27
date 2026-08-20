import { store } from '../store/store';
import { PLAYERS, CARDS, CardType } from '../types';
import { getProfile, isAdmin } from '../auth';

function genId() { return 'e_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8); }

function remainingFor(player: string, card: CardType): number {
  const def = CARDS[card];
  if (def.allowance === Infinity) return Infinity;
  const played = store.state.cards.filter(c => c.player === player && c.card === card).length;
  return Math.max(0, def.allowance - played);
}

function cardInventory(player: string): string {
  return Object.entries(CARDS).map(([key, def]) => {
    const card = key as CardType;
    const remaining = remainingFor(player, card);
    const value = remaining === Infinity ? '∞' : String(remaining);
    const played = store.state.cards.filter(c => c.player === player && c.card === card).length;
    return `<div style="display:grid;grid-template-columns:10px 1fr 42px 58px;gap:8px;align-items:center;padding:8px 0;border-bottom:1px solid var(--line);">
      <span style="width:8px;height:8px;border-radius:50%;background:${def.color};display:block;"></span>
      <div><div style="font-size:13px;font-weight:600;">${def.label}</div><div style="font-size:10.5px;color:var(--muted);margin-top:2px;">${def.desc}</div></div>
      <div style="text-align:right;font:700 13px 'JetBrains Mono',monospace;color:var(--pitch);">${value}</div>
      <div style="text-align:right;font:10px 'JetBrains Mono',monospace;color:var(--muted);">used ${played}</div>
    </div>`;
  }).join('');
}

export function renderCardLog(): string {
  const admin = isAdmin();
  const profile = getProfile();
  const player = profile?.player;

  let html = `<div style="display:grid;grid-template-columns:${admin ? '1.2fr 1fr' : '1fr 1fr'};gap:18px;">`;

  html += `<div style="display:flex;flex-direction:column;gap:18px;">
    <div class="panel-box" style="background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:16px;">
      <h2 style="font-family:'Oswald',sans-serif;color:var(--muted);margin-bottom:12px;font-size:14px;text-transform:uppercase;">${admin ? 'Card Inventory' : 'Your Card Arsenal'}</h2>
      <div style="color:var(--muted);font-size:11px;margin-bottom:12px;font-family:'JetBrains Mono',monospace;">${admin ? 'ALL PLAYERS · REMAINING / USED' : `${player?.toUpperCase()} · YOUR REMAINING CARDS / USED`}</div>
      ${admin ? PLAYERS.map(p => `<div style="margin-bottom:18px;"><div style="font-family:'Oswald',sans-serif;font-size:15px;margin-bottom:8px;">${p}</div>${cardInventory(p)}</div>`).join('') : cardInventory(player!)}
    </div>

    ${!admin ? `<div class="panel-box" style="background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:16px;">
      <h2 style="font-family:'Oswald',sans-serif;color:var(--muted);margin-bottom:12px;font-size:14px;text-transform:uppercase;">Play a Card</h2>
      <div style="font-size:11px;color:var(--muted);font-family:'JetBrains Mono',monospace;margin-bottom:12px;">YOU CAN ONLY PLAY CARDS FROM YOUR OWN ARSENAL</div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
          <div><label>Gameweek</label><input type="number" id="pc-gw" min="1" max="38" value="1"></div>
          <div><label>Card</label><select id="pc-card">${Object.entries(CARDS).map(([k,v]) => `<option value="${k}">${v.label}</option>`).join('')}</select></div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
          <div><label>Match No. if needed</label><input type="number" id="pc-match" min="1" max="10" placeholder="—"></div>
          <div><label>Target if needed</label><select id="pc-target"><option value="">—</option>${PLAYERS.filter(p => p !== player).map(p => `<option value="${p}">${p}</option>`).join('')}</select></div>
        </div>
        <div><label>Note (optional)</label><input type="text" id="pc-note" placeholder="Reasoning / banter / receipt"></div>
        <div id="pc-warn" style="color:var(--red);font-size:12px;min-height:16px;"></div>
        <button id="pc-submit" style="width:100%;background:var(--pitch);color:#0d1712;border:none;padding:10px;border-radius:4px;font-family:'Oswald',sans-serif;font-size:14px;font-weight:600;text-transform:uppercase;cursor:pointer;">PLAY THIS CARD</button>
      </div>
    </div>` : ''}
  </div>`;

  const cards = [...store.state.cards].sort((a, b) => b.ts - a.ts);
  html += `<div class="panel-box" style="background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:16px;">
    <h2 style="font-family:'Oswald',sans-serif;color:var(--muted);margin-bottom:12px;font-size:14px;text-transform:uppercase;">Cards in Play</h2>
    <div style="color:var(--muted);font-size:11px;margin-bottom:12px;font-family:'JetBrains Mono',monospace;">ALL CARD PLAYS · ${admin ? 'ADMIN CONTROLS' : 'READ-ONLY HISTORY'}</div>
    <div style="display:flex;flex-direction:column;gap:10px;">`;

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
  html += `</div></div></div>`;
  return html;
}

export function attachCardLogHandlers(reRender: () => void) {
  const admin = isAdmin();
  const profile = getProfile();

  if (admin) {
    document.querySelectorAll('.del-card-btn').forEach(btn => btn.addEventListener('click', async e => {
      const id = (e.currentTarget as HTMLElement).dataset.id;
      if (id) { await store.removeCard(id); reRender(); }
    }));

    return;
  }

  document.getElementById('pc-submit')?.addEventListener('click', async () => {
    const player = profile?.player;
    if (!player) return;

    const gw = parseInt((document.getElementById('pc-gw') as HTMLInputElement).value, 10);
    const card = (document.getElementById('pc-card') as HTMLSelectElement).value as CardType;
    const matchNo = parseInt((document.getElementById('pc-match') as HTMLInputElement).value, 10) || undefined;
    const target = (document.getElementById('pc-target') as HTMLSelectElement).value || undefined;
    const note = (document.getElementById('pc-note') as HTMLInputElement).value;
    const warn = document.getElementById('pc-warn')!;
    warn.textContent = '';

    if (!gw || gw < 1 || gw > 38) { warn.textContent = 'Invalid GW.'; return; }
    const def = CARDS[card];
    if (def.needsMatch && !matchNo) { warn.textContent = `${def.label} requires a match number.`; return; }
    if (def.needsTarget && !target) { warn.textContent = `${def.label} requires a target.`; return; }
    if (target === player) { warn.textContent = 'You cannot target yourself.'; return; }

    const remaining = remainingFor(player, card);
    if (remaining !== Infinity && remaining <= 0) { warn.textContent = `You have no ${def.label}s left.`; return; }

    try {
      await store.addCard({ id: genId(), gw, player, card, matchNo, target, note, ts: Date.now() });
      reRender();
    } catch (error) {
      warn.textContent = 'Card could not be played. Please try again.';
    }
  });
}
