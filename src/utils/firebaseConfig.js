// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnyOPKxocs1Mq1fqzvNyPZnJskfEi9DrA",
    authDomain: "ecomm-project-f31da.firebaseapp.com",
    projectId: "ecomm-project-f31da",
    storageBucket: "ecomm-project-f31da.appspot.com",
    messagingSenderId: "599526496815",
    appId: "1:599526496815:web:464c63d93dadde081584da"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);