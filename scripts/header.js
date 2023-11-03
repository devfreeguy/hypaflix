"use strict";

import { signinUser } from "./firebase-confg.js";

/* ------------------------------ *\
  // Variable declearation
\* ------------------------------ */

const navBtn = document.getElementById("nav-icon");
const nav = document.getElementById("nav");
const signInBtn = document.getElementById("signInBtn");

const searchBtn = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-bar");
const searchBox = document.querySelector(".search-box");
const searchIcon = document.querySelector(".search-icon");

/* ------------------------------ *\
  //Navigation functions
  // Navigation bar toogle function
\* ------------------------------ */

navBtn.addEventListener("click", () => {
  // console.log("pressed");
  toggleHamburger();
});

/* ------------------------------ *\
    //Search functions
\* ------------------------------ */

searchBtn.addEventListener("click", () => {
  console.log("pressed");
});

/* ------------------------------ *\
    //Open or close navigation bar in smaller screen devices
\* ------------------------------ */

export function toggleHamburger() {
  if (navBtn.className === "bx bx-menu large-icon") {
    navBtn.className = "bx bx-arrow-from-bottom large-icon";
  } else {
    navBtn.className = "bx bx-menu large-icon";
  }

  // What this does is that it keeps the navigation bar closed or open
  // Basically, this helps with the sliding animation
  if (nav.className === "active") {
    (() => {
      nav.classList.remove("active");
      nav.classList.toggle("inactive");
    })();
  } else {
    (() => {
      nav.classList.remove("inactive");
      nav.classList.toggle("active");
    })();
  }
}

/* ------------------------------ *\
    //Open or close profile tab
\* ------------------------------ */

const closeProfile = document.getElementById("closeProfile");
const profilePicture = document.getElementById("profile");
const profileBg = document.getElementById("profile-section");

closeProfile.addEventListener("click", () => {
  profileBg.classList.remove("active");
});

profilePicture.addEventListener("click", () => {
  profileBg.classList.add("active");
});

if (!sessionStorage.getItem("userinfo")) {
  (() => {
    signInBtn.classList.add("close");
    profilePicture.classList.add("active");
  })();
} else {
  (() => {
    signInBtn.classList.remove("close");
    profilePicture.classList.remove("active");
  })();
}

export function getProfileData(userinfo) {
  document.getElementById("apoint").innerText = `${userinfo.access_point}`;
  document.getElementById("username").innerText = `${userinfo.username}`;
  document.getElementById("useremail").innerText = `${userinfo.email}`;

  //
  const signoutBtn = document.getElementById("signoutBtn");
  signoutBtn.addEventListener("click", () => {
    signinUser()
  });
}
