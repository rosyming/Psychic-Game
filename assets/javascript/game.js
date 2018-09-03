// Create an array for the computer with all of the letters 
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Creating variables to hold wins, losses, and guesses that start at 0.
var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var userInputArr = [];

// Creating variables that hold references to the places in HTML where will be displaying things
var winsText = document.getElementById('wins-text');
var lossesText = document.getElementById('losses-text');
var guessesLeftText = document.getElementById('guessesleft-text');
var userInputText = document.getElementById('guessessofar-text');

// Function run when user presses a key.
document.onkeyup = function(event) {
    
    // Determines which key was pressed.
    var userInput = String.fromCharCode(event.keyCode).toLowerCase();
    userInputArr.push(userInput);

    // Making sure userInput correct;
    console.log(userInput);

    // Randomly chooses choice from computer options array. 
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    // Making sure that computer choices work!
    console.log(computerGuess);

    // Scoring: Increase win counter by 1 if user guess = computer guess
    if(userInput === computerGuess) {
        wins++;
    }
    // If user guess does not equal computer guess, decrease remaining guess counter by 1
    else {
        remainingGuesses--;
    }
    // When remaining guesses counter reaches 0, increase the losses counter by 1 and reset the remaining guesses counter and user input
    if(remainingGuesses === 0) {
        (++losses) && (remainingGuesses = 10) && (userInputArr = []);
    }
    
// Display the user and computer gusses
winsText.textContent = 'Wins: ' + wins;
lossesText.textContent = 'Losses: ' + losses;
guessesLeftText.textContent = 'Guesses Left: ' + remainingGuesses;
userInputText.textContent = 'Your Guesses so far: ' + userInputArr;
}

