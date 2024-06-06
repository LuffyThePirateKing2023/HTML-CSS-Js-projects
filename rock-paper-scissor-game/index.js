const buttons = document.querySelectorAll(".buttons button");

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

const popupEl = document.getElementById("popup");

const popupMessageEl = document.getElementById("popup-message");

const overlayEl = document.getElementById("overlay");

const rematchButton = document.getElementById("rematch");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
    checkWinner();
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

function checkWinner() {
  if (playerScore === 20) {
    showPopup("You win the game! Want a rematch?");
  } else if (computerScore === 20) {
    showPopup("Computer wins the game! Want a rematch?");
  }
}

function showPopup(message) {
  popupMessageEl.textContent = message;
  popupEl.style.display = "block";
  overlayEl.style.display = "block";
}

function hidePopup() {
  popupEl.style.display = "none";
  overlayEl.style.display = "none";
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  resultEl.textContent = "";
  hidePopup();
}

rematchButton.addEventListener("click", resetGame);
