
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

import { auth, db } from "./config.js";
import { collection, addDoc } from "firebase/firestore";


onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid)
  } else {
    window.location = 'index.html'
  }
});


const logout = document.querySelector('#logout-btn')
logout.addEventListener('click', () => {


  signOut(auth).then(() => {
    console.log('Sign-out successful.')
    window.location = 'index.html'
  }).catch((error) => {
    console.log(error)
  });
})


const form = document.querySelector('#form');
const tittle = document.querySelector('#tittle');
const description = document.querySelector('#description');



form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(tittle.value);
  console.log(description.value);

  // try {
  //   const docRef = await addDoc(collection(db, "users"), {
  //     first: "Ada",
  //     last: "Lovelace",
  //     born: 1815
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }

})
