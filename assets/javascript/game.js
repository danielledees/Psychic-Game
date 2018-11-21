//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
let wins = 0;
let losses = 0;
let guesses = 9;
let guessesLeft = 9;
let guessedLetters = [];
var letterToGuess = null;


//Computer chooses random number
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
document.querySelector('.psychic').style.display = "none";
//Allows the user 9 guesses
// guesses = guesses || 9
function updateGuessesLeft() {
    // guessesLeft will get displayed in HTML
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

function updateLetterToGuess() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

function updateGuessesSoFar() {
    // display letters already guessed 
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Function to reset everything
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
    setTimeout(function() { document.querySelector('.psychic').style.display = 'none'; }, 5000);
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

//When user makes a guess
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerChoices.includes(userGuess);

    if (check === false) {
        alert("That was not a valid guess, try again?");
        return false;
    } else if (check === true) {
        //If the Users choice was an alphabet char then update guesses left and add users guess to the array of guessed letters
        guessesLeft--;
        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessesLeft > 0) {
            if (userGuess == letterToGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                document.querySelector('.psychic').style.display = '';
                document.querySelector('.psychic').style.height = '20px';
                document.querySelector('.psychic').innerHTML = "Good guess  " + userGuess + " was the letter I was thinking of!";
                reset();
            }
        } else if (guessesLeft == 0) {
            // when user loses update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            document.querySelector('.psychic').style.display = '';
            document.querySelector('.psychic').innerHTML = "Sorry, I was thinking of the letter " + letterToGuess;
            // Then call to reset. 
            reset();

        }
        return false;
    } 
};