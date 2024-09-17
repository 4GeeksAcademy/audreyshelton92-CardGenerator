/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Write your code here:

window.onload = function() {
  const btn = document.getElementById("generateCard");

  btn.addEventListener("click", function() {
    cardGenerator();
  });
};

const cardGenerator = () => {
  let suits = ["♦", "♣", "♥", "♠"];
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomValue = values[Math.floor(Math.random() * values.length)];

  document.querySelector(".top-suit").textContent = randomSuit;
  document.querySelector(".rank").textContent = randomValue;
  document.querySelector(".bottom-suit").textContent = randomSuit;

  const redSuits = ["♥", "♦"];
  if (redSuits.includes(randomSuit)) {
    document.querySelector(".top-suit").style.color = "red";
    document.querySelector(".bottom-suit").style.color = "red";
    document.querySelector(".rank").style.color = "red";
  } else {
    document.querySelector(".top-suit").style.color = "black";
    document.querySelector(".bottom-suit").style.color = "black";
    document.querySelector(".rank").style.color = "black";
  }
};
