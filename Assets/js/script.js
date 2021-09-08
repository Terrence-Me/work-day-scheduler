let currentDayEl = $("#currentDay");

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
  let date = moment().format("MMMM Do, YYYY [at] h:mm A");
  currentDayEl.text(date);
}

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

setInterval(displayDate, 1000);
