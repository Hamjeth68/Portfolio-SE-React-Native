// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsXVMQgn4VzRYFGA1nTSAfhuCgrSXx62s",
  authDomain: "portfolio-313ad.firebaseapp.com",
  projectId: "portfolio-313ad",
  storageBucket: "portfolio-313ad.appspot.com",
  messagingSenderId: "389110171404",
  appId: "1:389110171404:web:05df51262551b14eeeeb29",
  measurementId: "G-ENSKBXDCT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);