// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBudNrn7OpEsbHqUVmJ9VszWceq-9PEJtM",
  authDomain: "charter-aac56.firebaseapp.com",
  projectId: "charter-aac56",
  storageBucket: "charter-aac56.appspot.com",
  messagingSenderId: "1051053493452",
  appId: "1:1051053493452:web:a55b2209bbe52abe644669",
  measurementId: "G-6N60RNXW65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);