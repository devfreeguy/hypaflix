"use strict";

import { addUser, signin, signup } from "./firebase-confg";

const modeSwitch = document.getElementById("switchButton");
const switchText = document.getElementById("switchButtonText");
const infoPanel = document.getElementById("infoPanel");
const loginPanel = document.getElementById("loginPanel");
const signupPanel = document.getElementById("signupPanel");
const infoTopText = document.getElementById("infoTopText");
const infoText = document.getElementById("infoText");
modeSwitch.addEventListener("click", () => {
  console.log("switching");
  (() => {
    loginPanel.classList.toggle("active");
    infoPanel.classList.toggle("active");
    signupPanel.classList.toggle("active");

    if (infoTopText.innerHTML === "Welcome back") {
      infoTopText.innerHTML = "You are welcome";
      infoText.innerHTML = "It's a pleasure having you, fill in your informations to get started and let's have fun. Click the signin button to log into your account and continue the fun, Lets go!!!";
      switchText.innerHTML = "Sign in";
    } else {
        infoTopText.innerHTML = "Welcome back";
        infoText.innerHTML =
        "We are glad to have you back, enter your email and password to log into your account and let's have fun. Click the signup button to create a new account and let's join the fun, don't miss it!!!";
        switchText.innerHTML = "Sign up";
    }
  })();
});


// Functions

export var loginEmail = document.getElementById("loginEmail");
export var signupEmail = document.getElementById("signupEmail");
export var recoveryEmail = document.getElementById("recoveryEmail");
export var loginPassword = document.getElementById("loginPassword");
export var signupPassword = document.getElementById("signupPassword");
export var username = document.getElementById("username");
export var name = document.getElementById("name");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const recoverForm = document.getElementById("recoverForm");

loginForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log("signing in");
  signin();
})

signupForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log("signing up");
  signup();
})

recoverForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log("Recovering account");
  recoverForm();
})


const recoveryAccountBtn = document.getElementById("recover");
const closeRecoveryBtn = document.getElementById("closeRecovery");
const recoverySection = document.getElementById("recoverSection");
recoveryAccountBtn.addEventListener("click", ()=>{
  recoverySection.classList.add("active");
});
closeRecoveryBtn.addEventListener("click", ()=>{
  recoverySection.classList.remove("active");
});