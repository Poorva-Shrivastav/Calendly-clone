// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmJmjRQcMmBE5PIkz5IeAvrOzjgYtiLrQ",
  authDomain: "calendly-clone-288c2.firebaseapp.com",
  projectId: "calendly-clone-288c2",
  storageBucket: "calendly-clone-288c2.appspot.com",
  messagingSenderId: "198026764163",
  appId: "1:198026764163:web:483dc5e8a3ae6d0846a0b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
