// ==== UI Toggle ====
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// ==== Firebase Auth ====
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAsjLqYz-TsVkrC1-WETNMzPOySIQpns0w",
  authDomain: "mindforgenew.firebaseapp.com",
  projectId: "mindforgenew",
  storageBucket: "mindforgenew.firebasestorage.app",
  messagingSenderId: "520069672215",
  appId: "1:520069672215:web:d80de1e990052ecee7db52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ==== Sign Up ====
document.getElementById("signUpForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert(`✅ Account created! Welcome, ${userCredential.user.email}`);
  } catch (error) {
    alert(`❌ ${error.message}`);
  }
});

// ==== Login ====
document.getElementById("signInForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("signInEmail").value;
  const password = document.getElementById("signInPassword").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert(`✅ Logged in as ${userCredential.user.email}`);
    // redirect to dashboard later
    window.location.href = "Dashboard.html";
  } catch (error) {
    alert(`❌ ${error.message}`);
  }
});