"use strict";
//console.log(document.querySelector(".message").textContent);
//document.querySelector(".message").textContent = "correct number!";
//document.querySelector(".number").textContent = 13;
//document.querySelector(".score").textContent = 10;
//document.querySelector(".guess").value = 23;
//console.log(document.querySelector(".guess").value);
const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = number;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = " no number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "correct number!";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too high";
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low ";
  }
});
