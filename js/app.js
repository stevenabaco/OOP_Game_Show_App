/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * By STEVEN ABACO
 */

// Assgin require DOM elements to variables
const buttonStart = document.getElementById('btn__reset');

let game; // Declare a global game variable with no instance

buttonStart.addEventListener('click', function() { //Initialize instance of a new game
  game = new Game
  game.startGame();
});
