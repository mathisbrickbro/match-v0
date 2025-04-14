// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB9yzmW4Yr_gUgEKFV2U3xBEdp6T7Bq-us',
  authDomain: 'matcheo-brickbro.firebaseapp.com',
  projectId: 'matcheo-brickbro',
  storageBucket: 'matcheo-brickbro.firebasestorage.app',
  messagingSenderId: '994394747434',
  appId: '1:994394747434:web:4ff5b0cd113d0d1a308953',
  measurementId: 'G-VSR6X62N1T',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
