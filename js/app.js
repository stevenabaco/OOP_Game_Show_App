/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * By STEVEN ABACO
 */

//Set Global variable declarations
const buttonStart = document.getElementById('btn__reset');
const keyrows = document.querySelectorAll('.keyrow button');
const keys = Array.from(keyrows);

let game; // Declare a global game variable with no instance

buttonStart.addEventListener('click', function () {
	//Initialize instance of a new game
	game = new Game();
	game.startGame();
  document.addEventListener('keyup', game.keyEventListener);
});

for (let key of keyrows) {
	//event listener for click events on keys
	key.addEventListener('click', function (e) {
		e.target.disabled = true;

		game.handleInteraction(e.target, e.target.innerText);
	});
}

/**  */
