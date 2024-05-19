// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);