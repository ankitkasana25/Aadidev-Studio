// lib/firebase.js

import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Your Firebase config - using environment variables for security
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBqHEGPsJdn1jDQpFIohLFRcTbcql9r-qs",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "aadidevstudionew.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "aadidevstudionew",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "aadidevstudionew.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "1073451900485",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:1073451900485:web:82c619d85c80654c198d2c",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-VDBE6ZNT5E",
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "https://aadidevstudionew-default-rtdb.firebaseio.com/",
};

// Initialize Firebase only if not already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Firebase services
export const db = getDatabase(app);
export const storage = getStorage(app);
export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;
