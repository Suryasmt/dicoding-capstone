import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVQnz1YNp4YmULTGZ7sl54Ji6bUf0rI9Q",
  authDomain: "capstone-project-b74f1.firebaseapp.com",
  projectId: "capstone-project-b74f1",
  storageBucket: "capstone-project-b74f1.appspot.com",
  messagingSenderId: "340644203702",
  appId: "1:340644203702:web:c2f46489e49535a5356a17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const dbStore = getFirestore(app)