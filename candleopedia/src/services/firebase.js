// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIpgKoroxCabzPNUB2OjvV4Sh892UoKUo",
  authDomain: "candleopedia-54d87.firebaseapp.com",
  projectId: "candleopedia-54d87",
  storageBucket: "candleopedia-54d87.firebasestorage.app",
  messagingSenderId: "213115886170",
  appId: "1:213115886170:web:812bbeefc4157ecc3b9663",
  measurementId: "G-D33KKX8FYM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
