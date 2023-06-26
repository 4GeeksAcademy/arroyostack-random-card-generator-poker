/* eslint-disable */
import "bootstrap";
import "./style.css";
import { generatePokerCard } from "./helpers/getCard";

const newCardButton = document.getElementById("new-card");
const cardImage = document.getElementById("card-image");

console.log(newCardButton);

window.onload = () => {
  // Get a random card from helper function getCard.js
  generatePokerCard(cardImage);

  // Generates card every 10 seconds
  setTimeout(() => {
    generatePokerCard(cardImage);
  }, 10000);
};

// New card is generated onclick
newCardButton.addEventListener("click", () => {
  generatePokerCard(cardImage);
});
