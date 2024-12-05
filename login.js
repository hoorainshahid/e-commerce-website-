


import { signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

import { auth } from "./config.js";




const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector("#password");
const goolge = document.querySelector("#google");





form.addEventListener('submit', (event) => {
  event.preventDefault();

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {

      const user = userCredential.user;
      console.log(user)
      window.location = 'main.html'
      alert("you are succesfully login")


    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)

    });


})


