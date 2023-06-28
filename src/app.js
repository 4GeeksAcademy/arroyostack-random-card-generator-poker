/* eslint-disable */
import "bootstrap";
import "./style.css";
import { generatePokerCard } from "./helpers/getCard";

const newCardButton = document.getElementById("new-card");
const cardImage = document.getElementById("card-image");
const sideIconsList = document.querySelectorAll("i");
const sideIcons = [...sideIconsList];
console.log(sideIcons);
// document.body.style.background = console.log(newCardButton);

window.onload = () => {
  // Get a random card image on page load from helper function getCard.js
  generatePokerCard(cardImage);

  // Generates card every 10 seconds
  setInterval(() => {
    generatePokerCard(cardImage);
  }, 10000);

  newCardButton.addEventListener("click", () => {
    generatePokerCard(cardImage);
  });
};

// New card is generated onclick
