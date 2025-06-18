
function getComputerChoice() {
    let computerChoice = Math.random();

    if (computerChoice > 0.66 && computerChoice < 1) {
        return "rock";
    } else if (computerChoice > 0.33 && computerChoice < 0.66) {
        return "paper";
    } else {
        return "scissor";
    }
}

getComputerChoice();

function getHumanChoice() {
    let humanChoice = prompt("rock, paper or scissor?");

    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

/*function playRound(humanChoice, computerChoice) {
    let humanAnswer = humanChoice.toLowerCase();

    console.log("You chose " + humanAnswer);
    console.log("computer chose " + computerChoice);

    //Tie condition
    if (humanAnswer === computerChoice) {
        console.log("Tie!");
    }

    //Player Wins/Computer loses
    if (humanAnswer === "rock" && computerChoice === "scissor") {
        console.log("You win this round!");
        humanScore++;
        return humanScore;
    } else  if (humanAnswer === "paper" && computerChoice === "rock") {
        console.log("You win this round!");
        humanScore++;
        return humanScore;
    } else  if (humanAnswer === "scissor" && computerChoice === "paper") {
        console.log("You win this round!");
        humanScore++;
        return humanScore;
    //Computer Wins/player Loses
    } else  if (computerChoice === "rock" && humanAnswer === "scissor") {
        console.log("You lose this round!");
        computerScore++;
        return computerScore;
    } else  if (computerChoice === "paper" && humanAnswer === "rock") {
        console.log("You lose this round!");
        computerScore++;
        return computerScore;
    } else  if (computerChoice === "scissor" && humanAnswer === "paper") {
        console.log("You lose this round!");
        computerScore++;
        return computerScore;
    } else {
        console.log("Invalid Response");
    }
}*/

/*const humanAnswer = getHumanChoice();
const computerAnswer = getComputerChoice();

playRound(humanAnswer, computerAnswer);*/


function playGame() {

    for (let i = 0; i < 5; i++) {
        const humanAnswer = getHumanChoice();
        const computerAnswer = getComputerChoice();

        playRound(humanAnswer, computerAnswer);

    }

        function playRound(humanChoice, computerChoice) {

        let humanAnswer = humanChoice.toLowerCase();

        console.log("You chose " + humanAnswer);
        console.log("computer chose " + computerChoice);

        //Tie condition
        if (humanAnswer === computerChoice) {
            console.log("Tie!");
        }

        //Player Wins/Computer loses
        if (humanAnswer === "rock" && computerChoice === "scissor") {
            console.log("You win this round!");
            humanScore++;
            return humanScore;
        } else  if (humanAnswer === "paper" && computerChoice === "rock") {
            console.log("You win this round!");
            humanScore++;
            return humanScore;
        } else  if (humanAnswer === "scissor" && computerChoice === "paper") {
            console.log("You win this round!");
            humanScore++;
            return humanScore;
        //Computer Wins/player Loses
        } else  if (computerChoice === "rock" && humanAnswer === "scissor") {
            console.log("You lose this round!");
            computerScore++;
            return computerScore;
        } else  if (computerChoice === "paper" && humanAnswer === "rock") {
            console.log("You lose this round!");
            computerScore++;
            return computerScore;
        } else  if (computerChoice === "scissor" && humanAnswer === "paper") {
            console.log("You lose this round!");
            computerScore++;
            return computerScore;
        }
    }

    if (computerScore === humanScore) {
        console.log("Draw! No one wins!");
    } else if (computerScore > humanScore) {
        console.log("The Bot Wins!");
    } else if (humanScore > computerScore) {
        console.log("You Won!");
    }

}

playGame();




