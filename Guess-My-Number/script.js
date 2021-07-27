"use strict";
let random = Math.round(Math.random() * 20);
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let correctNumber = document.querySelector(".number");
let message = document.querySelector(".message");
let userInput = document.querySelector(".guess");
document.querySelector(".check").addEventListener("click", () => {
  if (score.textContent == 0) {
    document.body.style.backgroundColor = "crimson";
    message.textContent = "You lose the game...";
    correctNumber.textContent = random;
  } else {
    if (userInput.value < random) {
      message.textContent = "Too Low...";
      score.textContent -= 1;
    } else if (userInput.value > random) {
      message.textContent = "Too High...";
      score.textContent -= 1;
    } else {
      correctNumber.textContent = random;
      document.body.style.backgroundColor = "#60b347";
      message.textContent = "Correct guess..";
      if (highScore.textContent <= score.textContent) {
        highScore.textContent = score.textContent;
      }
      document.querySelector("check").style["pointer-events"] = "none";
    }
  }
});
document.querySelector(".again").addEventListener("click", () => {
  document.body.style.backgroundColor = "#222";
  message.textContent = "Start guessing...";
  correctNumber.textContent = "?";
  score.textContent = 20;
  userInput.value = "";
  random = Math.round(Math.random() * 20);
  console.log(random);
});
