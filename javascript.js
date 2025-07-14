const body = document.querySelector("body");
const startGame = document.querySelector("#playGame");
const startMenu = document.querySelector(".startMenu");
const playBTN = document.querySelector("#playBTN");
const roundMenu = document.querySelector(".choiceMenu");
const screenGame = document.querySelector(".gameScreen");


//STARTS THE GAME
startGame.addEventListener("click", () => {
    startGame.style.display = "none";
    return mainMenu();
});


//ENABLES THE PAGES 
function showPage(pageClass) {
    document.querySelectorAll(".startMenu, .choiceMenu, .gameScreen, .winLoseRoundScreen, .gameOverScreen").forEach(page => {
        page.classList.remove("active");
    });

    const page = document.querySelector(pageClass);
    if (page) {
        page.classList.add("active");
    }
}

//MAIN MENU PAGE
function mainMenu() {
    showPage(".startMenu");
    playBTN.addEventListener("click", () => {
        return choiceMenu();
    }); 

}

const button2 = document.querySelector("#round2");
const button4 = document.querySelector("#round4");
const button6 = document.querySelector("#round6");
const exitBtn = document.querySelector("#exitBTN");

//CHOICE MENU PAGE
function choiceMenu() {
    showPage(".choiceMenu");

    button2.addEventListener("click", () => {
        rockPaperScissorGame(2);
    }, {once: true});

    button4.addEventListener("click", () => {
        rockPaperScissorGame(4);
    }, {once: true});

    button6.addEventListener("click", () => {
        rockPaperScissorGame(6);
    }, {once: true});

    exitBtn.addEventListener("click", () => {
        mainMenu();
    }, {once: true});

}

//AI FUNCTION FOR GAME
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

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

//GETS THE USERS CHOICE

function getHumanChoice(callback) {
    showPage(".gameScreen");

    // Selects the buttons for rock, paper and scissor
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissor = document.querySelector("#scissor");


    //Replaces with clones to remove previous answers
    const newRock = document.querySelector("#rock");
    const newPaper = document.querySelector("#paper");
    const newScissor = document.querySelector("#scissor");


    rock.replaceWith(newRock);
    paper.replaceWith(newPaper);
    scissor.replaceWith(newScissor);

    newRock.addEventListener("click", () => callback("rock"), {
        once: true
    });

    newPaper.addEventListener("click", () => callback("paper"), {
        once: true
    });

    newScissor.addEventListener("click", () => callback("scissor"), {
        once: true
    });
}

//THE MAIN GAME FUNCTION

// FOR THE WINLOSE ROUND SCREEN
const winLoseScreen = document.querySelector(".winLoseRoundScreen");
const contentBox = document.querySelector(".contentBox");
const userWinsRoundText = document.querySelector("#userWinsText");
const tieText = document.querySelector("#tieText");
const computerWinsRoundText = document.querySelector("#computerWinsText");
const nextBTN = document.querySelector("#nextRoundBTN");

// FOR THE GAME OVER SCREEN
const gameOverScreen = document.querySelector(".gameOverScreen");
const gameEndContentBox = document.querySelector(".gameEndBox");
const gameOverText = document.querySelector("#gameOverText");
const finalScoreText = document.querySelector("#finalScoreText");
const playerScoreText = document.querySelector("#humanScore");
const computerScoreText = document.querySelector("#computerScore");
const playerWinsText = document.querySelector("#userWinsFinalText");
const computerWinsText = document.querySelector("#computerWinsFinalText");
const gameTieText = document.querySelector("#gameTieText");
const playAgainText = document.querySelector("#tryAgainText");

const endBTNBox = document.querySelector(".endBTNBox");
const playAgainBTN = document.querySelector("#playAgainBTN");
const exitGameBTN = document.querySelector("#exitGameBTN");


// Initiate scores
let humanScore = 0;
let computerScore = 0;


//SHOWS THE RESULT TEXTS
function showResultText(textClass) {

    // FOR THE WIN/LOSE ROUND SCREENS
    contentBox.classList.remove("active");
    userWinsRoundText.classList.remove("active");
    computerWinsRoundText.classList.remove("active");
    tieText.classList.remove("active");

    const text = document.querySelector(textClass);
    if (text) {
        text.classList.add("active");
    }
    contentBox.classList.add("active");
    nextBTN.classList.add("active");
}


//FOR THE END GAME TEXTS/BUTTONS
function showEndGameTexts(textClass) {
    gameEndContentBox.classList.remove("active");
    gameOverText.classList.remove("active");
    finalScoreText.classList.remove("active");
    playerScoreText.classList.remove("active");
    computerScoreText.classList.remove("active");
    playerWinsText.classList.remove("active");
    computerWinsText.classList.remove("active");
    gameTieText.classList.remove("active");
    playAgainText.classList.remove("active");

    const text = document.querySelector(textClass);
    if (text) { 
        text.classList.add("active");
    }
    gameEndContentBox.classList.add("active");
    endBTNBox.classList.add("active");
    playAgainBTN.classList.add("active");
    exitGameBTN.classList.add("active");
}


// Clears the current result texts before showing new results
function clearResultTexts() {
    userWinsRoundText.classList.remove("active");
    computerWinsRoundText.classList.remove("active");
    tieText.classList.remove("active");
    nextBTN.classList.remove("active");
}

function clearEndResultTexts() {
    gameOverText.classList.remove("active");
    finalScoreText.classList.remove("active");
    playerScoreText.classList.remove("active");
    computerScoreText.classList.remove("active");
    playerWinsText.classList.remove("active");
    computerWinsText.classList.remove("active");
    gameTieText.classList.remove("active");
    playAgainText.classList.remove("active");
    endBTNBox.classList.remove("active");
    playAgainBTN.classList.remove("active");
    exitGameBTN.classList.remove("active");
    gameEndContentBox.classList.remove("active");
}

function rockPaperScissorGame(int) {
    let currentRound = 0;

    // Clears previous results before a new round
    function newRound() {
        if (currentRound >= int) {
            return gameOver(humanScore, computerScore);
        }
        clearResultTexts();
        showPage(".gameScreen");

        const computerAnswer = getComputerChoice();
        getHumanChoice((humanAnswer) => {
            playRound(computerAnswer, humanAnswer);
            currentRound++;
            nextBTN.addEventListener("click", newRound, {
                once: true
            });
        });
    }

    // The Function for playing a round 
    function playRound(computerChoice, humanChoice) {
        clearResultTexts();

        //console.log("Computer chose:", computerChoice); // Debugging line to see computer's choice
        //console.log("User chose:", humanChoice); // Debugging line to see user's choice

        //USER AND COMPUTER TIE
        if (humanChoice === computerChoice) {
            showPage(".winLoseRoundScreen");    
            showResultText("#tieText");
        } else if (
            //User Wins
            (humanChoice === "rock" && computerChoice === "scissor") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissor" && computerChoice === "paper")
        ) {
            showPage(".winLoseRoundScreen");
            showResultText("#userWinsText");
            humanScore++;
        } else {
            //Computer Wins
            showPage(".winLoseRoundScreen");
            showResultText("#computerWinsText");
            computerScore++;
        }

    }

    function gameOver(userScore, computerScore) {
        clearResultTexts();
        showPage(".gameOverScreen");
        showEndGameTexts("#gameOverText");
        showEndGameTexts("#finalScoreText");
        showEndGameTexts("#humanScore");
        showEndGameTexts("#computerScore");

        if (userScore > computerScore) {
            showEndGameTexts("#userWinsFinalText"); 
        } else if (userScore < computerScore) {
            showEndGameTexts("#computerWinsFinalText");
        } else {
            showEndGameTexts("#gameTieText");
        }

        playAgainBTN.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            clearEndResultTexts();
            choiceMenu();
        }, {once:true});

        exitGameBTN.addEventListener("click",() => {
            showPage(".startMenu");
            humanScore = 0;
            computerScore = 0;
            clearEndResultTexts();
        }, {once:true});
    }

    newRound();

}




