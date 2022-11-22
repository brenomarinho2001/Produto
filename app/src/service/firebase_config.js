import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDUpFJYej1cYKYhg2Au4OHWEMo94AZmcQ8",
  authDomain: "login-verter.firebaseapp.com",
  projectId: "login-verter",
  storageBucket: "login-verter.appspot.com",
  messagingSenderId: "258381822673",
  appId: "1:258381822673:web:953e0bceced778648c63f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
