// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK-ASn55k_gyFSgARhkhGw9n_-p08mbo0",
  authDomain: "baove-8228a.firebaseapp.com",
  databaseURL: "https://baove-8228a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "baove-8228a",
  storageBucket: "baove-8228a.appspot.com",
  messagingSenderId: "838502064282",
  appId: "1:838502064282:web:29f98b3a9e68780c6d3f23",
  measurementId: "G-X5VH2CMXJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);