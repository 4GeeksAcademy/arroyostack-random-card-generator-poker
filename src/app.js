/* eslint-disable */
import "bootstrap";
import "./style.css";
import { generatePokerCard } from "./helpers/getCard";

const newCardButton = document.getElementById("new-card");
const cardImage = document.getElementById("card-image");

console.log(newCardButton);

window.onload = () => {
  // Get a random card from helper getCard.js
  generatePokerCard(cardImage);

  // Reload page every 10 seconds
  setTimeout(() => {
    generatePokerCard(cardImage);
  }, 10000);
};

// Page is reload when button in clicked
newCardButton.addEventListener("click", () => {
  generatePokerCard(cardImage);
});
