let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// This function will be called at the start of each new round in order to generate the new secret target number.
let generateTarget = () => {
    return (Math.floor(Math.random() * 10));
}
// This function will be called each round to determine which guess is closest to the target number.
// Return true if the human player wins, and false if the computer player wins.
let compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    let humanDifference = Math.abs(targetGuess - humanGuess);
    let computerDifference = Math.abs(targetGuess - computerGuess);
    return humanDifference <= computerDifference;
}

let updateScore = (winner)
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;
  