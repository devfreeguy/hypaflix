// $(document).ready(function () {
//   $("body").bind("cut copy", function (e) {
//     e.preventDefault();
//   });
// });


/* ------------------------------ *\
  //Pick random functions
\* ------------------------------ */

export function pickRandom(min, max) {
    // console.log(Math.random() * to);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }