/*Construeix una aplicació que creï diversos Jugadors/es. Els jugadors/es podran ser afegits a un Joc, 
que mostrarà un marcador amb les puntuacions i el guanyador/a. L'aplicació ha de poder afegir o treure 
punts a cada jugador/a perquè el marcador canviï. La classe Marcador ha d'implementar un patró Singleton 
com a requisit indispensable.*/

const { Player } = require('./Classes/Player');
const { Game } = require('./Classes/Game');

//We create 2 new players.
const playerBoris = new Player('Boris');
const playerSandra = new Player('Sandra');

//We create a new game.
const game1 = new Game('Game 1');

//We add the two new players to the new game.
game1.addPlayer(playerBoris);
game1.addPlayer(playerSandra);

//We show the current score, it should be zero for both players with no winner.
game1.showScore();

//We add points and deduct points and show the score to check the changes.
game1.addPoints(playerSandra, 8);
game1.addPoints(playerSandra, -2);
game1.addPoints(playerBoris, 4);
game1.showScore();

//We create a new game and add the same players.
const game2 = new Game('Game 2');

game2.addPlayer(playerBoris);
game2.addPlayer(playerSandra);

//We add points to the same player, but in the new game. After showing the score it should be diferent than the game1 score,
//even with the players being the same.
game2.addPoints(playerSandra, 8);
game2.showScore();
