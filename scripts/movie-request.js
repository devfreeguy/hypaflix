"use strict";

import {
  TRENDING_MOVIES_URL,
  POPULAR_MOVIES_URL,
  LATEST_MOVIES_URL,
  UPCOMING_MOVIES_URL,
  TOP_RATED_MOVIES_URL,
  GENRES_URL,
} from "./movie-confg.js";
import { parseData } from "./movie-data.js";

// This urls must be in this order to avoid mismap is incorrect
// pages
let URLS = [
  fetch(TRENDING_MOVIES_URL),
  fetch(POPULAR_MOVIES_URL),
  fetch(UPCOMING_MOVIES_URL),
  fetch(TOP_RATED_MOVIES_URL),
  fetch(GENRES_URL),
  fetch(LATEST_MOVIES_URL),
];

export let totalPagesList = [];
export async function request() {
  try {
    let fetchedData = [];
    await Promise.allSettled(URLS).then((res) =>
      res.map((obj) => {
        obj.status === "fulfilled"
          ? fetchedData.push(obj.value)
          : fetchedData.push({});
      })
    );
    let list = [];
    let dataList = await Promise.all(fetchedData.map((item) => item.json()));
    dataList.forEach((element) => {
      // console.log(element.hasOwnProperty("results"));
      if(totalPagesList.length !== 4){
        if("total_pages" in element){
          totalPagesList.push(element.total_pages);
        }else{
          totalPagesList.push(0);
        }
      }
      if ("results" in element) {
        list.push(element.results);
      } else if ("genres" in element) {
        list.push(element.genres);
      } else {
        list.push(element);
      }
      // console.log(list);
    });

    console.log(totalPagesList);
    parseData(list);
  } catch (error) {console.log(error);}
}
