var wodrList = [
    "zohair",
    "hangman",
    "iphone",
    "game",
    "dog",
    "oilers",
    "edmonton"
];
var guessesLeft=0;
var Gameover=5;
var word="";

// answerArray stores the answer board (starting with all _ and gradually filled in)
var answerArray = [];
function init(){
    // Pick a random word
    word = wodrList[Math.floor(Math.random() * wodrList.length)];
    // Set up the answer array
    answerArray = [];
    for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }
    document.getElementById("answer").innerHTML= answerArray.join(" ");
  }
  init();
  function guessOne() {
    // Get a guess from the player
    var guess = document.getElementById("guess").value;
    var showThisMessage = "";

  if (guess.length !== 1) {
      showThisMessage ="Please enter only a single letter";
  } else {
        // Update the game with the guess
        var i=0; // an indexer into the array 
        for (i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                answerArray[i] = guess;
                showThisMessage = "YES! "+guess+" is in the answer";
            }
        }

        // Update the game for remaining unknowns
        var remaining_letters = answerArray.length;
        // recount the remaining letters
        for (i = 0; i < answerArray.length; i++) {
            if (answerArray[i] !== '_') {
                remaining_letters -= 1;
            }
        }

        // if no remaining letters, hurray, you won
        if (remaining_letters == 0) {
            showThisMessage = "YES! You guessed the word";
            alert( 'you win (:');

        }

        // (otherwise) if we have no message, wrong guess 
        if (showThisMessage === "") {
            showThisMessage = "Sorry, no "+guess,guessesLeft++;
        }
        if (guessesLeft > Gameover) {
           
            alert( 'Game Over ):');
           

        }
       

        // Update the puzzle
        document.getElementById("answer").innerHTML = answerArray.join(" ");

        // Lend a hand by clearing out their last guess
        document.getElementById("guess").value = "";
  }
  document.getElementById("message").innerHTML = showThisMessage;

}
