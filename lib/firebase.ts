import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8TX0aczJOrLT3sEoldZj3poFbcOVtAfY",
  authDomain: "cosmocenter.firebaseapp.com",
  projectId: "cosmocenter",
  storageBucket: "cosmocenter.firebasestorage.app",
  messagingSenderId: "169046753998",
  appId: "1:169046753998:web:fd52271cf1bda9927c469f",
  measurementId: "G-8HXZYW1QL5"
};

// Initialize Firebase exactly once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };

