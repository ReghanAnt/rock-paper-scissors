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

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a draw!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }

    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
  }
