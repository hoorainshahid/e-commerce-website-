

import { getAuth, createUserWithEmailAndPassword }

from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

import { auth } from "./firebase.js";



const form = document.querySelector('#form');
// const userName = document.querySelector("#userName");
const email = document.querySelector('#email');
const password = document.querySelector("#password");



form.addEventListener('submit', (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;

            console.log(user);

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)

        });
})