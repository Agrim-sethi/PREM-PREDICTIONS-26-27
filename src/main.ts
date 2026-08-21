import './style.css';
import { store } from './store/store';
import { renderTabs, attachTabHandlers } from './components/tabs';
import { renderLeaderboard, attachLeaderboardHandlers } from './views/leaderboard';
import { renderGameweek, attachGameweekHandlers } from './views/gameweek';
import { renderCardLog, attachCardLogHandlers } from './views/cardlog';
import { renderAdminArsenal } from './views/adminArsenal';
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
    case 'cardlog': {
      const cardLogHtml = renderCardLog();
      contentHtml = isAdmin()
        ? `<div class="cardlog-layout cardlog-layout-player"><div class="cardlog-sidebar">${renderAdminArsenal(profile.player)}</div><div>${cardLogHtml}</div></div>`
        : cardLogHtml;
      break;
    }
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
    case 'gameweek': attachGameweekHandlers(renderApp); break;
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
