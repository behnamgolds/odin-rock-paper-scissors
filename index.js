const gameChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return gameChoices[Math.floor(Math.random() * 3)];
}

function play(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie.";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return `You Win! ${playerChoice} beats ${computerChoice}`;
  } else {
    return `You Lose! ${computerChoice} beats ${playerChoice}`;
  }
}

function game(e) {
  let result = "";
  let computerChoice = "";
  const playerChoice = e.target.classList.value;
  if (gameChoices.includes(playerChoice)) {
    computerChoice = getComputerChoice();
    result = play(playerChoice, computerChoice);
    // console.log(result);
  }
  message.innerText = result;
  pchoice.innerText = playerChoice;
  cchoice.innerText = computerChoice;
}

const buttons = document.querySelectorAll(".game-buttons > button");
buttons.forEach((button) => button.addEventListener("click", game));
const message = document.querySelector(".message");
const pchoice = document.querySelector("#pchoice");
const cchoice = document.querySelector("#cchoice");
