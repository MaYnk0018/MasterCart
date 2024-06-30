// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "mastercart-e3e1b.firebaseapp.com",
  projectId: "mastercart-e3e1b",
  storageBucket: "mastercart-e3e1b.appspot.com",
  messagingSenderId: "891592684454",
  appId: "1:891592684454:web:e9e5111283f59d293f9567"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
