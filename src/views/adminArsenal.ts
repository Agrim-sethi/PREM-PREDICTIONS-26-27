import { store } from '../store/store';
import { CARDS, CardType, Player } from '../types';

export function renderAdminArsenal(player: Player): string {
  return `<div class="panel-box cardlog-panel" style="background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:16px;">
    <h2 style="font-family:'Oswald',sans-serif;color:var(--muted);margin-bottom:12px;font-size:14px;text-transform:uppercase;">Your Card Arsenal · ${player}</h2>
    <div style="font-size:11px;color:var(--gold);font-family:'JetBrains Mono',monospace;margin-bottom:12px;">ADMIN INVENTORY · FULL CARD ALLOWANCE</div>
    <div style="display:flex;flex-direction:column;gap:8px;">
      ${Object.entries(CARDS).map(([key, def]) => {
        const card = key as CardType;
        const remaining = store.getCardRemaining(player, card, 1);
        const label = def.perGameweek ? '1 EACH GW' : `${remaining} / ${def.allowance} LEFT`;
        const depleted = !def.perGameweek && remaining <= 0;
        return `<div style="border:1px solid ${def.color}55;background:var(--ink);border-radius:5px;padding:10px 12px;opacity:${depleted ? '0.55' : '1'};">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;">
            <div><span style="display:inline-block;background:${def.color};color:#0d1712;padding:2px 7px;border-radius:3px;font:700 10px 'Oswald',sans-serif;margin-right:7px;">${def.short}</span><b style="font-size:13px;">${def.label}</b></div>
            <span style="font:700 11px 'JetBrains Mono',monospace;color:${depleted ? 'var(--muted)' : 'var(--pitch)'};">${label}</span>
          </div>
          <div style="font-size:11px;color:var(--muted);margin-top:6px;line-height:1.4;">${def.desc}</div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}
