// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import{getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyB5xuxNsIeSHgADurFULF161AeiKXa59Tk",
  authDomain: "rentify-1fae5.firebaseapp.com",
  projectId: "rentify-1fae5",
  storageBucket: "rentify-1fae5.appspot.com",
  messagingSenderId: "306128470615",
  appId: "1:306128470615:web:aed4f7ef049a6cd5819912",
  measurementId: "G-3GT8CW0B8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const db= getFirestore(app)
export const imageDB = getStorage(app)
