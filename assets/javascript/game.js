  	

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
	 var userText = document.getElementById("lettersGuessed");
	  document.onkeyup = function(event) {
	  userText.textContent = event.key;

	  	if (userText === computerLetter) {
			wins = Wins+1;
		} 
		else {loses=loses+1;
		
		}
		
	}					
	

