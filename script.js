
let rockBtn = document.getElementById('rockBtn');
let scissBtn = document.getElementById("scissBtn");
let playerChoiceText = document.getElementById("playerChoiceText");
let result = document.getElementById("result");
let round = document.getElementById("round");
let playerWins = document.getElementById("playerWins");
let computerWins = document.getElementById("computerWins");
let ties = document.getElementById("ties");
let gameOver = document.getElementById("game-over");
let container = document.querySelector(".container");
let roundCount = 0;
let winCount = 0;
let lossCount = 0;
let tieCount = 0;
let resetButton;

rockBtn.addEventListener("click", () => { game('rock');});
paperBtn.addEventListener("click", () => {game('paper');});
scissBtn.addEventListener("click", () => {game('scissors');});


function checkEnd(){
    if (roundCount == 5){
        endGame();
    }
}


function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*3)];

 }

function playOneRound(playerChoice, computerChoice){

    if(playerChoice == 'rock' && computerChoice == 'scissors'){
        return 'won';
    }
    else if (playerChoice == 'rock' && computerChoice == 'paper'){
        return 'lost';
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock'){
        return 'won';
    }
    else if (playerChoice == 'paper' && computerChoice == 'scissors'){
        return 'lost';
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper'){
        return 'won';
    }
    else if (playerChoice == 'scissors' && computerChoice == 'rock'){
        return 'lost';
    }
    else{
        return 'tie';
    }


    
}

function game(playerChoice){

    let computerChoice = getComputerChoice();
    let roundResult = playOneRound(playerChoice, computerChoice);
    roundCount++;

    playerChoiceText.textContent = `You chose ${playerChoice}.`;
    result.textContent = `The computer chose ${computerChoice}.`;

    updateScore(roundResult);

    round.textContent = `Round: ${roundCount}`;
    playerWins.textContent = `Player Wins: ${winCount}`;
    computerWins.textContent = `Computer Wins: ${lossCount}`;
    ties.textContent = `Ties: ${tieCount}`;
    checkEnd();
   
}

function updateScore(roundResult){

    if(roundResult == 'won'){
        result.style.backgroundColor = 'green';
        result.textContent += '  You win this round!';
        winCount++;


    }
    else if(roundResult == 'lost'){
        result.style.backgroundColor = 'red';
        result.textContent += '  You lost this round!';
        lossCount++;

    }
    else{
        result.style.backgroundColor = 'yellow';
        result.textContent += '  This round is a tie!';
        tieCount++;
    }
}

function endGame(){
    if(winCount > lossCount){
        gameOver.textContent = 'Game over! You win!';
        gameOver.style.backgroundColor = 'green';
    }
    else if (lossCount > winCount){
        gameOver.textContent = 'Game over! You lose!';
        gameOver.style.backgroundColor = 'red';
    }
    else{
        gameOver.textContent = "Game over! It's a tie!";
        gameOver.style.backgroundColor = 'yellow';
    }

    rockBtn.disabled = true;
    scissBtn.disabled = true;
    paperBtn.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start Over';
    resetButton.style.margin = "4px";
    container.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    rockBtn.disabled = false;
    scissBtn.disabled = false;
    paperBtn.disabled = false;
    roundCount = 0;
    winCount = 0;
    lossCount = 0;
    tieCount = 0;
    playerChoiceText.textContent = '';
    result.textContent = '';
    round.textContent = '';
    ties.textContent = '';
    playerWins.textContent = '';
    computerWins.textContent = '';
    gameOver.textContent = '';
    container.removeChild(resetButton);
}