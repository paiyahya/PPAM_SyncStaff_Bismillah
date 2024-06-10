// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGImPO_EzElaulg9_eL_dQ--O9anIRQjQ",
  authDomain: "syncstaff-65e18.firebaseapp.com",
  projectId: "syncstaff-65e18",
  storageBucket: "syncstaff-65e18.appspot.com",
  messagingSenderId: "318447796416",
  appId: "1:318447796416:web:bfa338f0f7264e8e01ed25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);