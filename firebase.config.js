// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0l7Wy91Fh7LGdE0yGW4_HE9zZpCzHm2E",
  authDomain: "portfolio-web-c2400.firebaseapp.com",
  projectId: "portfolio-web-c2400",
  storageBucket: "portfolio-web-c2400.appspot.com",
  messagingSenderId: "547367104635",
  appId: "1:547367104635:web:21e6fc6bd404aa6bc1b2de",
  measurementId: "G-XMM25S3HX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);