// ------------------------------GLOBAL VARIABLES----------------------------------

var rounds = 0;
var bestGuess;

// ------------------------------FUNCTIONS----------------------------------

// RANDOM NUMBER GENERATOR
const randomNumber = (upperLimit) => Math.floor(Math.random() * upperLimit + 1);

// GAMEPLAY
const gameplay = (minNumber, maxNumber, gameNumber) => {
	var minNumberOG = minNumber;
	var maxNumberOG = maxNumber;
	let guesses = 0;

	while (userNumber != gameNumber) {
		var userNumber = prompt(
			`Please enter a number between ${minNumber} and ${maxNumber}:`
		);

		userNumber == null ? userNumber : (userNumber = parseInt(userNumber));

		if (userNumber == null) break;
		if (isNaN(userNumber) || userNumber < minNumber || userNumber > maxNumber) {
			alert(`Please pay attention to the rules...`);
		} else if (userNumber < gameNumber) {
			alert(`${userNumber} is lower than the random number. Please try again.`);
			minNumber = userNumber;
			guesses++;
		} else if (userNumber > gameNumber) {
			alert(
				`${userNumber} is higher than the random number. Please try again.`
			);
			maxNumber = userNumber;
			guesses++;
		} else {
			guesses++;
			alert(
				`You got it! The correct number was ${gameNumber}. You got it in ${guesses} tries!`
			);
			rounds++;
			break;
		}
	}

	if ((bestGuess == undefined || guesses < bestGuess) && userNumber != null) {
		bestGuess = guesses;
	}

	userNumber = 0;
	var continueGame = confirm(`Would you like to play another round?`);

	if (continueGame) {
		return gameplay(minNumberOG, maxNumberOG, randomNumber(maxNumber));
	} else {
		return gameResults(rounds, bestGuess);
	}
};

// RESULTS
const gameResults = (roundsPlayed, highScore) => {
	if (highScore == undefined) {
		alert(`Try again next time.`);
	} else {
		alert(
			`You played ${roundsPlayed} round(s)\nYour best score was ${highScore} guesses`
		);
	}
	rounds = 0;
	bestGuess = undefined;
};

// ------------------------------VERSION 1----------------------------------

const versionOne = () => gameplay(1, 10, randomNumber(10));

// ------------------------------VERSION 2----------------------------------

const versionTwoEasy = () => gameplay(1, 10, randomNumber(10));
const versionTwoNormal = () => gameplay(1, 100, randomNumber(100));
const versionTwoHard = () => gameplay(1, 1000, randomNumber(1000));
