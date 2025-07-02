const body = document.querySelector("body");
const startMenu = document.querySelector(".startMenu");
//const playBTN = document.querySelector("#playBTN");
//const roundMenu = document.querySelector(".choiceMenu");
//playBTN.addEventListener('click', choiceMenu);


//FOR THE MORNING: EITHER MAKE A BUTTON THAT STARTS AT THE VERY BEGINNING THAT CALLS MAINMENU() OR 
//FIGURE OUT HOW TO GET INTO THE FUNCTION WITHOUT NEEDING TO CALL THE FUNCTION


function mainMenu() {
    //STYLES FOR THE MENU CONTAINER
    startMenu.style.display = "flex";
    startMenu.style.flexDirection = "column";
    startMenu.style.justifyContent = "center";
    startMenu.style.alignItems = "center";
    startMenu.style.flexShrink = "0";
    startMenu.style.width = "500px";
    startMenu.style.height = "500px";

    //TITLE FOR THE MAIN MENU
    const title = document.createElement("h1");
    title.textContent = "Rock Paper Scissors vs AI!"
    title.style.display = "flex";
    title.style.textAlign = "center";
    title.style.margin = "0";

    //START BUTTON 
    let startButton = document.createElement("button");
    startButton.style.fontSize = "28px";
    startButton.style.backgroundColor = " #5eff00";
    startButton.style.borderRadius = "30px";
    startButton.style.boxShadow = "0 5px gray";
    startButton.style.border = "0";
    startButton.style.padding = "10px";
    startButton.style.margin = "10px";
    startButton.style.width = "150px";
    startButton.style.cursor = "pointer";

    //START BUTTON STYLES
    startButton.addEventListener("mouseover", () => {
        startButton.style.backgroundColor = " #66db00";
    });

    startButton.addEventListener("mouseout", () => {
        startButton.style.backgroundColor = " #5eff00";
    });

    startButton.addEventListener("mousedown", () => {
        startButton.style.backgroundColor = " #4ba000";
        startButton.style.boxShadow = "0 2px gray";
        startButton.style.transform = "translateY(2px)";
    });

    startButton.addEventListener("mouseup", () => {
        startButton.style.backgroundColor = " #5eff00";
        startButton.style.boxShadow = "0 5px gray";
        startButton.style.transform = "translateY(-2px)";
    });

    //CLICK TO CHOICEMENU FUNCTION

    startButton.addEventListener("click", () => {
        return choiceMenu();
    }); 

    body.appendChild(startMenu);
    startMenu.appendChild(title);
    startMenu.appendChild(startButton);
}


function choiceMenu() {

    body.removeChild(startMenu)

    //STYLES FOR THE MAIN BOX
    roundMenu.style.width = "500px";
    roundMenu.style.height = "500px";
    roundMenu.style.display = "flex";
    roundMenu.style.gap = "5px";
    roundMenu.style.flexDirection = "column";
    roundMenu.style.justifyContent = "center";
    roundMenu.style.alignItems = "center";
    roundMenu.style.flexShrink = "0";

    //TITLE
    const titleHeading = document.createElement("h1");
    titleHeading.textContent = "Choose how many rounds you wish to play..";
    titleHeading.style.textAlign = "center";


    //CONTAINER FOR ROUND BUTTONS + EXIT BUTTON
    let buttonDiv = document.createElement("div");

    buttonDiv.style.width = "350px";
    buttonDiv.style.height = "100px";
    buttonDiv.style.display = "flex";
    buttonDiv.style.justifyContent = "space-between";
    buttonDiv.style.alignItems = "center";
    

    /* BUTTONS + STYLES */


    //2 ROUNDS
    const game2Rounds = document.createElement("button");
    game2Rounds.textContent = "2";
    game2Rounds.style.fontSize = "36px"
    game2Rounds.style.width = "100px";
    game2Rounds.style.height = "75px";
    game2Rounds.style.borderRadius = "5px";
    game2Rounds.style.border = "0px";
    game2Rounds.style.boxShadow = "0 5px gray";
    game2Rounds.style.backgroundColor = " #5eff00"; //GREEN
    game2Rounds.style.cursor = "pointer";


    // ROUND 2 BUTTON STYLES, ANIMATION  + (CLICK)

    game2Rounds.addEventListener("mouseover", () => {
        game2Rounds.style.backgroundColor = " #66db00";
    });

    game2Rounds.addEventListener("mouseout", () => {
        game2Rounds.style.backgroundColor = " #5eff00";
    });

    game2Rounds.addEventListener("mousedown", () => {
        game2Rounds.style.backgroundColor = " #4ba000";
        game2Rounds.style.boxShadow = "0 2px gray";
        game2Rounds.style.transform = "translateY(2px)";
    });

    game2Rounds.addEventListener("mouseup", () => {
        game2Rounds.style.backgroundColor = " #5eff00";
        game2Rounds.style.boxShadow = "0 5px gray";
        game2Rounds.style.transform = "translateY(-2px)";
    });

    //CALLS TO THE GAME FUNCTION
    game2Rounds.addEventListener("click", () => {
        return roundSelector(2);
    }); 

    //4 ROUNDS
    const game4Rounds = document.createElement("button");
    game4Rounds.textContent = "4";
    game4Rounds.style.fontSize = "36px"
    game4Rounds.style.width = "100px";
    game4Rounds.style.height = "75px";
    game4Rounds.style.borderRadius = "5px";
    game4Rounds.style.border = "0px";
    game4Rounds.style.boxShadow = "0 5px gray"
    game4Rounds.style.backgroundColor = " #fbff00"; //YELLOW
    game4Rounds.style.cursor = "pointer";

    // ROUND 4 BUTTON STYLES, ANIMATION  + (CLICK)

     game4Rounds.addEventListener("mouseover", () => {
        game4Rounds.style.backgroundColor = " #d2d600";
    });

    game4Rounds.addEventListener("mouseout", () => {
        game4Rounds.style.backgroundColor = " #fbff00";
    });

    game4Rounds.addEventListener("mousedown", () => {
        game4Rounds.style.backgroundColor = "rgb(170, 173, 0)";
        game4Rounds.style.boxShadow = "0 2px gray";
        game4Rounds.style.transform = "translateY(2px)";
    });

    game4Rounds.addEventListener("mouseup", () => {
        game4Rounds.style.backgroundColor = " #fbff00";
        game4Rounds.style.boxShadow = "0 5px gray";
        game4Rounds.style.transform = "translateY(-2px)";
    });

    //CALLS TO THE GAME FUNCTION
    game4Rounds.addEventListener("click", () => {
        return roundSelector(4);
    }); 

    // 6 ROUNDS
    const game6Rounds = document.createElement("button");
    game6Rounds.textContent = "6";
    game6Rounds.style.fontSize = "36px"
    game6Rounds.style.width = "100px";
    game6Rounds.style.height = "75px";
    game6Rounds.style.borderRadius = "5px";
    game6Rounds.style.border = "0px";
    game6Rounds.style.boxShadow = "0 5px gray";
    game6Rounds.style.backgroundColor = " #ff5500"; //RED
    game6Rounds.style.cursor = "pointer";

    // ROUND 6 BUTTON STYLES, ANIMATION  + (CLICK)

    game6Rounds.addEventListener("mouseover", () => {
        game6Rounds.style.backgroundColor = " #c44100";
    });

    game6Rounds.addEventListener("mouseout", () => {
        game6Rounds.style.backgroundColor = " #ff5500";
    });

    game6Rounds.addEventListener("mousedown", () => {
        game6Rounds.style.backgroundColor = " #943100";
        game6Rounds.style.boxShadow = "0 2px gray";
        game6Rounds.style.transform = "translateY(2px)";
    });

    game6Rounds.addEventListener("mouseup", () => {
        game6Rounds.style.backgroundColor = " #ff5500";
        game6Rounds.style.boxShadow = "0 5px gray";
        game6Rounds.style.transform = "translateY(-2px)";
    });


    //CALLS TO THE GAME FUNCTION
    game6Rounds.addEventListener("click", () => {
        return roundSelector(6);
    }); 

    let exitCont = document.createElement("div");
    exitCont.style.width = "300px";
    exitCont.style.height = "100px";
    exitCont.style.display = "flex";
    exitCont.style.alignItems = "center";
    exitCont.style.justifyContent = "center";


    const goBack = document.createElement("button");
    goBack.textContent = "Back to Start";
    goBack.style.fontSize = "14px";
    goBack.style.textAlign = "center";
    goBack.style.borderRadius = "5px";
    goBack.style.border = "0px";
    goBack.style.width = "100px";
    goBack.style.height = "40px";
    goBack.style.boxShadow = "0 5px gray"
    goBack.style.backgroundColor = "#75e3ff"; 
    goBack.style.cursor = "pointer";

    //GO BACK BUTTON STYLES

    goBack.addEventListener("mouseover", () => {
        goBack.style.backgroundColor = " #00a1c9";
    });

    goBack.addEventListener("mouseout", () => {
        goBack.style.backgroundColor = " #75e3ff";
    });

    goBack.addEventListener("mousedown", () => {
        goBack.style.backgroundColor = " #006c87";
        goBack.style.boxShadow = "0 2px gray";
        goBack.style.transform = "translateY(2px)";
    });

    goBack.addEventListener("mouseup", () => {
        goBack.style.backgroundColor = " #75e3ff";
        goBack.style.boxShadow = "0 5px gray";
        goBack.style.transform = "translateY(-2px)";
    });
    
    //GOES BACK
    goBack.addEventListener("click", () => {
        return;
    });

    roundMenu.appendChild(titleHeading);
    roundMenu.appendChild(buttonDiv);
    roundMenu.appendChild(exitCont);
    buttonDiv.appendChild(game2Rounds);
    buttonDiv.appendChild(game4Rounds);
    buttonDiv.appendChild(game6Rounds);
    exitCont.appendChild(goBack);
}

//MOVES TO THE ACTUAL GAME OR GOES BACK TO THE START
function roundSelector(int) {

}

function rockpaperscissorGame() {

}

