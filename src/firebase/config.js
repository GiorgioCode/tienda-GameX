// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.ENV_apyKey,
  authDomain: process.env.ENV_authDomain,
  projectId: process.env.ENV_projectId,
  storageBucket: process.env.ENV_storageBucket,
  messagingSenderId: process.env.ENV_messagingSenderId,
  appId: process.env.ENV_appId,
  measurementId: process.env.ENV_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);