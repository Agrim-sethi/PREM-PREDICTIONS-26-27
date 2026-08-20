import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { app } from './firebase';

export type AppRole = 'admin' | 'player';

export interface AppProfile {
  id: string;
  player: 'Agrim' | 'Samarth' | 'Dhairya' | 'Luvi' | 'Claude';
  role: AppRole;
  email: string;
}

const PROJECT_DOMAIN = 'prem-predict-2627-agrim.firebaseapp.com';

export const PROFILES: Record<string, AppProfile> = {
  AGRIM:   { id: 'AGRIM',   player: 'Agrim',   role: 'admin',  email: `agrim@${PROJECT_DOMAIN}` },
  SAMARTH: { id: 'SAMARTH', player: 'Samarth', role: 'player', email: `samarth@${PROJECT_DOMAIN}` },
  DHAIRYA: { id: 'DHAIRYA', player: 'Dhairya', role: 'player', email: `dhairya@${PROJECT_DOMAIN}` },
  LUVI:    { id: 'LUVI',    player: 'Luvi',    role: 'player', email: `luvi@${PROJECT_DOMAIN}` },
  CLAUDE:  { id: 'CLAUDE',  player: 'Claude',  role: 'player', email: `claude@${PROJECT_DOMAIN}` }
};

export const ADMIN_EMAIL = PROFILES.AGRIM.email;
export const auth = getAuth(app);

let currentUser: User | null = null;
let currentProfile: AppProfile | null = null;

export function profileForEmail(email: string | null | undefined): AppProfile | null {
  if (!email) return null;
  return Object.values(PROFILES).find(p => p.email.toLowerCase() === email.toLowerCase()) ?? null;
}

export function profileForId(id: string): AppProfile | null {
  return PROFILES[id.trim().toUpperCase()] ?? null;
}

export function getProfile(): AppProfile | null {
  return currentProfile;
}

export function getUser(): User | null {
  return currentUser;
}

export function isAdmin(): boolean {
  return currentProfile?.role === 'admin';
}

export async function login(id: string, passcode: string): Promise<AppProfile> {
  const profile = profileForId(id);
  if (!profile) throw new Error('Unknown player ID.');
  if (!passcode) throw new Error('Enter your passcode.');
  await signInWithEmailAndPassword(auth, profile.email, passcode);
  return profile;
}

export async function logout(): Promise<void> {
  await signOut(auth);
}

export function watchAuth(onChange: (profile: AppProfile | null) => void): () => void {
  return onAuthStateChanged(auth, user => {
    currentUser = user;
    currentProfile = profileForEmail(user?.email);
    onChange(currentProfile);
  });
}
