const audio = new Audio("ES_Button Click - SFX Producer.mp3");
const buttons = document.querySelectorAll("button");
const btn = document.querySelector(".start");
const btn2 = document.querySelector(".pause");
const pomodoro = document.querySelector(".pomodoro");
const short = document.querySelector(".short");
const long = document.querySelector(".long");
const counter = document.querySelector(".counter");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    audio.play();
  });
});


var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function(e){ 
    cursor.style.cssText = cursor2.style.cssText = "left: "
    + e.clientX + "px; top:"+ e.clientY + "px;";
});