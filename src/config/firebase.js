import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVv8Mk1lJBdCJ7bVkiHrND6U8kTUdm7iw",
  authDomain: "capstone-authentication-8db99.firebaseapp.com",
  projectId: "capstone-authentication-8db99",
  storageBucket: "capstone-authentication-8db99.appspot.com",
  messagingSenderId: "768156469255",
  appId: "1:768156469255:web:f805300061f761911d42a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
