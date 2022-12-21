
let rockBtn = document.getElementById('rockBtn');
let scissBtn = document.getElementById("scissBtn");
let playerChoiceText = document.getElementById("playerChoiceText");
let result = document.getElementById("result");
let round = document.getElementById("round");
let playerWins = document.getElementById("playerWins");
let computerWins = document.getElementById("computerWins");
let ties = document.getElementById("ties");
let roundCount = 0;
let winCount = 0;
let lossCount = 0;
let tieCount = 0;

rockBtn.addEventListener("click", (event) => {game('rock');});
paperBtn.addEventListener("click", (event) => {game('paper');});
scissBtn.addEventListener("click", (event) => {game('scissors');});

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
    round.textContent = `Round: ${roundCount}`;
    playerWins.textContent = `Player Wins: ${winCount}`;
    computerWins.textContent = `Computer Wins: ${lossCount}`;
    ties.textContent = `Ties: ${tieCount}`;
        



    
    
}