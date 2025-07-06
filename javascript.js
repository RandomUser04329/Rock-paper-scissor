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
    document.querySelectorAll(".startMenu, .choiceMenu, .gameScreen, .winLoseRoundScreen").forEach(page => {
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
        return rockPaperScissorGame(2);
    });

    button4.addEventListener("click", () => {
        return rockPaperScissorGame(4);
    });

    button6.addEventListener("click", () => {
        return rockPaperScissorGame(6);
    });

    exitBtn.addEventListener("click", () => {
        return mainMenu();
    });

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

const winLoseScreen = document.querySelector(".winLoseRoundScreen");
const contentBox = document.querySelector(".contentBox");
const userWinsRoundText = document.querySelector("#userWinsText");
const tieText = document.querySelector("#tieText");
const computerWinsRoundText = document.querySelector("#computerWinsText");
const nextBTN = document.querySelector("#nextRoundBTN");


let humanScore = 0;
let computerScore = 0;



//SHOWS THE RESULT TEXTS
function showResultText(textClass) {

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

// Clears the current result texts before showing new results
function clearResultTexts() {
    userWinsRoundText.classList.remove("active");
    computerWinsRoundText.classList.remove("active");
    tieText.classList.remove("active");
    nextBTN.classList.remove("active");
}


function rockPaperScissorGame(int) {
    let currentRound = 0;

    // Clears previous results before a new round
    function newRound() {
        if (currentRound >= int) {
            return;
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

    newRound();

}

//WIN/LOSE 


