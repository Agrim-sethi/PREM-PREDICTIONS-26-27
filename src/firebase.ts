import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "prem-predict-2627-agrim",
  appId: "1:807593138260:web:b4f3c34cae6130129a75c1",
  storageBucket: "prem-predict-2627-agrim.firebasestorage.app",
  apiKey: "AIzaSyCeIiArxu2DQ5d49PJ5p8EidhgwoxHMvSc",
  authDomain: "prem-predict-2627-agrim.firebaseapp.com",
  messagingSenderId: "807593138260",
};

export const app = initializeApp(firebaseConfig);

// Card entries intentionally omit optional fields such as target/matchNo when they are not needed.
// Ignore those undefined properties so valid card writes are persisted to Firestore.
export const db = initializeFirestore(app, {
  ignoreUndefinedProperties: true,
}, 'predictions-db');
