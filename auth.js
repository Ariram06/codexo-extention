import { auth, provider } from "./firebase.js";
import {
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const loginBtn = document.getElementById("googleLogin");

if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log("Logged In User:", user);
      window.location.href = "dashboard.html";
    } catch (error) {
      console.error("Login Error:", error);
      alert("Login Failed");
    }
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    if (window.location.pathname.includes("login.html")) {
      window.location.href = "dashboard.html";
    }
    return;
  }

  console.log("User not logged in");
});

window.logoutUser = async function logoutUser() {
  await signOut(auth);
  window.location.href = "login.html";
};
