// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWYZysq_K1_bjqDs-OfnmIEEHyjj-S8iU",
  authDomain: "auth-moha-milon-9f962.firebaseapp.com",
  projectId: "auth-moha-milon-9f962",
  storageBucket: "auth-moha-milon-9f962.appspot.com",
  messagingSenderId: "122958704588",
  appId: "1:122958704588:web:d1bc2fa42ba7b63b72b769"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
