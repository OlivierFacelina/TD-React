import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPBQu4JAh9hR2gmToYc_v_uAh-_hBVmos",
  authDomain: "fir-58293.firebaseapp.com",
  projectId: "fir-58293",
  storageBucket: "fir-58293.appspot.com",
  messagingSenderId: "54384422785",
  appId: "1:54384422785:web:8f2fc302ee736051784280"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)