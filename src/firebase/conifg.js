// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCalXkxANWO2ElDIKW_3Z6KeNM8eUZSwCI",
  authDomain: "online-shop-55697.firebaseapp.com",
  projectId: "online-shop-55697",
  storageBucket: "online-shop-55697.appspot.com",
  messagingSenderId: "388261113413",
  appId: "1:388261113413:web:e59c9466e908272cd7fd2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
