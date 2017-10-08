  	

var letters = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var loses = 0;
var lettersGuessed = [];
var guessesLeft = 9;



      // Generate random letter
      var computerLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(computerLetter);
  			
	  //user guess

	  document.onkeyup = function(event) {
	  	var userGuess = event.key;
	  	lettersGuessed.push(userGuess);
	  	displayGuess();

	  	//user wins
	  	if (userGuess === computerLetter) {
	 		wins+=1;
	 		console.log(wins);
	 		countWins();
	 		alert("Wow! You are psychic!");
	 		reset();
	 	
	 	//user guesses incorrectly	
	  	}else if (userGuess !== computerLetter) {
	  		alert("Wrong, but keep guessing!");
	  		guessesLeft > 0;
	  		guessesLeft -=1;
	  		guessAway();

	  	//user runs out of guesses
	  	}else if (guessesLeft === 0) {
	  		guessesLeft = 0;
	  		console.log("A") 
	  		loses+=1;
	  		countLoses();
	  		alert("You are not psychic!");
	  	}

		
	}			
	
	function displayGuess(){
		//take user guess and display it on the screen
		var letterElement = document.getElementById("lettersGuessed");
		letterElement.innerHTML = lettersGuessed;
	}

	function countWins(){
		var yay = document.getElementById("wins");
		yay.innerHTML = wins;
	}

	function countLoses(){
		var nay = document.getElementById("loses");
		nay.innerHTML = loses;
	}

	function guessAway(){
		var keepGuessing = document.getElementById("remainingGuesses");
		keepGuessing.innerHTML = guessesLeft;
	}

	

	function reset(){
		computerLetter;
		lettersGuessed = [];
		guessesLeft = 9;
	}
	
	


	// You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
	// Guess what letter I'm thinking of
	// Wins: (# of times the user has guessed the letter correctly)
	// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
	// Guesses Left: (# of guesses left. This will update)
	// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
	// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
	// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).