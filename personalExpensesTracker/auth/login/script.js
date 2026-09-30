import {auth} from '../../db/config.js'

import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const loginBtn = document.getElementById('loginBtn');
const message = document.getElementById('message');


async function loginUser(event){
    if (event && typeof event.preventDefault === 'function') event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        message.textContent = "Please enter email and password.";
        return;
    }
    
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
         console.log("User created:", userCredential.user);

        message.textContent =
            `Login successfully for ${userCredential.user.email}`;

        emailInput.value = "";
        passwordInput.value = "";

        window.location.href = "../../dashboard/index.html" ;

    } catch (error) {
        console.error("Signup error:", error);
        message.textContent = error.message;
    }
}


loginBtn.addEventListener("click", loginUser);
