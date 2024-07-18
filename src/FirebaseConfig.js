import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrcGjEcfZR6oE7xxiwgixE4DZeVrxsUwY",
  authDomain: "project3-cb9ea.firebaseapp.com",
  projectId: "project3-cb9ea",
  storageBucket: "project3-cb9ea.appspot.com",
  messagingSenderId: "988512661329",
  appId: "1:988512661329:web:872a73fc4e81f384a82d70",
  measurementId: "G-P8GGM0P3B7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {db, auth, googleProvider}