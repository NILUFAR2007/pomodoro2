const audio = new Audio("ES_Switch Push button - SFX Producer.mp3");
const buttons = document.querySelectorAll("button");
const btn = document.querySelector(".start");
const btn2 = document.querySelector(".pause");
const pomodoro = document.querySelector(".pomodoro");
const short = document.querySelector(".short");
const long = document.querySelector(".long");
const counter = document.querySelector(".counter");
const pause = document.querySelector(".pause");

const body = document.querySelector("body");
const timecounter = document.querySelector(".timer-container");
const start = document.querySelector(".start");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top:" + e.clientY + "px;";
});

pomodoro.addEventListener("click", () => {
  body.style.background = "rgb(186, 73, 73)";
  timecounter.style.background = "indianred";
  short.classList.remove("shortactive");
  long.classList.remove("longactive");
  start.style.color = "rgb(186, 73, 73)";
  pause.style.color = "rgb(186, 73, 73)";
  pomodoro.classList.add("pomodoroactive");
  counter.innerText = "25:00";
  var countDownDate; // Set the countdown date as a global variable
  var countdownTimer; // Set the countdown timer as a global variable

  // Start the countdown
  function startCountdown() {
    // Set the date we're counting down to
    countDownDate = new Date().getTime() + 25 * 60 * 1000;

    // Update the countdown every 1 second
    countdownTimer = setInterval(function () {
      // Get the current date and time
      var now = new Date().getTime();

      // Find the distance between now and the countdown date
      var distance = countDownDate - now;

      // Calculate time remaining in minutes and seconds
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="countdown"
      counter.innerHTML = minutes + " : " + seconds;

      // If the countdown is finished, display a message
      if (distance < 0) {
        clearInterval(countdownTimer);
        counter.innerHTML = "EXPIRED";
      }
    }, 1000);
  }

  // Pause the countdown
  function pauseCountdown() {
    clearInterval(countdownTimer);
  }

  // Attach event listeners to the start and pause buttons
  btn.addEventListener("click", startCountdown);
  btn2.addEventListener("click", pauseCountdown);
});

short.addEventListener("click", () => {
  body.style.background = "#38858a";
  timecounter.style.background = "#528f94";
  pomodoro.classList.remove("pomodoroactive");
  long.classList.remove("longactive");
  start.style.color = "#38858a";
  pause.style.color = "#38858a";
  short.classList.add("shortactive");
  counter.innerText = "05:00";

  var countDownDate; // Set the countdown date as a global variable
  var countdownTimer; // Set the countdown timer as a global variable

  // Start the countdown
  function startCountdown() {
    // Set the date we're counting down to
    countDownDate = new Date().getTime() + 05 * 60 * 1000;

    // Update the countdown every 1 second
    countdownTimer = setInterval(function () {
      // Get the current date and time
      var now = new Date().getTime();

      // Find the distance between now and the countdown date
      var distance = countDownDate - now;

      // Calculate time remaining in minutes and seconds
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="countdown"
      counter.innerHTML = minutes + " : " + seconds;

      // If the countdown is finished, display a message
      if (distance < 0) {
        clearInterval(countdownTimer);
        counter.innerHTML = "EXPIRED";
      }
    }, 1000);
  }

  // Pause the countdown
  function pauseCountdown() {
    clearInterval(countdownTimer);
  }

  // Attach event listeners to the start and pause buttons
  btn.addEventListener("click", startCountdown);
  btn2.addEventListener("click", pauseCountdown);
});

long.addEventListener("click", () => {
  body.style.background = "#397097";
  timecounter.style.background = "#517c9c";
  pomodoro.classList.remove("pomodoroactive");
  short.classList.remove("shortactive");
  start.style.color = "#397097";
  pause.style.color = "#397097";
  long.classList.add("longactive");
  counter.innerText = "15:00";

  var countDownDate; // Set the countdown date as a global variable
  var countdownTimer; // Set the countdown timer as a global variable

  // Start the countdown
  function startCountdown() {
    // Set the date we're counting down to
    countDownDate = new Date().getTime() + 15 * 60 * 1000;

    // Update the countdown every 1 second
    countdownTimer = setInterval(function () {
      // Get the current date and time
      var now = new Date().getTime();

      // Find the distance between now and the countdown date
      var distance = countDownDate - now;

      // Calculate time remaining in minutes and seconds
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="countdown"
      counter.innerHTML = minutes + " : " + seconds;

      // If the countdown is finished, display a message
      if (distance < 0) {
        clearInterval(countdownTimer);
        counter.innerHTML = "EXPIRED";
      }
    }, 1000);
  }

  // Pause the countdown
  function pauseCountdown() {
    clearInterval(countdownTimer);
  }

  // Attach event listeners to the start and pause buttons
  btn.addEventListener("click", startCountdown);
  btn2.addEventListener("click", pauseCountdown);
});
