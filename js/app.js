/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * By STEVEN ABACO
 */

const buttonStart = document.getElementById('btn__reset');

let game;

buttonStart.addEventListener('click', function() {
  game = new Game
  game.startGame();
  
});
