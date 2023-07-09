const gameChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return gameChoices[Math.floor(Math.random() * 3)];
}

function play(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    tiesCount++;
    return "It's a tie.";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    pwinCount++;
    return `You Win! ${playerChoice} beats ${computerChoice}`;
  } else {
    cwinCount++;
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
  if (pwinCount === 5) {
    toggleButtons();
    result = "You Won The Game!";
  } else if (cwinCount === 5) {
    toggleButtons();
    result = "You Lost The Game!";
  }
  message.innerText = result;
  pchoice.innerText = this.innerText;
  cchoice.innerText = computerChoice[0].toUpperCase() + computerChoice.slice(1);
  pwin.innerText = pwinCount;
  cwin.innerText = cwinCount;
  ties.innerText = tiesCount;
}

function toggleButtons() {
  buttons.forEach((button) => button.toggleAttribute("disabled"));
}

function resetGame(e) {
  pwin.innerText = 0;
  cwin.innerText = 0;
  ties.innerText = 0;
  pwinCount = 0;
  cwinCount = 0;
  tiesCount = 0;
  message.innerText = "Press a button";
  if (buttons[0].disabled) {
    toggleButtons();
  }
}

const buttons = document.querySelectorAll(".game-buttons > button");
buttons.forEach((button) => button.addEventListener("click", game));

const message = document.querySelector(".message");

const pchoice = document.querySelector("#pchoice");
const cchoice = document.querySelector("#cchoice");

const pwin = document.querySelector("#pwin");
const cwin = document.querySelector("#cwin");
const ties = document.querySelector("#ties");

document.querySelector(".reset").addEventListener("click", resetGame);
let pwinCount = 0;
let cwinCount = 0;
let tiesCount = 0;
