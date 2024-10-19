// firebase.tsx
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Replace this config with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCABbYeQhgi_jIN9TshG2FuZ3oIZR_KkMc",
  authDomain: "charlotte-mandell-daf36.firebaseapp.com",
  projectId: "charlotte-mandell-daf36",
  storageBucket: "charlotte-mandell-daf36.appspot.com",
  messagingSenderId: "339290071748",
  appId: "1:339290071748:web:53e11bebf36ebbab635f91"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const firestore = getFirestore(app);
