// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK2jlHFaPPqzqXKhlt0BNJsB7WBbDhc3E",
  authDomain: "auth-exploring-project.firebaseapp.com",
  projectId: "auth-exploring-project",
  storageBucket: "auth-exploring-project.appspot.com",
  messagingSenderId: "1069795554375",
  appId: "1:1069795554375:web:b1814af7d3b8faab6cad62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
