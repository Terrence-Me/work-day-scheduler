let currentDayEl = $("#currentDay");
// let parentEl = $("#parent");
// let parentEl = document.getElementById("parent");

let userInput;
let prepend;
let currenthour = moment().hours();
let nineAm = $("#9AM");
let tenAm = $("#10AM");
let elevAm = $("#11AM");
let twelPm = $("#12PM");
let OnePm = $("#13PM");
let twoPm = $("#14PM");
let threePm = $("#15PM");
let fourPm = $("#16PM");
let fivePm = $("#17PM");

function displayDate() {
  let date = moment().format("MMMM Do,  YYYY [at] h:mm A");
  currentDayEl.text(date);
}

// function doSomething(e) {
//   if (e.target !== e.currentTarget) {
//     let clickedonItem = e.target.id;
//     clickedonItem = document.querySelector(".field").value;
//     console.log(clickedonItem);
//   }
//   e.stopPropagation();
// }

function init() {
  let init9 = JSON.parse(localStorage.getItem("09:00AM"));
  nineAm.val(init9);
  let init10 = JSON.parse(localStorage.getItem("10:00AM"));
  nineAm.val(init10);
  let init11 = JSON.parse(localStorage.getItem("11:00AM"));
  nineAm.val(init11);
  let init12 = JSON.parse(localStorage.getItem("12:00PM"));
  nineAm.val(init12);
  let init1 = JSON.parse(localStorage.getItem("01:00PM"));
  nineAm.val(init1);
  let init2 = JSON.parse(localStorage.getItem("02:00PM"));
  nineAm.val(init2);
  let init3 = JSON.parse(localStorage.getItem("03:00PM"));
  nineAm.val(init3);
  let init4 = JSON.parse(localStorage.getItem("04:00PM"));
  nineAm.val(init4);
  let init5 = JSON.parse(localStorage.getItem("05:00PM"));
  nineAm.val(init5);
}

// function doSomething(e) {
//   let btn = e.target;
//   if (e.target.tagName !== btn)
// }

function inputFieldColor() {
  $(".form-control").each(function () {
    let time = parseInt($(this).attr("id"));
    currenthour = parseInt(currenthour);

    if (currenthour > time) {
      $(this).addClass("past");
    } else if (currenthour < time) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

$(document).ready(function () {
  init();
  inputFieldColor();
  $(".saveBtn").on("click", function (e) {
    e.preventDefault();
    userInput = $(this).siblings(".form-control").val().trim();
    prepend = $(this).siblings(".input-group-prepend").text().trim();
    console.log(typeof prepend);
    console.log(typeof userInput);
    localStorage.setItem(prepend, JSON.stringify(userInput));
  });
});

// parentEl.addEventListener("click", doSomething, false);
setInterval(displayDate, 1000);
