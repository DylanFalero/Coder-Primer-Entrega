// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "proyectofinal-3846d.firebaseapp.com",
  projectId: "proyectofinal-3846d",
  storageBucket: "proyectofinal-3846d.firebasestorage.app",
  messagingSenderId: "899622884676",
  appId: "1:899622884676:web:f2e549c5a464c17daa3311"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)