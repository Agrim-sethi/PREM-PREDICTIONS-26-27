import { store } from '../store/store';
import { PLAYERS, CARDS, CardType, Player, CardEntry } from '../types';
import { getProfile, getUser, isAdmin } from '../auth';

function validateCardFields(card: CardType, matchNo: number | null, target: Player | null): string | null {
  const def = CARDS[card];
  if (def.needsMatch && matchNo === null) return `${def.label} requires a match number.`;
  if (!def.needsMatch && matchNo !== null) return `${def.label} does not use a match number.`;
  if (def.needsTarget && !target) return `${def.label} requires a target player.`;
  if (!def.needsTarget && target !== null) return `${def.label} does not use a target player.`;
  return null;
}

function remainingLabel(player: Player, card: CardType, gw: number): string {
  const remaining = store.getCardRemaining(player, card, gw);
  return CARDS[card].perGameweek ? (remaining ? '1 THIS GW' : 'USED THIS GW') : `${remaining} LEFT`;
}

function cardOptions(player: Player, gw: number): string {
  return Object.entries(CARDS).map(([key, def]) => {
    const card = key as CardType;
    const remaining = store.getCardRemaining(player, card, gw);
    const disabled = remaining <= 0;
    return `<option value="${card}" ${disabled ? 'disabled' : ''}>${def.label} · ${def.perGameweek ? (disabled ? 'USED THIS GW' : '1 THIS GW') : `${remaining} LEFT`}</option>`;
  }).join('');
}

function playForm(player: Player | null, admin: boolean): string {
  const actualPlayer = player ?? PLAYERS[0];
  return `<div class="panel-box" style="background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:16px;">
    <h2 style="font-family:'Oswald',sans-serif;color:var(--muted);margin-bottom:12px;font-size:14px;text-transform:uppercase;">${admin ? 'Admin Card Controls' : 'Play Your Card'}</h2>
    <div style="font-size:11px;color:${admin ? 'var(--gold)' : 'var(--pitch)'};font-family:'JetBrains Mono',monospace;margin-bottom:12px;">${admin ? 'ADMIN OVERRIDE · LOG OR REMOVE ANY PLAYER CARD' : `PLAYING AS ${actualPlayer.toUpperCase()} · ONLY YOUR CARD INVENTORY IS AVAILABLE`}</div>
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
      <div><label>Gameweek</label><input type="number" id="fc-gw" min="1" max="38" value="1"></div>
      ${admin ? `<div><label>Player</label><select id="fc-player">${PLAYERS.map(p => `<option value="${p}">${p}</option>`).join('')}</select></div>` : `<input type="hidden" id="fc-player" value="${actualPlayer}"><div><label>Player</label><input value="${actualPlayer}" disabled></div>`}
      <div><label>Card</label><select id="fc-card">${cardOptions(actualPlayer, 1)}</select></div>
      <div><label>Match No. <span style="color:var(--muted)">(Captain/Mirror only)</span></label><input type="number" id="fc-match" min="1" max="10" placeholder="—"></div>
      <div><label>Target <span style="color:var(--muted)">(Mirror/Nemesis only)</span></label><select id="fc-target"><option value="">—</option>${PLAYERS.filter(p => p !== actualPlayer).map(p => `<option value="${p}">${p}</option>`).join('')}</select></div>
      <div><label>Note</label><input type="text" id="fc-note" placeholder="Reasoning / receipt..."></div>
    </div>
    <div id="fc-warn" style="color:var(--red);font-size:12px;margin-top:10px;min-height:17px;"></div>
    <button id="fc-submit" style="width:100%;margin-top:10px;background:var(--pitch);color:#0d1712;border:none;padding:10px;border-radius:4px;font-family:'Oswald',sans-serif;font-size:14px;font-weight:600;text-transform:uppercase;cursor:pointer;">${admin ? 'Log Card' : 'Play This Card'}</button>
  </div>`;
}

function arsenal(player: Player): string {
  return `<div class="panel-box" style="background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:16px;">
    <h2 style="font-family:'Oswald',sans-serif;color:var(--muted);margin-bottom:12px;font-size:14px;text-transform:uppercase;">Your Card Arsenal · ${player}</h2>
    <div style="display:flex;flex-direction:column;gap:8px;">
      ${Object.entries(CARDS).map(([key, def]) => {
        const card = key as CardType;
        const label = def.perGameweek ? '1 EACH GW' : `${def.allowance} SEASON`;
        return `<div style="border:1px solid ${def.color}55;background:var(--ink);border-radius:5px;padding:10px 12px;">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;">
            <div><span style="display:inline-block;background:${def.color};color:#0d1712;padding:2px 7px;border-radius:3px;font:700 10px 'Oswald',sans-serif;margin-right:7px;">${def.short}</span><b style="font-size:13px;">${def.label}</b></div>
            <span style="font:700 11px 'JetBrains Mono',monospace;color:var(--pitch);">${label}</span>
          </div>
          <div style="font-size:11px;color:var(--muted);margin-top:6px;line-height:1.4;">${def.desc}</div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

function history(admin: boolean): string {
  const cards = [...store.state.cards].sort((a, b) => b.ts - a.ts);
  return `<div class="panel-box" style="background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:16px;">
    <h2 style="font-family:'Oswald',sans-serif;color:var(--muted);margin-bottom:12px;font-size:14px;text-transform:uppercase;">Cards in Play</h2>
    <div style="color:var(--muted);font-size:11px;margin-bottom:12px;font-family:'JetBrains Mono',monospace;">ALL CARD PLAYS · ${admin ? 'ADMIN CONTROL' : 'READ-ONLY HISTORY'}</div>
    <div style="display:flex;flex-direction:column;gap:10px;">
      ${cards.length ? cards.map(c => {
        const def = CARDS[c.card];
        const meta: string[] = [`GW${c.gw}`];
        if (c.matchNo !== null) meta.push(`Match ${c.matchNo}`);
        if (c.target) meta.push(`vs ${c.target}`);
        if (c.note) meta.push(c.note);
        return `<div style="display:flex;gap:10px;align-items:flex-start;padding:9px 0;border-bottom:1px solid var(--line);">
          <div style="flex:0 0 46px;height:60px;border-radius:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-family:'Oswald',sans-serif;font-size:10px;font-weight:600;line-height:1.15;color:#0d1712;background:${def.color};">${def.short}</div>
          <div style="flex:1;"><div style="font-size:13.5px;font-weight:600;">${c.player} — ${def.label}</div><div style="font-size:11.5px;color:var(--muted);margin-top:2px;font-family:'JetBrains Mono',monospace;">${meta.join(' · ')}</div></div>
          ${admin ? `<button class="del-card-btn" data-id="${c.id}" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:16px;" title="Delete card play">✕</button>` : ''}
        </div>`;
      }).join('') : `<div style="color:var(--muted);font-size:13px;font-style:italic;">No cards played yet.</div>`}
    </div>
  </div>`;
}

export function renderCardLog(): string {
  const admin = isAdmin();
  const profile = getProfile();
  const currentPlayer = profile?.player ?? null;
  if (admin) {
    return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;">${history(true)}${playForm(currentPlayer, true)}</div>`;
  }
  return `<div style="display:grid;grid-template-columns:1fr 1.2fr;gap:18px;"><div style="display:flex;flex-direction:column;gap:18px;">${currentPlayer ? arsenal(currentPlayer) : ''}${playForm(currentPlayer, false)}</div>${history(false)}</div>`;
}

function refreshCardControls(profilePlayer: Player | null, admin: boolean) {
  const gwInput = document.getElementById('fc-gw') as HTMLInputElement | null;
  const cardSelect = document.getElementById('fc-card') as HTMLSelectElement | null;
  const playerInput = document.getElementById('fc-player') as HTMLSelectElement | HTMLInputElement | null;
  if (!gwInput || !cardSelect || !playerInput) return;
  const gw = Math.max(1, Math.min(38, parseInt(gwInput.value, 10) || 1));
  const player = (admin ? playerInput.value : profilePlayer) as Player | null;
  if (!player) return;
  cardSelect.innerHTML = cardOptions(player, gw);
}

export function attachCardLogHandlers(reRender: () => void) {
  const admin = isAdmin();
  const profile = getProfile();
  const user = getUser();
  const profilePlayer = profile?.player ?? null;

  document.querySelectorAll('.del-card-btn').forEach(btn => btn.addEventListener('click', async event => {
    if (!admin) return;
    const id = (event.currentTarget as HTMLElement).dataset.id;
    if (!id) return;
    if (!window.confirm('Delete this card play? The card becomes available again.')) return;
    try { await store.removeCard(id); reRender(); }
    catch (error) { window.alert(error instanceof Error ? error.message : String(error)); }
  }));

  const gwInput = document.getElementById('fc-gw') as HTMLInputElement | null;
  const playerInput = document.getElementById('fc-player') as HTMLSelectElement | HTMLInputElement | null;
  gwInput?.addEventListener('change', () => refreshCardControls(profilePlayer, admin));
  playerInput?.addEventListener('change', () => refreshCardControls(profilePlayer, admin));
  refreshCardControls(profilePlayer, admin);

  document.getElementById('fc-submit')?.addEventListener('click', async () => {
    const warn = document.getElementById('fc-warn');
    if (!warn) return;
    warn.textContent = '';

    const gw = parseInt((document.getElementById('fc-gw') as HTMLInputElement).value, 10);
    const selectedPlayer = (document.getElementById('fc-player') as HTMLInputElement | HTMLSelectElement).value as Player;
    const player = admin ? selectedPlayer : profilePlayer;
    const card = (document.getElementById('fc-card') as HTMLSelectElement).value as CardType;
    const matchRaw = (document.getElementById('fc-match') as HTMLInputElement).value;
    const matchNo = matchRaw === '' ? null : parseInt(matchRaw, 10);
    const targetRaw = (document.getElementById('fc-target') as HTMLSelectElement).value;
    const target = targetRaw === '' ? null : targetRaw as Player;
    const noteValue = (document.getElementById('fc-note') as HTMLInputElement).value.trim();
    const note = noteValue === '' ? null : noteValue;

    if (!player) { warn.textContent = 'No player identity found.'; return; }
    if (!user) { warn.textContent = 'Your login session has expired. Log in again.'; return; }
    if (!Number.isInteger(gw) || gw < 1 || gw > 38) { warn.textContent = 'Invalid GW.'; return; }

    const shapeError = validateCardFields(card, matchNo, target);
    if (shapeError) { warn.textContent = shapeError; return; }
    if (!admin && player !== profilePlayer) { warn.textContent = 'You can only play your own cards.'; return; }

    const slotId = store.getAvailableCardSlot(player, card, gw);
    if (!slotId) {
      warn.textContent = card === 'captain' ? `${player} has already played a Captain in GW${gw}. Only 1 Captain is allowed per player per gameweek.` : `${player} has no ${CARDS[card].label}s remaining.`;
      refreshCardControls(profilePlayer, admin);
      return;
    }

    const entry: CardEntry = {
      id: slotId,
      slotId,
      gw,
      player,
      card,
      matchNo,
      target,
      note,
      createdByUid: user.uid,
      ts: Date.now()
    };

    try {
      await store.addCard(entry);
      reRender();
    } catch (error) {
      warn.textContent = error instanceof Error ? error.message : 'Card could not be saved.';
    }
  });
}
