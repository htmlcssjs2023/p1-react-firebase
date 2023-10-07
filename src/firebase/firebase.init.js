// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADUMrhtMhYp_rkt-jUCytfxg3WeK7pE4Q",
  authDomain: "p1-react-firebase-18bdb.firebaseapp.com",
  projectId: "p1-react-firebase-18bdb",
  storageBucket: "p1-react-firebase-18bdb.appspot.com",
  messagingSenderId: "944708637921",
  appId: "1:944708637921:web:6c89fe4de3f3932afb93a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;