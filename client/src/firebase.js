// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5db91.firebaseapp.com",
  projectId: "mern-estate-5db91",
  storageBucket: "mern-estate-5db91.appspot.com",
  messagingSenderId: "605068801296",
  appId: "1:605068801296:web:fb7b650a4f56c5ac196195"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);