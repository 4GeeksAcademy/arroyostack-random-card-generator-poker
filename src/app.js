/* eslint-disable */
import "bootstrap";
import "./style.css";
import { generatePokerCard } from "./helpers/getCard";

const newCardButton = document.getElementById("new-card");
const cardImage = document.getElementById("card-image");
const suits = ["hearts", "spades", "clubs", "diamons"];
const randomNumber = Math.floor(Math.random() * (14 - 1) + 1);
const randomSuit = suits[Math.floor(Math.random() * suits.length)];
let currentCard = String(randomNumber + randomSuit);

console.log(newCardButton);

window.onload = () => {
  // Get a random card from helper getCard.js
  generatePokerCard(currentCard, cardImage);

  // Page is reload when button in clicked
  newCardButton.addEventListener("click", () => {
    location.reload();
  });

  // Reload page every 10 seconds
  setTimeout(() => {
    location.reload();
  }, 10000);
};
