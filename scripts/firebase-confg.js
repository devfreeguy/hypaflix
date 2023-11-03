"use strict";

import {
  loginEmail,
  loginPassword,
  signupEmail,
  signupPassword,
  recoveryEmail,
  username,
  loading,
  switchModes,
} from "./auth.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import {
  getDatabase,
  get,
  set,
  ref,
  child,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_9ZJJS1Dwi_L58Gfq4TP9uJk8WHMBzg0",
  authDomain: "hypaflix.firebaseapp.com",
  databaseURL: "https://hypaflix-default-rtdb.firebaseio.com",
  projectId: "hypaflix",
  storageBucket: "hypaflix.appspot.com",
  messagingSenderId: "100102869900",
  appId: "1:100102869900:web:969832d624d1eab1cb3ca9",
  measurementId: "G-DJQ48W87JZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const auth = getAuth(app);
const dbref = ref(db);

export let RegisterUser = (re) => {
  re.preventDefault();

  console.log("Registering...");
  createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
    .then((data) => {
      set(ref(db, "usersdata/" + data.user.uid), {
        username: username.value,
        email: signupEmail.value,
        access_point: 100,
        account_level: 1,
        account_type: "user",
      });
      loading(false);
      alert(
        `Hurray!!!\n\n\nYour registration was successful, you can proceed to loging into your new account`
      );
      switchModes();
    })
    .catch((er) => {
      loading(false);
      alert(`Signup failed\n${er.message}\n${er.code}`);
    });
};

export let signinUser = (se) => {
  se.preventDefault();

  console.log("Signing in...");
  signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((data) => {
      get(child(db, "usersdata/" + data.user.uid)).then((snapshot) => {
        if (snapshot.exists) {
          sessionStorage.setItem(
            "userinfo",
            JSON.stringify({
              email: snapshot.val().email,
              username: snapshot.val().username,
              access_point: snapshot.val().access_point,
              account_level: snapshot.val().account_level,
            })
          );
          sessionStorage.setItem("usersdata", JSON.stringify(data.user));
          window.location.href = "./index.html";
        }
      });
      loading(false);
      console.log(data);
    })
    .catch((err) => {
      loading(false);
      alert(`Signin failed\n${err.message}\n${err.code}`);
    });
};

export function signoutUser() {
  sessionStorage.removeItem("usersdata");
  sessionStorage.removeItem("userinfo");
  window.location.href = "./index.html";
  console.log("sign out successful");
}

// function signin() {
//   loading(true);
//   console.log("Signing in");
//   const promise = auth().createUserWithEmailAndPassword(
//     loginEmail.value,
//     loginPassword.value
//   );
//   promise.catch((e) => alert(e.msg));
//   window.open("https//www.google.com", "_self");
// }

// function addUser() {
//   loading(true);
//   console.log("Adding user");
//   usersdata.push().set(userdata);
//   alert("User added successfully");
//   signin(signupEmail, signupPassword);
// }

// function recoverUser() {}
