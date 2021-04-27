/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * By STEVEN ABACO
 */

// Assgin require DOM elements to variables
const buttonStart = document.getElementById('btn__reset');
const keyrows = document.querySelectorAll('.keyrow button');

let game; // Declare a global game variable with no instance

buttonStart.addEventListener('click', function () {
	//Initialize instance of a new game
	game = new Game();
	game.startGame();
});

for (let key of keyrows) {
  key.addEventListener('click', function (e) {
      game.handleInteraction(e)    
  });
}
