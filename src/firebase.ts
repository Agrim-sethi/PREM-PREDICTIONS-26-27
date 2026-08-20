import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "prem-predict-2627-agrim",
  appId: "1:807593138260:web:b4f3c34cae6130129a75c1",
  storageBucket: "prem-predict-2627-agrim.firebasestorage.app",
  apiKey: "AIzaSyCeIiArxu2DQ5d49PJ5p8EidhgwoxHMvSc",
  authDomain: "prem-predict-2627-agrim.firebaseapp.com",
  messagingSenderId: "807593138260",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, 'predictions-db');
