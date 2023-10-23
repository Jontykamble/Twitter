// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app"
import  "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsfOcdm5pa22kvKoYTvuzGnH5aX7sVwgc",
  authDomain: "twitter-clone-f6e4d.firebaseapp.com",
  projectId: "twitter-clone-f6e4d",
  storageBucket: "twitter-clone-f6e4d.appspot.com",
  messagingSenderId: "232271058977",
  appId: "1:232271058977:web:1779eb681756c2d7f46b60",
  measurementId: "G-3ZH5X0KH6B"
};

// Initialize Firebase

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();

export default db;