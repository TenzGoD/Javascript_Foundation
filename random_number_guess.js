const readline = require('readline');

// Set up interface to read input from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Generate a random number between 1 and 20
const secretNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 5;

console.log("=================================");
console.log("  GUESS THE NUMBER (1 to 20)     ");
console.log("  You have 5 attempts. Good luck!");
console.log("=================================\n");

function askGuess() {
    // Check if player ran out of attempts
    if (attempts <= 0) {
        console.log(`❌ Game Over! The secret number was ${secretNumber}.`);
        rl.close();
        return;
    }

    // Prompt user for input in the terminal
    rl.question(`Attempts left (${attempts}) - Enter your guess: `, (answer) => {
        let guess = Number(answer);

        // Validate input
        if (isNaN(guess) || guess < 1 || guess > 20) {
            console.log("⚠️ Please enter a valid number between 1 and 20.\n");
            askGuess();
            return;
        }

        // Check the guess
        if (guess === secretNumber) {
            console.log(`\n🎉 Correct! You successfully guessed the number ${secretNumber}!`);
            rl.close();
        } else if (guess > secretNumber) {
            console.log("📉 Too high! Try a lower number.\n");
            attempts--;
            askGuess();
        } else {
            console.log("📈 Too low! Try a higher number.\n");
            attempts--;
            askGuess();
        }
    });
}

// Start the game
askGuess();