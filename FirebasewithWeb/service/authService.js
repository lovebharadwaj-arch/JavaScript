import { auth } from "../db/config.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";


// Get HTML elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const signupBtn = document.getElementById("signupBtn");
const signinBtn = document.getElementById("signinBtn");
const signoutBtn = document.getElementById("signoutBtn");

const message = document.getElementById("message");


// ===============================
// SIGN UP
// ===============================

async function signupUser() {

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        message.textContent = "Please enter email and password.";
        return;
    }

    try {

        const userCredential =
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

        console.log("User created:", userCredential.user);

        message.textContent =
            `Account created successfully for ${userCredential.user.email}`;

        emailInput.value = "";
        passwordInput.value = "";

    } catch (error) {

        console.error("Signup error:", error);

        message.textContent = error.message;
    }
}


// ===============================
// SIGN IN
// ===============================

async function loginUser() {

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        message.textContent = "Please enter email and password.";
        return;
    }

    try {

        const userCredential =
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

        console.log("User logged in:", userCredential.user);

        message.textContent =
            `Login successful. Welcome ${userCredential.user.email}`;

        passwordInput.value = "";

    } catch (error) {

        console.error("Login error:", error);

        message.textContent = error.message;
    }
}


// ===============================
// SIGN OUT
// ===============================

async function signoutUser() {

    try {

        await signOut(auth);

        message.textContent =
            "You have been signed out successfully.";

    } catch (error) {

        console.error("Signout error:", error);

        message.textContent = error.message;
    }
}


// ===============================
// BUTTON EVENTS
// ===============================

signupBtn.addEventListener("click", signupUser);

signinBtn.addEventListener("click", loginUser);

signoutBtn.addEventListener("click", signoutUser);


// ===============================
// AUTH STATE LISTENER
// ===============================

onAuthStateChanged(auth, (user) => {

    if (user) {

        console.log("Active user:", user.email);

    } else {

        console.log("No active user.");
    }

});