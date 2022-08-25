// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOY2QK09-AHuCTZe4Tqk1SKwkvHmvuVUE",
    authDomain: "trial-faef6.firebaseapp.com",
    projectId: "trial-faef6",
    storageBucket: "trial-faef6.appspot.com",
    messagingSenderId: "1068001026200",
    appId: "1:1068001026200:web:c25fa52a35383fc0f6b0ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)