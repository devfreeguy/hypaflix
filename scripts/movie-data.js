"use strict";

import { onNotifyFetchListeners } from "../main.js";
import { request } from "./movie-request.js";

/* ------------------------------ *\
  //Variables declearation
\* ------------------------------ */
export const TRENDING_MOVIES = [];
export const POPULAR_MOVIES = [];
export const UPCOMING_MOVIES = [];
export const LATEST_MOVIES = [];
export const TOP_RATED_MOVIES = [];
export const GENRES = [];
const arrays = [
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
