let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous result
    
    const roundResult = document.createElement('div');
    roundResult.className = 'round-result';
    
    const score = document.createElement('div');
    score.className = 'score';

    if (humanChoice === computerChoice) {
        roundResult.textContent = `It's a tie! Both chose ${capitalizeFirstLetter(humanChoice)}.`;
    } else {
        const winner = determineWinner(humanChoice, computerChoice);
        roundResult.textContent = `${winner} wins! ${capitalizeFirstLetter(winner === 'You' ? humanChoice : computerChoice)} beats ${capitalizeFirstLetter(winner === 'You' ? computerChoice : humanChoice)}.`;
    }
    
    score.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
    
    resultDiv.appendChild(roundResult);
    resultDiv.appendChild(score);
    
    checkGameEnd();
}

function determineWinner(playerSelection, opponentSelection) {
    if (
        (playerSelection === 'rock' && opponentSelection === 'scissors') ||
        (playerSelection === 'paper' && opponentSelection === 'rock') ||
        (playerSelection === 'scissors' && opponentSelection === 'paper')
    ) {
        humanScore++;
        return 'You';
    } else {
        computerScore++;
        return 'Computer';
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function checkGameEnd() {
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? 'You' : 'Computer';
        setTimeout(() => {
            alert(`Game Over! ${winner} won the game!`);
            resetGame();
        }, 100);
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById('result').innerHTML = '';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const buttons = ['rock', 'paper', 'scissors'];
    buttons.forEach(btn => {
        document.getElementById(btn).addEventListener('click', 
            () => playRound(btn, getComputerChoice()));
    });
});