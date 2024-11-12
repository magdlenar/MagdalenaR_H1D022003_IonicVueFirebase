// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyASrnc7TU1Dv_6albF1NWSBdqBbtvIMVa8",
    authDomain: "vue-firebase-ed411.firebaseapp.com",
    projectId: "vue-firebase-ed411",
    storageBucket: "vue-firebase-ed411.firebasestorage.app",
    messagingSenderId: "572249887581",
    appId: "1:572249887581:web:dadd4617c9cf860f39ceb4"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };