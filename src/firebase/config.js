// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp7Gb5JnQIsT-gMtoD5yNbue-WiEppr6M",
  authDomain: "gamex-store.firebaseapp.com",
  projectId: "gamex-store",
  storageBucket: "gamex-store.appspot.com",
  messagingSenderId: "1055909179866",
  appId: "1:1055909179866:web:90659ff109da5587b990e3",
  measurementId: "G-DYD63YLJEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);