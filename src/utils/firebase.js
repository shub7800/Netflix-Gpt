// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxbdLKZnvkJRJsVKSQnN76lag3jLBt1Zs",
  authDomain: "netflixgpt-3a4c7.firebaseapp.com",
  projectId: "netflixgpt-3a4c7",
  storageBucket: "netflixgpt-3a4c7.firebasestorage.app",
  messagingSenderId: "280499373674",
  appId: "1:280499373674:web:7f59383c49cf69d9ef6c13",
  measurementId: "G-6G250VCGXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();