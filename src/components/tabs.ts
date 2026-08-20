export function renderTabs(activeTab: string, isAdmin = false): string {
  const tabs = [
    { id: 'leaderboard', label: 'Leaderboard' },
    { id: 'gameweek', label: 'Gameweek' },
    { id: 'cardlog', label: 'Card Log' },
    ...(isAdmin ? [{ id: 'fixtures', label: 'Fixtures Setup' }] : [])
  ];

  return `
    <div class="tabs-container" style="display: flex; gap: 8px; margin-bottom: 20px; border-bottom: 1px solid var(--line); padding-bottom: 10px;">
      ${tabs.map(t => `
        <button class="main-tab ${activeTab === t.id ? 'active' : ''}" data-tab="${t.id}" style="
          background: ${activeTab === t.id ? 'var(--pitch)' : 'transparent'};
          color: ${activeTab === t.id ? '#0d1712' : 'var(--muted)'};
          border: 1px solid ${activeTab === t.id ? 'var(--pitch)' : 'var(--line)'};
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-family: 'Oswald', sans-serif;
          font-size: 14px;
          text-transform: uppercase;
        ">${t.label}</button>
      `).join('')}
    </div>
  `;
}

export function attachTabHandlers(onChange: (tabId: string) => void) {
  document.querySelectorAll('.main-tab').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tabId = (e.currentTarget as HTMLElement).dataset.tab;
      if (tabId) onChange(tabId);
    });
  });
}
