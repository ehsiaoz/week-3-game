

var heroList = [
	"superman",
	"batman",
	"spiderman",
	"wolverine",
	"flash",
	"batgirl",
	"shazam"];

console.log(heroList);



/*var guessCount = 12
document.write(guessCount);*/

//var activeWord = heroList.shift(0);

//var firstLetter = activeWord.charAt(0);

//console.log("The selected word is: " + activeWord);
//console.log("The first letter of the selected word is: " + firstLetter);

//console.log(wordList);

userinput = prompt("Type a letter");
console.log('The user guessed: '+userinput);

document.getElementById("promptvalue").addEventListner("onkeydown", function(){
	getElementById("output").innerHTML = "The user typed "
})


/*The below selects a random hero from the list*/
function selectHero(){
	var randomHero = heroList[Math.floor(Math.random() * heroList.length)];
		console.log("This is random superhero: "+ randomHero);
	var removeHero = heroList.splice(randomHero);
		console.log("This is the updated list of Heroes: " + heroList);

}


/*function win(){
	if (userinput == firstLetter);
		console.log("you win!");
}*/

selectHero()