"use strict";

import { onNotifyFetchListeners } from "../main.js";
import { request } from "./movie-request.js";

/* ------------------------------ *\
  //Variables declearation
\* ------------------------------ */
export let TRENDING_MOVIES = [];
export let POPULAR_MOVIES = [];
export let UPCOMING_MOVIES = [];
export let LATEST_MOVIES = [];
export let TOP_RATED_MOVIES = [];
export let GENRES = [];
let arrays = [
  TRENDING_MOVIES,
  POPULAR_MOVIES,
  UPCOMING_MOVIES,
  TOP_RATED_MOVIES,
  GENRES,
  LATEST_MOVIES,
];

/* ------------------------------ *\
  //Actions
\* ------------------------------ */

/* ------------------------------ *\
  //Custom functions
\* ------------------------------ */

export async function getData() {
  await request();
}

export function parseData(data) {
  for (let i = 0; i < data.length; i++) {
    // Parse the data on called upon in movie-request.js
    arrays[i].push(data[i]);
  }
  onNotifyFetchListeners();
}
