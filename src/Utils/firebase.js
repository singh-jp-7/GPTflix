// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGSCPPWE1nJoLQ1eVg5-ni4fNf9xtH-6o",
  authDomain: "gptflix-dfe7c.firebaseapp.com",
  projectId: "gptflix-dfe7c",
  storageBucket: "gptflix-dfe7c.appspot.com",
  messagingSenderId: "459520868229",
  appId: "1:459520868229:web:44e16a425a9f61223b0eec",
  measurementId: "G-528QBSK4N9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();