import {auth} from '../../db/config.js'

import { createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";


const formData = document.getElementById('registerForm');
const fullName = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirm_password = document.getElementById('confirmPassword');
const termsCheckbox = document.getElementById('terms');
const signupBtn = document.getElementById("signupBtn");
const message = document.getElementById('message');


async function signupUser(event) {
    if (event && typeof event.preventDefault === 'function') event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirm_password.value;

     if (!email || !password) {
        message.textContent = "Please enter email and password.";
        return;
    }

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match.";
        return;
    }

    if (termsCheckbox && !termsCheckbox.checked) {
        message.textContent = "Please accept the terms and conditions.";
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

formData.addEventListener('submit', signupUser);