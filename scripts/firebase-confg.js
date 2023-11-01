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

window.signup = function (e) {
  e.preventDefault();
  let firstName;
  let lastName;
  (() => {
    if (name.value.includes(" ")) {
      firstName = name.value.split(" ").slice(0, -1).join(" ");
      lastName = name.value.split(" ").slice(-1).join(" ");
    } else {
      firstName = name.value;
      lastName = "";
    }
  })();

  var obj = {
    firstname: firstName,
    lastname: lastName,
    email: signupEmail.value,
    password: signupPassword.value,
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      alert(`Signup successful, you are welcome ${firstName}`);
    })
    .catch(function (err) {
      alert(`An error occured ${err}`);
    });

  console.log(obj);
};
