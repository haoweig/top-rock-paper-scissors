let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomValue = Math.floor(Math.random() * 3);
    
    if (randomValue === 0) {
        return 'rock';
    } else if (randomValue === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getUserChoice() {
    const userInput = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        alert("Invalid choice! Please enter 'rock', 'paper', or 'scissors'.");
        return getUserChoice(); // Recursively prompt until a valid input is provided
    }
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;


    // Define the playRound function inside playGame
    function playRound(humanChoice, computerChoice) {
        // Normalize the human choice to lowercase
        humanChoice = humanChoice.toLowerCase();

        // Determine the winner
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            return;
        }

        // Logic for determining the winner
        if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            humanScore++;
            console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`);
        } else {
            computerScore++;
            console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`);
        }

        // Log current scores
        console.log(`Scores - You: ${humanScore}, Computer: ${computerScore}`);
    }

    // Helper function to capitalize the first letter of a string
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Loop to play 5 rounds
    for (let i = 0; i < 5; i++) {
        const computerChoices = ['rock', 'paper', 'scissors'];
        const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        const userChoice = getUserChoice(); // Assuming getUserChoice is defined as before
        playRound(userChoice, computerChoice);
    }

    // Declare the final winner
    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game with a score of ${humanScore} to ${computerScore}!`);
    } else if (computerScore > humanScore) {
        console.log(`You lost the game. Computer wins with a score of ${computerScore} to ${humanScore}.`);
    } else {
        console.log("The game ended in a tie!");
    }
}
