// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4QLp2tsW4tOt7sOjiC5-hvbBUZnvNEpY",
    authDomain: "react-my-shop-52dfa.firebaseapp.com",
    projectId: "react-my-shop-52dfa",
    storageBucket: "react-my-shop-52dfa.appspot.com",
    messagingSenderId: "1014113510",
    appId: "1:1014113510:web:724de474ef8c00b8674727"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;