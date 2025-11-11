// lib/firebase.js

import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBqHEGPsJdn1jDQpFIohLFRcTbcql9r-qs",
  authDomain: "aadidevstudionew.firebaseapp.com",
  projectId: "aadidevstudionew",
  storageBucket: "aadidevstudionew.appspot.com", // fix URL
  messagingSenderId: "1073451900485",
  appId: "1:1073451900485:web:82c619d85c80654c198d2c",
  measurementId: "G-VDBE6ZNT5E",
};

// Initialize Firebase only if not already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Firebase services
export const db = getDatabase(app);
export const storage = getStorage(app);
export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;
