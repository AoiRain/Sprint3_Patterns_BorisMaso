const { ScoreBoard } = require('./ScoreBoard');

class Game {
	constructor(name) {
		this.name = name;
		this.scoreBoard = new ScoreBoard();
		this.game = { name: name, players: [] };
		this.scoreBoard.score.push(this.game);
	}

	addPlayer(playerName) {
		const player = { name: playerName.name, points: 0 };

		this.game.players.push(player);
	}

	addPoints(playerName, points) {
		const playerNameIndexNumber = this.game.players.findIndex((name) => name.name == playerName.name);

		if (playerNameIndexNumber !== -1) {
			this.game.players[playerNameIndexNumber].points += points;
		}
	}

	showScore() {
		this.game.players.sort((a, b) => {
			return b.points - a.points;
		});

		console.log(this.game);

		if (this.game.players[0].points !== 0) {
			console.log(`Current winner: ${this.game.players[0].name}.`);
		}
	}
}

module.exports = { Game };
