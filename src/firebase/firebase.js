import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAXRhPDaAzVOABNtJnLxfkW9Qhx144PLG8",
  authDomain: "licenta-9ded0.firebaseapp.com",
  projectId: "licenta-9ded0",
  storageBucket: "licenta-9ded0.appspot.com",
  messagingSenderId: "480787212360",
  appId: "1:480787212360:web:1e3c3440d76054f65e107d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FIREBASE_APP = app;
export const FIREBASE_DB = getFirestore(app);
export const FIREBASE_AUTH = getAuth(app);