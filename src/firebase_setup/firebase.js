// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAOYYye8l-WWbcVyVK1Nm-OsXsmOCKTP98",

  authDomain: "chatntools.firebaseapp.com",

  projectId: "chatntools",

  storageBucket: "chatntools.appspot.com",

  messagingSenderId: "893352432248",

  appId: "1:893352432248:web:16ccc6271bdaa3a2d4538d"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
