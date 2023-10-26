"use strict";

import { UPCOMING_MOVIES_URL, imageBaseUrl } from "./scripts/movie-confg.js";
import {
  TRENDING_MOVIES,
  POPULAR_MOVIES,
  LATEST_MOVIES,
  TOP_RATED_MOVIES,
  GENRES,
  getData,
  UPCOMING_MOVIES,
} from "./scripts/movie-data.js";

/* ------------------------------ *\
  // Variable declearation
\* ------------------------------ */

const navBtn = document.getElementById("nav-icon");
const nav = document.getElementById("nav");

const searchBtn = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-bar");
const searchBox = document.querySelector(".search-box");
const searchIcon = document.querySelector(".search-icon");

const bannerMovieInfo = document.querySelector(".banner-item-overview-layer");
const bannerHoverIcon = document.getElementById("banner-hover-icon");
const bannerMovieInfoBtn = document.querySelector(".banner-hover");
const categoryDropdownBtn = document.querySelector(".category-dropdown");
const categoryDropdown = document.querySelector(".category-dd-list");

let dropdownCategoryFilter = "All categories";
let gridMovieUrl = POPULAR_MOVIES;

// console.log(bannerMovieInfoBtn);

/* ------------------------------ *\
//Notify or update UI functions
\* ------------------------------ */

// this function is called to start fetching data
getData();
// This function is called to set the tab ahead
// incase data is received
setCategory();
// This function is called when data is fetched from database
export function onNotifyFetchListeners() {
  displayBannerMovie(TRENDING_MOVIES);
  setCategory();
  displayGridMovie(gridMovieUrl, dropdownCategoryFilter);
  (() => {
    document.getElementById("loading").classList.toggle("stop");
  })();
  displayCategories();
  // This function is called to display banner movies data
  // The next line of code is called to set the switch tab according
  // to the selected tab before the movie does
  // This next two line is called so it can display/set categories
  // dropdown ahead
  // This function is called to display movie grid and its filter is set to default
}

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
  //Search functions
\* ------------------------------ */

categoryDropdownBtn.addEventListener("click", () => {
  (() => {
    categoryDropdown.classList.toggle("active");
  })();
});

/* ------------------------------ *\
  //Custom functions
\* ------------------------------ */

function toggleHamburger() {
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

function toggleBannerInfo() {
  console.log("working");
  if (bannerHoverIcon.className === "bx bx-info-circle medium-icon") {
    bannerHoverIcon.className = "bx bx-x medium-icon";
    bannerMovieInfo.style.display = "flex";
    bannerMovieInfoBtn.classList.add("active");
  } else {
    bannerHoverIcon.className = "bx bx-info-circle medium-icon";
    bannerMovieInfo.style.display = "none";
    bannerMovieInfoBtn.classList.remove("active");
  }

  (() => {
    bannerMovieInfo.classList.toggle("active");
  })();
}

/* ------------------------------ *\
  //Display banner movie item functions
\* ------------------------------ */

function displayBannerMovie(list) {
  list.forEach((item) => {
    // console.log(item + 'list');
    const i = pickRandom(0, item.length);
    const bannerPost = document.getElementById("banner");
    bannerPost.innerHTML = ``;

    bannerPost.innerHTML += `<div
    class="banner" loading="lazy"
    style="background-image: url(${imageBaseUrl + item[i].backdrop_path})"
  >
    <div class="gradient-overlay"></div>
    <div class="banner-overlay">
      <div class="banner-data">
        <div class="banner-info">
          <span class="banner-info-item-text"
            ><i class="bx bx-star small-icon"></i> ${Math.floor(
              item[i].vote_average
            )}</span
          >
          <span class="banner-info-item-text"
            ><i class="bx bx-category small-icon"></i> ${getCategory(
              item[i].genre_ids[pickRandom(0, item[i].genre_ids.length - 1)]
            )}</span
          >
          <span class="banner-info-item-text"
            ><i class="bx bx-time small-icon"></i>${item[i].release_date}</span
          >
        </div>
        <div class="banner-title-action">
          <h3 id="movie-title">${item[i].title}</h3>
          <div class="banner-action">
            <button id="medium-btn" class="banner-btn">
              Watch later
            </button>
            <i
              class="bx bx-heart banner-btn medium-icon"
              id="relative-btn"
            ></i>
          </div>
        </div>
      </div>
      <div class="banner-hover">
        <i
          class="bx bx-info-circle medium-icon"
          id="banner-hover-icon"
        ></i>
      </div>
    </div>
    <div class="banner-item-overview-layer blur-bg">
      <h3>
        <span class="banner-item-overview-text">Movie summary</span
        ><br /><br />
        <span class="banner-item-overview"
          >${item[i].overview}</span
        >
      </h3>
    </div>
  </div>`;
  });
  bannerMovieInfoBtn.addEventListener("click", () => {
    console.log("pressed");
    toggleBannerInfo();
  });
}

/* ------------------------------ *\
  //Display movie grid functions
\* ------------------------------ */

function displayGridMovie(data, filter) {
  // data.shuffle()
  data.forEach((item) => {
    // console.log(data);
    const placeHolder = document.getElementById("grid-view");
    placeHolder.innerHTML = ``;
    // Loop through all abjects
    for (let i = 0; i < item.length; i++) {
      // const randomCategory = getCategory(item[i].genre_ids[pickRandom(0, item[i].genre_ids.length - 1)]);

      let placeHolderInnerHTML = `<div class="video-list-item" style="background-image: url(${
        imageBaseUrl + item[i].poster_path
      });">
        <div class="gradient-overlay video-list-item-overlay">
          <div class="video-list-item-top">
            <i class='bx bx-heart hover-icon medium-icon'></i>
            <i class='bx bx-info-circle hover-icon medium-icon'></i>
          </div>
          <div class="video-list-item-info">
            <h4 class="video-list-item-title">${item[i].title}</h4>
            <h4 class="video-list-item-info-text medium-font-size">${getCategory(
              item[i].genre_ids[pickRandom(0, item[i].genre_ids.length - 1)]
            )} &bull; 2023</h4>
          </div>
        </div>

      </div>`;

      if (filter != "All categories") {
        for (
          let genre_category = 0;
          genre_category < item[i].genre_ids.length;
          genre_category++
        ) {
          if (filter === getCategory(item[i].genre_ids[genre_category])) {
            // if movie item has specified genre in it then render it
            placeHolder.innerHTML += placeHolderInnerHTML;
          }
        }
      } else {
        placeHolder.innerHTML += placeHolderInnerHTML;
      }
    }
  });
}

function displayCategories(forDropdown) {
  const categoryForm = document.getElementById("category-dd-form");
  for (let i = 0; i < GENRES[0].length; i++) {
    // Create category drop down
    categoryForm.innerHTML += `<div class="cdd-item">
    <input
    type="radio"
    name="category"
    id="${GENRES[0][i].id}"
      value="${GENRES[0][i].name}"
      class="gone"
    />
    <label for="${GENRES[0][i].id}" class="dd-category-label medium-font-size"
      >${GENRES[0][i].name} <i class="bx bx-check"></i
    ></label>
  </div>`;
    if (i === GENRES[0].length - 1) {
      let ddSelectedAction = () => {
        dropdownCategoryFilter = document.querySelector(
          "input[name='category']:checked"
        ).value;
        console.log(dropdownCategoryFilter);
        setCategory();
        (() => {
          document.querySelector(".genres-tab").innerHTML = `${dropdownCategoryFilter} <i class="bx bx-chevron-down normal-icon"></i>`;
          categoryDropdown.classList.toggle("active");
          displayGridMovie(gridMovieUrl, dropdownCategoryFilter)
        })();

        // with this we can listen to the dropdown if any other
        // is selected
        // Get the label in a variable to add click event later
        // Get all the radio in a variable so we can loop through
        // them and find the value of the checked category dropdown
        // When item in dropdown is clicked, call the category
        // function to refresh data in the gridview based on
        // the tab its currently in
      };

      let ddCategoryRadio = document.querySelectorAll("input[name='category']");
      ddCategoryRadio.forEach((selection) => {
        selection.addEventListener("change", ddSelectedAction);
      });
    }
  }
}

/* ------------------------------ *\
  //Pick random functions
\* ------------------------------ */

function pickRandom(min, max) {
  // console.log(Math.random() * to);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* ------------------------------ *\
  //Category functions
\* ------------------------------ */

function setCategory() {
  let categoryRadio = document.querySelectorAll("input[name='filter']");

  let selectedFilter = () => {
    let selectedFilterValue = document.querySelector(
      "input[name='filter']:checked"
    ).value;

    gridMovieUrl = "";

    switch (selectedFilterValue) {
      case "popular":
        gridMovieUrl = POPULAR_MOVIES;
        // displayGridMovie(POPULAR_MOVIES, dropdownCategoryFilter);
        break;

      case "upcoming":
        gridMovieUrl = UPCOMING_MOVIES;
        // displayGridMovie(UPCOMING_MOVIES, dropdownCategoryFilter);
        break;

      case "toprated":
        gridMovieUrl = TOP_RATED_MOVIES;
        // displayGridMovie(TOP_RATED_MOVIES, dropdownCategoryFilter);
        break;

      default:
        gridMovieUrl = POPULAR_MOVIES;
        // displayGridMovie(POPULAR_MOVIES, dropdownCategoryFilter);
        break;
    }

    displayGridMovie(gridMovieUrl, dropdownCategoryFilter);
  };

  categoryRadio.forEach((category) => {
    category.addEventListener("change", selectedFilter);
  });
}

/* ------------------------------ *\
  //Notify or update UI functions
\* ------------------------------ */

function getCategory(id) {
  // console.log(GENRES[0].length);
  for (let i = 0; i < GENRES[0].length; i++) {
    if (id === GENRES[0][i].id) {
      // console.log(GENRES[0][i].name);
      return GENRES[0][i].name;
    }
  }
}
