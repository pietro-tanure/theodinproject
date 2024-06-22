
function getPcChoice(){
    let pcChoice = Math.floor(Math.random()*3);

    // color chosen pc button
    rockBtnPc.style.background='';
    paperBtnPc.style.background='';
    scissorsBtnPc.style.background='';
    switch (pcChoice){
        case 0: rockBtnPc.style.background='#000000'; break;
        case 1: paperBtnPc.style.background='#000000'; break;
        case 2: scissorsBtnPc.style.background='#000000'; break;
    }

    return pcChoice
}

function checkEnd(){
    if (counter == numRounds){
        if (playerScore > pcScore){
            document.querySelector(".message").textContent = "Congratulations! YOU WON";
        } else if (playerScore < pcScore){
            document.querySelector(".message").textContent = "You lost the game";
        } else {
            document.querySelector(".message").textContent = "It's a draw";
        }
        playerScore = 0, pcScore = 0, counter = 0;
    }
}

function playRound(playerChoice){
    // color chosen player button
    rockBtn.style.background='';
    paperBtn.style.background='';
    scissorsBtn.style.background='';
    switch (playerChoice){
        case 0: rockBtn.style.background='#000000'; break;
        case 1: paperBtn.style.background='#000000'; break;
        case 2: scissorsBtn.style.background='#000000'; break;
    }
    
    // get pc choice
    let pcChoice = getPcChoice();
    
    //decide winner
    if (playerChoice == pcChoice){
    } else if (playerChoice - pcChoice == 1 || playerChoice - pcChoice == -2){
        playerScore++;
    } else {
        pcScore++;
    }

    score.textContent = `${pcScore} X ${playerScore}`;
    message.textContent = '';
    counter++;

    checkEnd();
}

let playerScore = 0, pcScore = 0, numRounds=5, counter=0;
        
const score = document.querySelector(".middle h2");

const message = document.querySelector(".message"); 

const rockBtnPc = document.querySelector("#computerSide .rock");
const paperBtnPc = document.querySelector("#computerSide .paper");
const scissorsBtnPc = document.querySelector("#computerSide .scissors");  

const rockBtn = document.querySelector("#playerSide .rock");
const paperBtn = document.querySelector("#playerSide .paper");
const scissorsBtn = document.querySelector("#playerSide .scissors");

rockBtn.onclick = () => playRound(0);
paperBtn.onclick = () => playRound(1);
scissorsBtn.onclick = () => playRound(2);  
