// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEHYZKdPDsozwvBYf6plkU_e2v8aVGDzE",
  authDomain: "netflix-project-debae.firebaseapp.com",
  projectId: "netflix-project-debae",
  storageBucket: "netflix-project-debae.appspot.com",
  messagingSenderId: "818560256200",
  appId: "1:818560256200:web:a626381d448be2d54f7dfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};  