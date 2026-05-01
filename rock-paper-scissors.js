function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock"
    }
    else if (randomNumber <0.66) {
        return "paper"
    }
    else {
        return "scissors"
    }
}
console.log(getComputerChoice());

function getHumanChoice () {
    const choice = prompt ("Enter rock, paper or scissors:");
    return choice;
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0; 

