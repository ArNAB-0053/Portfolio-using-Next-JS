import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBFHWyrnr2cneKZ3a4L4fOYSuEvsdGL4lM",
    authDomain: "portfolio-89295.firebaseapp.com",
    projectId: "portfolio-89295",
    storageBucket: "portfolio-89295.appspot.com",
    messagingSenderId: "1036654793694",
    appId: "1:1036654793694:web:b0b2ab5e584063dd87834f"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };