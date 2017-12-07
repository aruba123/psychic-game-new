console.log ("s")
// Declaring variables and initial values
var totalGuesses = 20;
var guessesLeft = 20 ;
var guessedLetter =[];
var wins= 0;
var losses = 0;
var UserGuess; 
var pcMemGuess;

console.log(UserGuess)




// Declare variables for alphabets array
var pcLetterDb = ['a','b','c','d','e','f','g',

'h','i','j','k','l','m','n','o','p','q','r','s','t',

'u','v','w','x','y','z'];

pcMemGuesses =  pcLetterDb[Math.floor(Math.random() * pcLetterDb.length)];


var updateGuessesLeft = function(){

	document.querySelector('#remain').innerHTML = guessesLeft;

	//console.log(reh); - to check value of updatePGuessRemain.

};

var updateGuessesSoFar = function(){

	document.querySelector('#used').innerHTML = "Your Guesses so far: " + guessedLetter.join(", ");

	//console.log(kuch); -- gets value for var if its assigned value is docu.query

};

document.onkeyup = function(event){
      
      console.log (event) 
      UserGuess= String.fromCharCode(event.keyCode).toLowerCase();
      // event.key

	if (UserGuess === pcMemGuess) { 
		wins++ ;

		document.querySelector ('# wins').innerHTML ="wins:" + wins ;
		alert ("yes, the letter was " + pcMemGuesses.toLowerCase())
			
		alert ("yes, you are psychic");

		//reset();
	}

	else if (UserGuess !== pcMemGuess && guessesLeft >=1)  {
		guessesLeft--
		guessedLetter.push(UserGuess)

		updateGuessesLeft() 
		updateGuessesSoFar() 
	};

	document.querySelector ('#losses').innerHTML ="losses:" ;
	alert ("sorry, the correct letter is " + pcMemGuesses.toUpperCase + "maybe try again?");
	alert ("sorry, you're not psychic,maybe try again?");

	//reset();

}