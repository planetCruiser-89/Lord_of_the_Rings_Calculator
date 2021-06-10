"use strict";

const fellowshipTheatrical = 171;
const fellowshipExtended = 208;

const twoTowersTheatrical = 179;
const twoTowersExtended = 235;

const returnKingTheatrical = 200;
const returnKingExtended = 263;

const theatricalCollection = 550;
const extendedCollection = 706;

// console.log(inputHours);
// console.log(inputMinutes);
// console.log(userTimeAvailable);

var theatricalButton = document.getElementById("theatrical");
var extendedButton = document.getElementById("extended");

const button = document.getElementById("calculate");

button.onclick = function () {
  var inputHours = parseInt(document.getElementById("hours").value);
  var inputMinutes = parseInt(document.getElementById("minutes").value);
  var userTimeAvailable = inputHours * 60 + inputMinutes;
  var remainder;

  console.log(inputHours);
  console.log(inputMinutes);
  console.log(userTimeAvailable);

  //   if (userTimeAvailable < fellowshipTheatrical) {
  //     console.log(
  //       "You can watch " +
  //         Math.round((userTimeAvailable / fellowshipTheatrical) * 100) +
  //         "% of The Fellowship of the Ring"
  //     );
  //var remainder = userTimeAvailable - fellowshipTheatrical;
  //}
  if (theatricalButton.checked) {
    if (userTimeAvailable >= returnKingTheatrical) {
      console.log("You can watch any one of the theatrical releases");
      remainder = userTimeAvailable - fellowshipTheatrical;
      console.log("remainder after fellow " + remainder);
      //spacer
    } else {
      console.log(
        "You have enough time to watch " +
          Math.round((userTimeAvailable / fellowshipTheatrical) * 100) +
          "% of The Fellowship of the RIng."
      );
    }
    if (remainder >= twoTowersTheatrical) {
      console.log(
        "You can watch The Fellowship of the Rings and The Two Towers"
      );
      if (remainder > twoTowersTheatrical) {
        remainder = remainder - twoTowersTheatrical;
      }
      console.log("remainder after two towers " + remainder);
    } else if (remainder < twoTowersTheatrical) {
      console.log(
        "You can watch The Fellowship of The rings and, " +
          Math.round((remainder / twoTowersTheatrical) * 100) +
          "% of The Two Towers"
      );
    }
    if (remainder >= returnKingTheatrical) {
      console.log(
        "How lucky you are, you have enough time to watch the whole trilogy"
      );
    } else if (remainder < returnKingTheatrical) {
      console.log(
        "You have enough time to watch the first two movies, and can watch " +
          Math.round((remainder / returnKingTheatrical) * 100) +
          "% of the Return of the King"
      );
    }
  }

  if (extendedButton.checked) {
    if (userTimeAvailable >= returnKingExtended) {
      console.log("You can watch any one of the theatrical releases");
      remainder = userTimeAvailable - fellowshipExtended;
      console.log("remainder after fellow " + remainder);
      //spacer
    } else {
      console.log(
        "You have enough time to watch " +
          Math.round((userTimeAvailable / fellowshipExtended) * 100) +
          "% of The Fellowship of the RIng."
      );
    }
    if (remainder >= twoTowersExtended) {
      console.log(
        "You can watch The Fellowship of the Rings and The Two Towers"
      );
      if (remainder > twoTowersExtended) {
        remainder = remainder - twoTowersExtended;
      }
      console.log("remainder after two towers " + remainder);
    } else if (remainder < twoTowersExtended) {
      console.log(
        "You can watch The Fellowship of The rings and, " +
          Math.round((remainder / twoTowersExtended) * 100) +
          "% of The Two Towers"
      );
    }
    if (remainder >= returnKingExtended) {
      console.log(
        "How lucky you are, you have enough time to watch the whole trilogy"
      );
    } else if (remainder < returnKingExtended) {
      console.log(
        "You have enough time to watch the first two movies, and can watch " +
          Math.round((remainder / returnKingExtended) * 100) +
          "% of the Return of the King"
      );
    }
  }
};
