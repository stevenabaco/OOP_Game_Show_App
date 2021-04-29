/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * By STEVEN ABACO
 */

class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase(); // transform phrase being used to lowercase
	}

	/**
	 * Display phrase on game board
	 */
	addPhraseToDisplay() {
		const ul = document.querySelector('#phrase ul'); // Select ul element
		const stringArray = game.activePhrase.phrase.split(''); //Convert string to array

		stringArray.forEach(character => {
			//Loop through each character and create li element
      const li = document.createElement('li');
			ul.appendChild(li);
			li.innerHTML = character[0]; //Add selected character to li
			if (character.charAt(0) === ' ') {
				//Add conditional classes
				li.classList.add('space');
			} else {
				li.classList.add('hide', 'letter', character.charAt(0));
			}
    });
	}

	/**
	 * Checks if passed letter is in phrase
	 * @param {string} letter - Letter to check
	 * @return {boolean} True if letter is included False if letter is not included in phrase
	 */
	checkLetter(letter) {
		return this.phrase.includes(letter) ? true : false;
	}

	/**
	 * Displays passed letter on screen after a match is found
	 * @param {string} key - Letter to display
	 */
	showMatchedLetter(key) {
		const phraseLetters = document.querySelectorAll('#phrase li'); // Select all letters in phrase
		const targetTextContent = key.target.textContent; // Select just the text content of target input
		if (this.checkLetter(targetTextContent)) {
			for (let letter of phraseLetters) {
				// Loop through letters to find matches
				if (letter.innerHTML === targetTextContent) {
					letter.classList.remove('hide');
					letter.classList.add('show'); // Reveal matched letter on gameboard
				}
			}
		}
	}
}
