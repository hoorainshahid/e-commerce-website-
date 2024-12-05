


import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {  getAuth  } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js';
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";



const firebaseConfig = {
    apiKey: "AIzaSyBOvRiMW25aNSyhBvS12YbqY_oidi4LxJM",
    authDomain: "prime-pick-8a4ca.firebaseapp.com",
    projectId: "prime-pick-8a4ca",
    storageBucket: "prime-pick-8a4ca.firebasestorage.app",
    messagingSenderId: "336404304704",
    appId: "1:336404304704:web:1c6aa374ada72c0ff0e0a5",
    measurementId: "G-7K1FVHNGDN"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
export const auth = getAuth(app);

// export const db = getFirestore(firestore); 

















