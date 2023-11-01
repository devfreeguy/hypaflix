// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import {
  loginEmail,
  loginPassword,
  signupEmail,
  signupPassword,
  recoveryEmail,
  username,
  name,
} from "./auth";
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
const auth = getAuth();
var usersdata = firebase.database().ref("usersdata");

let firstName = name.value;
let lastName = "";
(() => {
  if (name.value.includes(" ")) {
    firstName = name.value.split(" ").slice(0, -1).join(" ");
    lastName = name.value.split(" ").slice(-1).join(" ");
  }
})();

var userdata = {
  name: name,
  username: username,
  email: signupEmail.value,
  password: signupPassword.value,
};

export function signup() {
  firebase
    .auth()
    .createUserWithEmailAndPassword(userdata.email, userdata.password)
    .then(function () {})
    .catch(function (error) {
      alert(`Signup failed \n ${error.message} \n ${error.code}`);
    });
}

export function signin(email, password) {
  const promise = auth().createUserWithEmailAndPassword(
    email !== "" ? email : loginEmail,
    password !== "" ? password : loginPassword
  );
  promise.catch((e) => alert(e.msg));
  window.open("https//www.google.com", "_self");
}

export function addUser() {
  usersdata.push().set(data);
  alert("User added successfully");
  signin(signupEmail, signupPassword);
}

export function recoverUser(){
  
}