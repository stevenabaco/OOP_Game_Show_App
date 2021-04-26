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
			new Phrase("A dime a dozen"),
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
		const screenOverlay = document.getElementById('overlay');
		screenOverlay.style.display = 'none';
		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	}
}
