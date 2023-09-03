// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7uveIXRty--MsesxR9qroNiec-9eJkDk",
  authDomain: "netflixgpt-42179.firebaseapp.com",
  projectId: "netflixgpt-42179",
  storageBucket: "netflixgpt-42179.appspot.com",
  messagingSenderId: "86181590040",
  appId: "1:86181590040:web:3d8935e63911dbb777ff6d",
  measurementId: "G-SB7HBY08R7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
