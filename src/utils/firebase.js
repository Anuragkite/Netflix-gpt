// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqneCoXPfVJQHsBdWJdyQJIENMmCh2m58",
  authDomain: "netflixgpt-9d750.firebaseapp.com",
  projectId: "netflixgpt-9d750",
  storageBucket: "netflixgpt-9d750.firebasestorage.app",
  messagingSenderId: "469720468410",
  appId: "1:469720468410:web:e20f30479cc2f000376b83",
  measurementId: "G-QBM4K1S3ZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);