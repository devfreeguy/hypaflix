"use strict";

import { RegisterUser, signinUser } from "./firebase-confg.js";

const modeSwitchs = document.querySelectorAll(".switchButton");
const switchText = document.querySelectorAll(".switchButtonText");
const infoPanel = document.getElementById("infoPanel");
const loginPanel = document.getElementById("loginPanel");
const signupPanel = document.getElementById("signupPanel");
const infoTopText = document.getElementById("infoTopText");
const infoText = document.getElementById("infoText");

modeSwitchs.forEach((modeSwitch) => {
  modeSwitch.addEventListener("click", () => {
    switchModes();
  });
});

export function switchModes() {
  loginPanel.classList.toggle("active");
  infoPanel.classList.toggle("active");
  signupPanel.classList.toggle("active");

  if (infoTopText.innerHTML === "Welcome back") {
    infoTopText.innerHTML = "You are welcome";
    infoText.innerHTML =
      "It's a pleasure having you, fill in your informations to get started and let's have fun. Click the signin button to log into your account and continue the fun, Lets go!!!";
    switchText.forEach((text) => {
      text.innerHTML = "Sign in";
    });
  } else {
    infoTopText.innerHTML = "Welcome back";
    infoText.innerHTML =
      "We are glad to have you back, enter your email and password to log into your account and let's have fun. Click the signup button to create a new account and let's join the fun, don't miss it!!!";
    // switchText.innerHTML = "Sign up";
    switchText.forEach((text) => {
      text.innerHTML = "Sign up";
    });
  }
}

// Functions

export const loginEmail = document.getElementById("loginEmail");
export const signupEmail = document.getElementById("signupEmail");
export const recoveryEmail = document.getElementById("recoveryEmail");
export const loginPassword = document.getElementById("loginPassword");
export const signupPassword = document.getElementById("signupPassword");
export const username = document.getElementById("username");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const recoverForm = document.getElementById("recoverForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  signinUser(e);
  loading(true);
  loginForm.reset();
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  RegisterUser(e);
  loading(true);
  signupForm.reset();
});

recoverForm.addEventListener("submit", (e) => {
  e.preventDefault();
  loading(true);
  recoverForm.reset();
});

const recoveryAccountBtn = document.getElementById("recover");
const closeRecoveryBtn = document.getElementById("closeRecovery");
const recoverySection = document.getElementById("recoverSection");

recoveryAccountBtn.addEventListener("click", () => {
  recoverySection.classList.add("active");
});
closeRecoveryBtn.addEventListener("click", () => {
  recoverySection.classList.remove("active");
});

const loadingBg = document.getElementById("loading");

export function loading(choice) {
  (() => {
    if (choice) {
      loadingBg.classList.add("active");
    } else {
      loadingBg.classList.remove("active");
    }
  })();
}
