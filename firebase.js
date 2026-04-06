import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB2uQ3ygZe93dFM7tRZlzbHvF_O8n8Gyio",
  authDomain: "codexo-e8de5.firebaseapp.com",
  projectId: "codexo-e8de5",
  storageBucket: "codexo-e8de5.firebasestorage.app",
  messagingSenderId: "436734152426",
  appId: "1:436734152426:web:9a02a29647aace9e945193",
  measurementId: "G-S6RTCFQNEX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();