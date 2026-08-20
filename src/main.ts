import './style.css';
import { store } from './store/store';
import { renderTabs, attachTabHandlers } from './components/tabs';
import { renderLeaderboard, attachLeaderboardHandlers } from './views/leaderboard';
import { renderGameweek, attachGameweekHandlers } from './views/gameweek';
import { renderCardLog, attachCardLogHandlers } from './views/cardlog';
import { renderFixturesView, attachFixturesHandlers } from './views/fixturesView';

// Initialize the store
store.load();

let currentTab = 'leaderboard';

function renderApp() {
  const appEl = document.querySelector<HTMLDivElement>('#app');
  if (!appEl) return;

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
        <h1 style="font-size:26px; font-weight:700; margin:0; color:var(--chalk);">PL 26/27 Predictions</h1>
        <div style="font-size:11px; color:var(--muted); font-family:'JetBrains Mono',monospace; letter-spacing:0.06em;">5-A-SIDE LEAGUE</div>
      </div>
      <div style="height:1px; background:var(--line); margin:14px 0 18px;"></div>
      
      ${renderTabs(currentTab)}
      
      <div class="tab-content" style="margin-top:20px;">
        ${contentHtml}
      </div>
    </div>
  `;

  // Attach handlers
  attachTabHandlers((newTab) => {
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

// Initial render
renderApp();
