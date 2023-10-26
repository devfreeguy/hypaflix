"use strict";

/* -------------------- */
// variables
/* -------------------- */

export const API_KEY = "b6f44cc6b4ddd661af0a740d6ff894d2";
export const TRENDING_MOVIES_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US&page=1`;
export const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const LATEST_MOVIES_URL = `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}`;
export const UPCOMING_MOVIES_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
export const TOP_RATED_MOVIES_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en`;
export const imageBaseUrl = "https://image.tmdb.org/t/p/w780";

export function SEARCH(query, include_adult, page) {
  include_adult = false;
  page = 1;
  return `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=${include_adult}&language=en-US&page=${page}`;
}
