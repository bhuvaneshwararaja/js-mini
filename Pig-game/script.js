"use strict";
let activePlayer = 0;
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
let players = document.querySelectorAll(".player");
let score = document.querySelectorAll(".score");
let scores = [0, 0];
btnRoll.addEventListener("click", () => {
  let currentPlayer = document.getElementById(`current--${activePlayer}`);
  let random = Math.floor(Math.random() * (6 - 1 + 1) + 1); //(max-min+1)+min to exclude 0
  document.querySelector(".dice").setAttribute("src", `dice-${random}.png`);
  if (random != 1) {
    currentPlayer.textContent = Number(currentPlayer.textContent) + random;
  } else {
    scores[activePlayer] += 0;
    score[activePlayer].textContent = scores[activePlayer];
    currentPlayer.textContent = 0;
    players[activePlayer].classList.remove("player--active");

    activePlayer = activePlayer == 0 ? 1 : 0;
    players[activePlayer].classList.add("player--active");
  }
});
btnHold.addEventListener("click", () => {
  let currentPlayer = document.getElementById(`current--${activePlayer}`);
  scores[activePlayer] += Number(currentPlayer.textContent);
  score[activePlayer].textContent = scores[activePlayer];
  currentPlayer.textContent = 0;
  players[activePlayer].classList.remove("player--active");
  if (score[activePlayer].textContent >= 100) {
    players[activePlayer].style.backgroundColor = "#2f2f2f";
    document.querySelectorAll(".name")[activePlayer].style.color = "#c7365f";
    btnHold.classList.add("pointer-event");
    btnRoll.classList.add("pointer-event");
  } else {
    activePlayer = activePlayer == 0 ? 1 : 0;
    players[activePlayer].classList.add("player--active");
  }
});
btnNew.addEventListener("click", () => location.reload());
