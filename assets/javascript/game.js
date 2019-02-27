var letterGuesses = ["a", "c", "z", "g", "k", "i", "q", "e", "n"];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessed = []




document.onkeyup = function (event) {
    var computerGuess = letterGuesses[Math.floor(Math.random() * letterGuesses.length)];
    var userGuess = event.key;

    if (userGuess === computerGuess) {
        win++
        alert("Thats right!")
        document.querySelector("#textwin").innerHTML = wins;reset()
    }


    if (userGuess !== computerGuess) {
        guesses--;
        document.querySelector("#guessesleft").innerHTML = guesses
        guessed.push(userGuess)
        document.querySelector("#guesssofar").innerHTML = guessed
        if (guesses === 0) {
            losses++
            document.querySelector("#textloss").innerHTML = losses
            alert("You lose!");reset()
        }
    }



}
function reset() {
    guesses= 9;
    guessed= [];
    computerGuess = letterGuesses[Math.floor(Math.random() * letterGuesses.length)];
    document.querySelector("#textwin").innerHTML = wins;
    document.querySelector("#guessesleft").innerHTML = guesses;
    document.querySelector("#guesssofar").innerHTML = guessed;
    document.querySelector("#textloss").innerHTML = losses;


}