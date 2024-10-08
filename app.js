// Get the HTML elements
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const choices = ["rock", "paper", "scissors"];

// Function to generate the computer's choice
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  switch (playerChoice) {
    case "rock":
      if (computerChoice === "scissors") {
        return "Rock smashes scissors! You win!";
      } else {
        return "Paper covers rock! You lose!";
      }
    case "paper":
      if (computerChoice === "rock") {
        return "Paper covers rock! You win!";
      } else {
        return "Scissors cuts paper! You lose!";
      }
    case "scissors":
      if (computerChoice === "paper") {
        return "Scissors cuts paper! You win!";
      } else {
        return "Rock smashes scissors! You lose!";
      }
  }
}

// Function to play the game
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);

  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;
  resultDisplay.classList.remove("winText", "loseText", "tieText");
  if (result.includes("win")) {
    resultDisplay.classList.add("winText");
  } else if (result.includes("lose")) {
    resultDisplay.classList.add("loseText");
  } else {
    resultDisplay.classList.add("tieText");
  }
}

// Add event listeners to the buttons
rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));