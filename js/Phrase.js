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
			if (character.charAt(0) === ' ') { //Add conditional classes
				li.classList.add('space');
			} else {
				li.classList.add('hide', 'letter', character.charAt(0)); 
			}
		});
	}
}
