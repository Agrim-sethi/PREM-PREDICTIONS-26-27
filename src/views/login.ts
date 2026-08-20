import { login } from '../auth';

export function renderLogin(error = ''): string {
  return `
    <div class="auth-shell">
      <div class="auth-card">
        <div class="auth-kicker">PREMIER LEAGUE 26/27</div>
        <h1>Predictions HQ</h1>
        <p class="auth-subtitle">5-a-side prediction league · restricted access</p>
        <label for="login-id">Player ID</label>
        <input id="login-id" autocomplete="username" placeholder="e.g. AGRIM" />
        <label for="login-pass">Passcode</label>
        <input id="login-pass" type="password" autocomplete="current-password" placeholder="Enter passcode" />
        <div id="login-error" class="auth-error">${error}</div>
        <button id="login-btn" class="auth-button">ENTER LEAGUE</button>
        <div class="auth-note">Your profile determines exactly what you can edit.</div>
      </div>
    </div>
  `;
}

export function attachLoginHandlers(onSuccess: () => void): void {
  const id = document.querySelector<HTMLInputElement>('#login-id');
  const pass = document.querySelector<HTMLInputElement>('#login-pass');
  const button = document.querySelector<HTMLButtonElement>('#login-btn');
  const error = document.querySelector<HTMLDivElement>('#login-error');
  if (!id || !pass || !button || !error) return;

  const submit = async () => {
    button.disabled = true;
    error.textContent = '';
    try {
      await login(id.value, pass.value);
      onSuccess();
    } catch (e) {
      error.textContent = e instanceof Error ? e.message : 'Login failed.';
    } finally {
      button.disabled = false;
    }
  };

  button.addEventListener('click', submit);
  pass.addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });
}
