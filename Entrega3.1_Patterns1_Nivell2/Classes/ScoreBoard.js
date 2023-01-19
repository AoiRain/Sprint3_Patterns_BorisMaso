class ScoreBoard {
	static instance;
	score = [];

	constructor() {
		if (ScoreBoard.instance) {
			return ScoreBoard.instance;
		}

		ScoreBoard.instance = this;
	}
}

module.exports = { ScoreBoard };

// MODEL SINGLETON VIDEO YOUTUBE FERNANDO HERRERA: https://www.youtube.com/watch?v=rrWRhrdwuLg&t=496s

// class Singleton {
//     static instancia; //undefined
//     nombre = '';

//     constructor(nombre = '') {
//         if(!!Singleton.instancia) {
//             return Singleton.instancia;
//         }

//         Singleton.instancia = this;
//         this.nombre = nombre;
//     }
// }
