import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6_ziN5kIv_xzBt1eeynnI73MUPAXjdlI",
  authDomain: "data-base-article.firebaseapp.com",
  databaseURL: "https://data-base-article-default-rtdb.firebaseio.com",
  projectId: "data-base-article",
  storageBucket: "data-base-article.appspot.com",
  messagingSenderId: "787197341659",
  appId: "1:787197341659:web:c064ff98d3de5ac7be41fe",
  measurementId: "G-EZTPXV4S6H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dbStore = getFirestore(app);
