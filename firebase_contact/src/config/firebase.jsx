// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJPkHW4vGHHG_YhBxPqWeImPYJjfo8e70",
  authDomain: "fir-contacts-24b58.firebaseapp.com",
  projectId: "fir-contacts-24b58",
  storageBucket: "fir-contacts-24b58.appspot.com",
  messagingSenderId: "33269231262",
  appId: "1:33269231262:web:b79772c680d61ff6d9558f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);