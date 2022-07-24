// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDp7Gb5JnQIsT-gMtoD5yNbue-WiEppr6M",
  authDomain: "gamex-store.firebaseapp.com",
  projectId: "gamex-store",
  storageBucket: "gamex-store.appspot.com",
  messagingSenderId: "1055909179866",
  appId: "1:1055909179866:web:90659ff109da5587b990e3",
  measurementId: "G-DYD63YLJEZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);