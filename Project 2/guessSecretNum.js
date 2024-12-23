
function getGuess() {
    let userInput;
    do {
        userInput = prompt("Please guess the secret number (1-20):");
    } while (isNaN(userInput) || userInput.trim() === "" || parseInt(userInput) < 1 || parseInt(userInput) > 20);
    return parseInt(userInput);
}

const secretNumber = Math.floor(Math.random() * 20) + 1; // Random number between 1 and 20
let userGuess = getGuess();

while (userGuess !== secretNumber) {
    if (userGuess < secretNumber) {
        alert("Incorrect, too low.");
    } else if (userGuess > secretNumber) {
        alert("Incorrect, too high.");
    }
    userGuess = getGuess();
}

alert(`Correct Guess! ${userGuess}`);