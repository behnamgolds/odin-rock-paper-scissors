const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    return choices[Math.floor(Math.random() * 3)];
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