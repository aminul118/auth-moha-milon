// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKs4dxCauxHLRcsl7_6HKkfFZa_rI8CWU",
  authDomain: "auth-moha-milon-b778c.firebaseapp.com",
  projectId: "auth-moha-milon-b778c",
  storageBucket: "auth-moha-milon-b778c.firebasestorage.app",
  messagingSenderId: "334694746732",
  appId: "1:334694746732:web:899c71cb1a857db2826649",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
