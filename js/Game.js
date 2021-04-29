/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * By STEVEN ABACO
 */

/**
 * Game Class used to create new instances
 */
class Game {
	constructor() {
		this.missed = 0; //Used to track the number of missed guesses by the player
		this.phrases = this.createPhrases(); //Array of phrase objects for the game
		this.activePhrase = null; //Phrase object that is currently in play
	}

	/**
	 * Creates phrases for use in game
	 * @return {array} An array of phrases that could be used in the game
	 */
	createPhrases() {
		const phrases = [
			new Phrase('Life is like a box of Choclates'),
			new Phrase('Beating around the bush'),
			new Phrase('A piece of cake'),
			new Phrase('A dime a dozen'),
			new Phrase('Back to square one'),
		];

		return phrases;
	}

	/**
	 * Selects random phrase from phrases property
	 * @return {Object} random Phrase object chosen to be used
	 */
	getRandomPhrase() {
		const randomIndex = Math.floor(Math.random() * this.phrases.length);
		const selectedPhrase = this.phrases[randomIndex];
		return selectedPhrase;
	}

	/**
	 * Begins game by selecting a random phrase and displaying it to user
	 */
  startGame() {
    this.resetGameBoard();
		const screenOverlay = document.getElementById('overlay'); // Get the screen overlay
		screenOverlay.style.display = 'none'; // Hide the screen overlay
		this.activePhrase = this.getRandomPhrase(); // Set active phrase to a random phrase
		this.activePhrase.addPhraseToDisplay();// render the empty boxes for the active phrase
	}

	/**
	 * Checks for winning move
	 * @return {boolean} True if game has been won, false if game wasn't won
	 */
	checkForWin() {
		const letters = document.querySelectorAll('.letter');
		const hiddenLetters = document.querySelectorAll('.hide');
		for (let i = 0; i < letters.length; i++) {
			return hiddenLetters.length === 0 ? true : false;
		}
	}

	/**
	 * Increases the value of the missed property
	 * Removes a life from the scoreboard
	 * Checks if player has remaining lives and ends game if player has no more
	 */
	removeLife() {
		const hearts = document.querySelectorAll('.tries img');
		this.missed += 1; // Add a point to missed if user guessed wrong
		// Either end game or remove life if user guessed wrong
		this.missed === 6
			? this.gameOver(false)
			: (hearts[this.missed - 1].src = 'images/lostHeart.png');
	}

	/**
	 * Displays game over message
	 * @param {boolean} gameWon - Whether or not the user won the game
	 */
	gameOver(gameWon) {
		const screenOverlay = document.getElementById('overlay');
		const gameOverMessage = document.getElementById('game-over-message');
		const ul = document.querySelector('#phrase ul');
		screenOverlay.style = ''; // Add back the overlay
		if (gameWon) {
			screenOverlay.classList.add('win');
			gameOverMessage.textContent = 'Congrats! You won!';
		}

		if (!gameWon) {
			screenOverlay.classList.add('lose');
			gameOverMessage.textContent = 'Sorry, better luck next time!';
		}
	}

	/**
	 * Function to remove all child nodes of the parent node
	 * This function was found via google search at https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
	 * @param {*} parent - The parent node of the elements to be removed
	 */
	removeAllChildNodes(parent) {
		while (parent.firstChild) {
			parent.removeChild(parent.firstChild);
		}
	}

	/**
	 * Actions to be performed when user clicks on one of the onscreen keyboard buttons.
	 * * The clicked/chosen letter must be captured.
	 * * The clicked letter must be checked against the phrase for a match.
	 * * If there’s a match, the letter must be displayed on screen instead of the placeholder.
	 * * If there’s no match, the game must remove a life from the scoreboard.
	 * * The game should check if the player has won the game by revealing all of the letters in the phrase or if the game is lost because the player is out of lives.
	 * * If the game is won or lost, a message should be displayed on screen.
	 * *
	 */
	handleInteraction(event, letter) {
		// const targetTextContent = event.target.innerText; // Select just the text content of target input
		
		if (this.activePhrase.checkLetter(letter) === true) {
			// Change color of keyboard key based on if guess is correct or not
			event.classList.add('chosen');
		} else {
			event.classList.add('wrong');
			this.removeLife();
		}
		this.activePhrase.showMatchedLetter(event); //Reveal correct guesses on gameboard
		this.checkForWin() ? this.gameOver(true) : null;
	}

	resetGameBoard() {
		const ulElement = document.querySelector('#phrase ul'); // Select ul element with all li as children
		const keys = document.querySelectorAll('div .keyrow button'); // Select all button keys
    const screenOverlay = document.getElementById('overlay'); // Select the overlay element
    const hearts = document.querySelectorAll('.tries img'); // Select the hearts
    this.removeAllChildNodes(ulElement);
    
    screenOverlay.className = 'start'; // Reset screen overlay to 'Start'
		
    for (let key of keys) { //Reset the keyss to all be enabled
			key.disabled = false;
			key.className = 'key';
    }
    
    for (let heart of hearts) { //Reset all the hearts to show all lives
      heart.src = 'images/liveHeart.png'; 
    }
	}
}
