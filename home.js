
import { onAuthStateChanged ,  signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

import { auth } from "./config.js";



onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
    } else {
      window.location = 'index.html'
    }
  });


  const logout = document.querySelector('#logout-btn')

  logout.addEventListener('click' , ()=>{


    signOut(auth).then(() => {
        console.log ('Sign-out successful.')
window.location ='index.html'
      }).catch((error) => {
console.log (error)
      });
  })