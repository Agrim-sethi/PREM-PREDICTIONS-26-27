# PL 26/27 authentication setup

The app now uses Firebase Authentication with five fixed profiles. The UI accepts a short Player ID, then maps it to the corresponding Firebase email behind the scenes.

## Profiles

| Player ID | Player | Role | Firebase email |
|---|---|---|---|
| `AGRIM` | Agrim | Admin | `agrim@prem-predict-2627-agrim.firebaseapp.com` |
| `SAMARTH` | Samarth | Player | `samarth@prem-predict-2627-agrim.firebaseapp.com` |
| `DHAIRYA` | Dhairya | Player | `dhairya@prem-predict-2627-agrim.firebaseapp.com` |
| `LUVI` | Luvi | Player | `luvi@prem-predict-2627-agrim.firebaseapp.com` |
| `CLAUDE` | Claude | Player | `claude@prem-predict-2627-agrim.firebaseapp.com` |

## One-time Firebase setup

1. Open Firebase Console for project `prem-predict-2627-agrim`.
2. Go to **Authentication → Sign-in method**.
3. Enable **Email/Password**.
4. Go to **Authentication → Users → Add user**.
5. Create the five emails above and give each a different passcode. Do not put the passcodes in this repository.
6. Deploy the repository's `firestore.rules` to the `predictions-db` database.
7. Redeploy the Vercel app.

The app intentionally does not contain plaintext passcodes. Firebase stores the password securely and the browser only sends it through Firebase Authentication.

## Permissions

### Agrim / Admin
- Full leaderboard access
- Edit every player's prediction
- Enter and edit match results
- Create/edit/delete fixtures
- Log and remove cards
- View all cards and all predictions

### Other four profiles
- View leaderboard
- Enter/edit **only their own predictions**
- View match results
- View all cards in play
- Cannot edit fixtures/results
- Cannot create/delete/edit cards
- Cannot write another player's prediction
- Cannot access the Fixtures Setup tab

Firestore rules enforce these permissions server-side. Hiding a button in the UI is not treated as security.

## Important next step for competitive integrity

The current authentication layer prevents one player from writing another player's prediction, but the app does not yet implement a match-by-match prediction deadline/lock. Add that before GW1 if you want predictions to remain hidden until the deadline.
