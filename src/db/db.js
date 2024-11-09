// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWTTJuGDURSCC7hbZ2sR41bFJd2p1pDT0",
  authDomain: "ecommerce-jm-react.firebaseapp.com",
  projectId: "ecommerce-jm-react",
  storageBucket: "ecommerce-jm-react.firebasestorage.app",
  messagingSenderId: "1068965294146",
  appId: "1:1068965294146:web:d53deb83f45b57ef18bddb"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()


export default db;