//Variables
//===========================================================================================================

	var heroList = [
		"superman",
		"batman",
		"spiderman",
		"wolverine",
		"flash",
		"batgirl",
		"robin"];
	

	var guessedLetters = [];

	var incorrectGuess = [];

	var correctGuess = [];

	var heroLetters = [];

	var numGuesses = 15;

	var winCount = 0;

	//The below function randomly selects a hero name for the user to guess from the possible list of heroes
	var randomHero = heroList[Math.floor(Math.random() * heroList.length)];
		console.log("This is random superhero: "+ randomHero);

	//The .split("") method separates the letters from the superhero's name and puts the letters into an array
	var heroLetters = randomHero.split("");
		console.log("These are the letters that make up the superhero: " + heroLetters);

//Functions ===========================================================================

// function startGame() {
// 	numGuesses = 15;
// 	incorrectGuess = [];
// 	randomHero = heroList[Math.floor(Math.random() * heroList.length)];
// 	heroLetters = randomHero.split("");
// }


//=========================================================================


//starts the game
document.onkeyup = function(startgame){

	



	if (numGuesses > 0 && heroLetters.length > 1) {

			document.onkeypress = function(event) {
			var typedChar;

			if (typeof event !== 'undefined') {
				typedChar = event.keyCode;
			}
			else if (event) {
				typedChar = e.which;
			}

			//converts keycode into a letter
			var charGuess = String.fromCharCode(typedChar);
			console.log("This is the letter that the user just guessed: " + charGuess);
			

			//compares typed letter to letters in the previously guessed letter array and returns index # if it exists and -1 if it does not exist in array.
			var b = guessedLetters.indexOf(charGuess);
			console.log("This is the value of b: " + b + ". If b > -1 the letter has ALREADY been guessed. if -1 then letter will be added to guessed list");

				if (b == -1) {
					//take user guess and put it in the guessedLetters array
					guessedLetters.push(String.fromCharCode(typedChar));
					console.log("this is the array of guessedLetters: " + guessedLetters);

					//decrease available guesses
					numGuesses = numGuesses - 1;
					console.log("# of guesses remaining: " + numGuesses);

					//compares typed letter to letters in the selected word and returns index # if it exists and -1 if it does not exist in array.
					var a = heroLetters.indexOf(charGuess, 0);
					console.log("this is the value of a: " + a + ". If a >-1 the guessed char is a letter in the word, if a=-1 then it is an incorrect guess");

						if (a !== -1) {
							//remove guessed letter out of hero letter array
							removedHeroLetter = heroLetters.splice(a, 1);
							console.log(heroLetters);
							console.log("Good guess!");
							

						}
						else {
							//take user guess and put it in the incorrect array
							incorrectGuess.push(String.fromCharCode(typedChar));
							console.log("these are incorrectly guessed letter: " + incorrectGuess);
						}

				//if (b == -1)
				}

				else {
					console.log("you have already guessed this letter")
				}


		//document.onkeypress = function(event)
		}


	//if (numGuesses > 0 && heroLetters.length > 1)		
	}

	else if (numGuesses > 0 && heroLetters.length == 1 ) {
			

		document.onkeypress = function(event) {
			var typedChar;

			if (typeof event !== 'undefined') {
				typedChar = event.keyCode;
			}
			else if (event) {
				typedChar = e.which;
			}

			//converts keycode into a letter
			var charGuess = String.fromCharCode(typedChar);
			console.log("This is the letter that the user just guessed: " + charGuess);
			

			//compares typed letter to letters in the previously guessed letter array and returns index # if it exists and -1 if it does not exist in array.
			var b = guessedLetters.indexOf(charGuess);
			console.log("This is the value of b: " + b + ". If b > -1 the letter has ALREADY been guessed. if -1 then letter will be added to guessed list");

				if (b == -1) {
					//take user guess and put it in the guessedLetters array
					guessedLetters.push(String.fromCharCode(typedChar));
					console.log("this is the array of guessedLetters: " + guessedLetters);

					//decrease available guesses
					numGuesses = numGuesses - 1;
					console.log("# of guesses remaining: " + numGuesses);

					//compares typed letter to letters in the selected word and returns index # if it exists and -1 if it does not exist in array.
					var a = heroLetters.indexOf(charGuess, 0);
					console.log("this is the value of a: " + a + ". If a >-1 the guessed char is a letter in the word, if a=-1 then it is an incorrect guess");

						if (a !== -1) {
							console.log("You Win!");
							winCount = winCount + 1;
							console.log("this is win count: " + winCount);
							//display count of wins in the DOM
							document.getElementById("wins").innerHTML = winCount;
							alert("you win!");
							window.location.reload()
							return;
						}
						else {
							//take user guess and put it in the incorrect array
							incorrectGuess.push(String.fromCharCode(typedChar));
							console.log("these are incorrectly guessed letter: " + incorrectGuess);
						}

				//if (b == -1)
				}

				else {
					console.log("you have already guessed this letter");
				}


		//document.onkeypress = function(event)
		}



/*

	//else if (numGuesses > 0 && heroLetters.length = 1)
	}

	else if (numGuesses = 0) {

		console.log("you lose");

	//else if (numGuesses = 0)	
	}


			//display the list of guessed letters in the DOM
			document.getElementById("displayIncorrectGuesses").innerHTML = incorrectGuess;

			//display the number of guesses remaining
			document.getElementById("numGuesses").innerHTML = numGuesses;

//startgame closing tag
}	


			
			
		

	// 		var b = guessedLetters.indexOf(charGuess, 0);
	// 		console.log("This is the value of b: " + b + ". If b > -1 the letter has ALREADY been guessed. if -1 then letter will be added to guessed list");










	// 			if (b !== -1) {
	// 				//take user guess and put it in the guessedLetters array
	// 				guessedLetters.push(String.fromCharCode(typedChar));
	// 				console.log("this is the array of guessedLetters: " + guessedLetters);
	// 				//reduce available guesses by 1
	// 				numGuesses = numGuesses - 1;
	// 				//compares typed letter to letters in the selected word and returns index # if it exists and -1 if it does not exist in array.
	// 				var a = heroLetters.indexOf(charGuess, 0);
	// 					console.log("this is the value of a: " + a + ". If a >-1 the guessed char is a letter in the word, if a=-1 then it is an incorrect guess");

	// 					if (a !== -1) {
	// 						console.log("you guessed correctly!")
	// 					}	

	// 					else {
	// 						//take user guess and put it in the incorrect array
	// 						incorrectGuess.push(String.fromCharCode(typedChar));
	// 						console.log("these are incorrectly guessed letter: " + incorrectGuess);
	// 					}
				
	// 			}


// 	}




// }*/