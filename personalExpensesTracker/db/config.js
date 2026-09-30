import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwWnLhGp8eI-zQDuESORYqKELN-g6U8oo",
    authDomain: "react-firebase-app1-a81ef.firebaseapp.com",
    projectId: "react-firebase-app1-a81ef",
    storageBucket: "react-firebase-app1-a81ef.firebasestorage.app",
    messagingSenderId: "539934521518",
    appId: "1:539934521518:web:9ddc46a1508cb3f43d153f",
    measurementId: "G-CB370Z5SSL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firestore
export const db = getFirestore(app);


// Initialize Authentication
export const auth = getAuth(app);




