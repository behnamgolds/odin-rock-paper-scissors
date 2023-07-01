const gameChoices = ['rock', 'paper', 'scissors'];
const quitChoices = ["quit", "bye", "exit", "end", "exit"];
 
function getComputerChoice(){
    return gameChoices[Math.floor(Math.random() * 3)];
}

function play(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return "It's a tie."
    }else if((playerChoice === "rock" && computerChoice === "scissors")
    || (playerChoice === "paper" && computerChoice === "rock")
    || (playerChoice === "scissors" && computerChoice === "paper")){
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    } else {
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
}

function game(){
    let continuePlaying = true;
    while(continuePlaying){
        let playerChoice = prompt("Enter choice:").toLowerCase();
        if(gameChoices.includes(playerChoice)){
            let computerChoice = getComputerChoice();
            let result = play(playerChoice, computerChoice);
            console.log(result);
        } else if(quitChoices.includes(playerChoice)) {
            console.log("You quit the game.");
            continuePlaying = false;
        } else {
            console.log("Please select between 'rock', 'paper', 'scissors'");
        }
    }
}