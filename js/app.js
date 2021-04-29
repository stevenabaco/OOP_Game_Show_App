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
});

document.addEventListener('keyup', function (e) { //event listener for keybord entries
  // console.log(e)
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].innerText === e.key) {
      game.handleInteraction(keys[i], keys[i].innerText);
    }
    // console.log(keys[i])
  }
})

for (let key of keyrows) { //event listener for click events on keys
	key.addEventListener('click', function (e) {
		game.handleInteraction(e.target, e.target.innerText);
	});
}

/**  */