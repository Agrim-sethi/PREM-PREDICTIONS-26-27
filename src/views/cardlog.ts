import { store } from '../store/store';
import { PLAYERS, CARDS, CardType } from '../types';
import { getProfile, isAdmin } from '../auth';

function genId() { return 'e_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8); }

export function renderCardLog(): string {
  const admin = isAdmin();
  const profile = getProfile();
  const currentPlayer = profile?.player;

  let html = `<div style="display:grid;grid-template-columns:${admin ? '1.2fr 1fr' : '1fr 1.2fr'};gap:18px;">`;

  // Player's own inventory / play area
  if (!admin && currentPlayer) {
    html += `<div class="panel-box" style="background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:16px;">
      <h2 style="font-family:'Oswald',sans-serif;color:var(--muted);margin-bottom:12px;font-size:14px;text-transform:uppercase;">Your Card Arsenal · ${currentPlayer}</h2>
      <div style="display:flex;flex-direction:column;gap:8px;">`;

    Object.entries(CARDS).forEach(([key, def]) => {
      const card = key as CardType;
      const used = card === 'captain'
        ? store.state.cards.filter(c => c.player === currentPlayer && c.card === card).length
        : store.state.cards.filter(c => c.player === currentPlayer && c.card === card).length;
      const remaining = def.allowance === Infinity ? Infinity : Math.max(0, def.allowance - used);
      const disabled = remaining !== Infinity && remaining <= 0;
      html += `<div style="border:1px solid ${def.color}55;background:var(--ink);border-radius:5px;padding:10px 12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;">
          <div><span style="display:inline-block;background:${def.color};color:#0d1712;padding:2px 7px;border-radius:3px;font:700 10px 'Oswald',sans-serif;margin-right:7px;">${def.short}</span><b style="font-size:13px;">${def.label}</b></div>
          <span style="font:700 11px 'JetBrains Mono',monospace;color:${disabled ? 'var(--red)' : 'var(--pitch)'};">${remaining === Infinity ? '∞' : remaining} LEFT</span>
        </div>
        <div style="font-size:11px;color:var(--muted);margin-top:6px;line-height:1.4;">${def.desc}</div>
      </div>`;
    });
    html += `</div></div>`;
  }

  // Cards in play / history visible to everyone
  html += `<div class="panel-box" style="background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:16px;">
    <h2 style="font-family:'Oswald',sans-serif;color:var(--muted);margin-bottom:12px;font-size:14px;text-transform:uppercase;">Cards in Play</h2>
    <div style="color:var(--muted);font-size:11px;margin-bottom:12px;font-family:'JetBrains Mono',monospace;">ALL CARD PLAYS · ${admin ? 'ADMIN CONTROL' : 'READ-ONLY HISTORY'}</div>
    <div style="display:flex;flex-direction:column;gap:10px;">`;

  const cards = [...store.state.cards].sort((a, b) => b.ts - a.ts);
  if (!cards.length) {
    html += `<div style="color:var(--muted);font-size:13px;font-style:italic;">No cards played yet.</div>`;
  } else {
    cards.forEach(c => {
      const def = CARDS[c.card];
      const meta: string[] = [`GW${c.gw}`];
      if (c.matchNo) meta.push(`Match ${c.matchNo}`);
      if (c.target) meta.push(`vs ${c.target}`);
      if (c.note) meta.push(c.note);
      html += `<div style="display:flex;gap:10px;align-items:flex-start;padding:9px 0;border-bottom:1px solid var(--line);">
        <div style="flex:0 0 46px;height:60px;border-radius:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-family:'Oswald',sans-serif;font-size:10px;font-weight:600;line-height:1.15;color:#0d1712;background:${def.color};">${def.short}</div>
        <div style="flex:1;"><div style="font-size:13.5px;font-weight:600;">${c.player} — ${def.label}</div><div style="font-size:11.5px;color:var(--muted);margin-top:2px;font-family:'JetBrains Mono',monospace;">${meta.join(' · ')}</div></div>
        ${admin ? `<button class="del-card-btn" data-id="${c.id}" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:16px;" title="Delete card play">✕</button>` : ''}
      </div>`;
    });
  }
  html += `</div></div>`;

  // Admin gets the old universal card manipulation form
  if (admin) {
    html += `<div class="panel-box" style="grid-column:1 / -1;background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:16px;">
      <h2 style="font-family:'Oswald',sans-serif;color:var(--muted);margin-bottom:12px;font-size:14px;text-transform:uppercase;">Admin Card Controls</h2>
      <div style="font-size:11px;color:var(--gold);font-family:'JetBrains Mono',monospace;margin-bottom:12px;">ADMIN OVERRIDE · YOU MAY LOG OR REMOVE ANY PLAYER CARD</div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
        <div><label>Gameweek</label><input type="number" id="fc-gw" min="1" max="38" value="1"></div>
        <div><label>Player</label><select id="fc-player">${PLAYERS.map(p => `<option value="${p}">${p}</option>`).join('')}</select></div>
        <div><label>Card</label><select id="fc-card">${Object.entries(CARDS).map(([k,v]) => `<option value="${k}">${v.label}</option>`).join('')}</select></div>
        <div><label>Match No. <span style="color:var(--muted)">(Captain/Mirror only)</span></label><input type="number" id="fc-match" min="1" max="10" placeholder="—"></div>
        <div><label>Target <span style="color:var(--muted)">(Mirror/Nemesis only)</span></label><select id="fc-target"><option value="">—</option>${PLAYERS.map(p => `<option value="${p}">${p}</option>`).join('')}</select></div>
        <div><label>Note</label><input type="text" id="fc-note" placeholder="Reasoning / correction..."></div>
      </div>
      <div id="fc-warn" style="color:var(--red);font-size:12px;margin-top:10px;"></div>
      <button id="fc-submit" style="width:100%;margin-top:10px;background:var(--pitch);color:#0d1712;border:none;padding:10px;border-radius:4px;font-family:'Oswald',sans-serif;font-size:14px;font-weight:600;text-transform:uppercase;cursor:pointer;">Log Card</button>
    </div>`;
  }

  html += `</div>`;
  return html;
}

function validateCardFields(card: CardType, matchNo?: number, target?: string): string | null {
  const def = CARDS[card];
  if (def.needsMatch && !matchNo) return `${def.label} requires a match number.`;
  if (!def.needsMatch && matchNo) return `${def.label} does not use a match number.`;
  if (def.needsTarget && !target) return `${def.label} requires a target.`;
  if (!def.needsTarget && target) return `${def.label} does not use a target player.`;
  if (card === 'mirror' && target === undefined) return 'Mirror requires a target player.';
  return null;
}

export function attachCardLogHandlers(reRender: () => void) {
  if (!isAdmin()) return;

  document.querySelectorAll('.del-card-btn').forEach(btn => btn.addEventListener('click', async e => {
    const id = (e.currentTarget as HTMLElement).dataset.id;
    if (!id) return;
    const ok = window.confirm('Delete this card play? The card will become available again.');
    if (ok) {
      await store.removeCard(id);
      reRender();
    }
  }));

  document.getElementById('fc-submit')?.addEventListener('click', async () => {
    const gw = parseInt((document.getElementById('fc-gw') as HTMLInputElement).value, 10);
    const player = (document.getElementById('fc-player') as HTMLSelectElement).value;
    const card = (document.getElementById('fc-card') as HTMLSelectElement).value as CardType;
    const matchRaw = (document.getElementById('fc-match') as HTMLInputElement).value;
    const target = (document.getElementById('fc-target') as HTMLSelectElement).value || undefined;
    const note = (document.getElementById('fc-note') as HTMLInputElement).value;
    const warn = document.getElementById('fc-warn')!;
    warn.textContent = '';

    if (!gw || gw < 1 || gw > 38) { warn.textContent = 'Invalid GW.'; return; }
    const matchNo = matchRaw ? parseInt(matchRaw, 10) : undefined;
    const error = validateCardFields(card, matchNo, target);
    if (error) { warn.textContent = error; return; }

    const def = CARDS[card];
    const played = store.state.cards.filter(c => c.player === player && c.card === card).length;
    if (def.allowance !== Infinity && played >= def.allowance) {
      warn.textContent = `${player} has exhausted their ${def.label} allowance (${def.allowance}).`;
      return;
    }

    await store.addCard({ id: genId(), gw, player, card, matchNo, target, note, ts: Date.now() });
    reRender();
  });
}
