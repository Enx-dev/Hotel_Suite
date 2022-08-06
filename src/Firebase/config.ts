// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBexF7xghLCxUSOysuZQ3i_5CRmZGorIWw",
  authDomain: "hotel-site-a94be.firebaseapp.com",
  projectId: "hotel-site-a94be",
  storageBucket: "hotel-site-a94be.appspot.com",
  messagingSenderId: "46554144374",
  appId: "1:46554144374:web:9b83ca094a3722906ec957",
  measurementId: "G-ZN61EZ1BF1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
