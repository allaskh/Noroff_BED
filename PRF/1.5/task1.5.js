/* The computer will randomly pick a number between 1 and 100, and the player has to guess what it is.
Each time the player makes a guess (this must be validated to be a number between 1 and 100), 
the program should tell them if the guess is too high, too low, or correct. 
The game should continue until the player guesses the correct number.
*/
let rightNumber;
let guessedNumber;
let attempts = 0;
let wantsToPlay = true;
let gameAttempts = [];
while(wantsToPlay){
    rightNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Right number is: " + rightNumber);
    guessedNumber= null;
    attempts = 0;
while (guessedNumber!== rightNumber){ 
    guessedNumber = Number(window.prompt("Guess a number between 1 and 100: "))
    attempts++;
    if (guessedNumber < 1 || guessedNumber > 100 || isNaN(guessedNumber)) {
    alert("Please enter a number between 1 and 100.");
    } else if(guessedNumber < rightNumber) {
        alert("Your number is too small. Guess again!");
    } else if (guessedNumber > rightNumber) {
        alert("Your number is too big. Guess again!");
    } else {
        alert("You guessed the right number! It took " + attempts + " guesses.");
    }
}
gameAttempts.push(attempts);
wantsToPlay = confirm("Do you want to play again? Press OK to continue!");
}
let summary = "";

for (let i = 0; i < gameAttempts.length; i++) {
    summary += "Game " + (i + 1) + ": " + gameAttempts[i] + " guesses. ";
}

document.writeln(summary);
   

