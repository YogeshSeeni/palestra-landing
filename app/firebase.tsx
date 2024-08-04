// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apikey,
  authDomain: process.env.NEXT_PUBLIC_authdomain,
  projectId: process.env.NEXT_PUBLIC_projectid,
  storageBucket: process.env.NEXT_PUBLIC_storagebucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messaging,
  appId: process.env.NEXT_PUBLIC_appid,
  measurementId: process.env.NEXT_PUBLIC_measure
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);