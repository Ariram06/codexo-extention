import { auth } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";


onAuthStateChanged(auth, (user) => {

  if (user) {

    console.log("Welcome " + user.displayName);

    const nameElement = document.getElementById("uname");

    if (nameElement) {
      nameElement.innerText = user.displayName;
    }

  } else {

    window.location.href = "login.html";

  }

});


document.getElementById("logout").onclick = async () => {

  await signOut(auth);

  window.location.href = "login.html";

};