import './style.css';
import { store } from './store/store';
import { renderTabs, attachTabHandlers } from './components/tabs';
import { renderLeaderboard, attachLeaderboardHandlers } from './views/leaderboard';
import { renderGameweek, attachGameweekHandlers } from './views/gameweek';
import { renderCardLog, attachCardLogHandlers } from './views/cardlog';
import { renderFixturesView, attachFixturesHandlers } from './views/fixturesView';
import { attachLoginHandlers, renderLogin } from './views/login';
import { getProfile, logout, watchAuth, AppProfile, isAdmin } from './auth';
import { FIXTURES } from './data/fixtures';

let currentTab = 'leaderboard';
let authReady = false;

function allowedTab(tab: string, profile: AppProfile | null): boolean {
  if (tab === 'fixtures') return profile?.role === 'admin';
  return ['leaderboard', 'gameweek', 'cardlog'].includes(tab);
}

function applyCaptainHighlight() {
  const profile = getProfile();
  if (!profile) return;

  document.querySelectorAll<HTMLElement>('.captain-highlight').forEach(el => {
    el.classList.remove('captain-highlight');
    el.style.boxShadow = '';
    el.style.borderColor = '';
    el.querySelectorAll('.captain-badge').forEach(b => b.remove());
  });

  const gwSelect = document.getElementById('gw-select') as HTMLSelectElement | HTMLInputElement | null;
  const gw = gwSelect ? parseInt(gwSelect.value, 10) : 1;
  if (!Number.isInteger(gw)) return;

  const player = profile.player;
  const captain = store.getCardsForGW(gw).find(c => c.card === 'captain' && c.player === player);
  if (!captain || captain.matchNo == null) return;

  const match = store.getMatchesByGW(gw).find(m => m.matchNo === captain.matchNo);
  if (!match) return;

  const input = document.querySelector<HTMLInputElement>(`.pred-input[data-match="${match.id}"][data-player="${player}"]`);
  const box = input?.parentElement?.parentElement as HTMLElement | null;
  if (!box) return;

  box.classList.add('captain-highlight');
  box.style.borderColor = 'var(--gold)';
  box.style.boxShadow = '0 0 0 2px var(--gold), 0 0 18px rgba(255, 196, 64, 0.22)';
  const badge = document.createElement('span');
  badge.className = 'captain-badge';
  badge.textContent = '★ CAPTAIN';
  badge.style.cssText = "font:700 9px 'JetBrains Mono',monospace;color:var(--gold);margin-left:6px;letter-spacing:.04em;";
  const header = box.firstElementChild;
  header?.appendChild(badge);
}

function renderLoginScreen() {
  const appEl = document.querySelector<HTMLDivElement>('#app');
  if (!appEl) return;
  appEl.innerHTML = renderLogin();
  attachLoginHandlers(() => renderApp());
}

function renderApp() {
  const appEl = document.querySelector<HTMLDivElement>('#app');
  if (!appEl) return;
  const profile = getProfile();
  if (!authReady || !profile) return renderLoginScreen();
  if (!allowedTab(currentTab, profile)) currentTab = 'leaderboard';

  let contentHtml = '';
  switch (currentTab) {
    case 'leaderboard': contentHtml = renderLeaderboard(); break;
    case 'gameweek': contentHtml = renderGameweek(); break;
    case 'cardlog': contentHtml = renderCardLog(); break;
    case 'fixtures': contentHtml = renderFixturesView(); break;
  }

  appEl.innerHTML = `
    <div class="cardlog-root">
      <div style="display:flex; align-items:baseline; justify-content:space-between; flex-wrap:wrap; gap:8px; margin-bottom:4px;">
        <div>
          <h1 style="font-size:26px; font-weight:700; margin:0; color:var(--chalk);">PL 26/27 Predictions</h1>
          <div style="font-size:11px; color:var(--pitch); font-family:'JetBrains Mono',monospace; margin-top:4px;">SIGNED IN: ${profile.player} · ${profile.role.toUpperCase()}</div>
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="font-size:11px; color:var(--muted); font-family:'JetBrains Mono',monospace; letter-spacing:0.06em;">5-A-SIDE LEAGUE</div>
          <button id="logout-btn" class="secondary-btn">LOG OUT</button>
        </div>
      </div>
      <div style="height:1px; background:var(--line); margin:14px 0 18px;"></div>
      ${renderTabs(currentTab, profile.role === 'admin')}
      <div class="tab-content" style="margin-top:20px;">${contentHtml}</div>
    </div>
  `;

  document.querySelector('#logout-btn')?.addEventListener('click', () => logout());
  attachTabHandlers((newTab) => {
    if (!allowedTab(newTab, profile)) return;
    currentTab = newTab;
    renderApp();
  });

  switch (currentTab) {
    case 'leaderboard': attachLeaderboardHandlers(); break;
    case 'gameweek':
      attachGameweekHandlers(renderApp);
      applyCaptainHighlight();
      break;
    case 'cardlog': attachCardLogHandlers(renderApp); break;
    case 'fixtures': attachFixturesHandlers(renderApp); break;
  }
}

watchAuth(profile => {
  authReady = true;
  if (profile) {
    store.load(renderApp, async () => {
      if (isAdmin()) {
        try {
          await store.seedFixtures(FIXTURES);
        } catch (error) {
          console.error(error);
        }
        renderApp();
      }
    });
  }
  renderApp();
});
