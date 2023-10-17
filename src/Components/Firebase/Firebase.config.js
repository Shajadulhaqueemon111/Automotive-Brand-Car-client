// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDegRg82h4YyXXoF9BiLMP1r8qKxIzy7JI",
  authDomain: "user-automotive-auth.firebaseapp.com",
  projectId: "user-automotive-auth",
  storageBucket: "user-automotive-auth.appspot.com",
  messagingSenderId: "459020838725",
  appId: "1:459020838725:web:a4bc1ddd9bc58f5673802c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;