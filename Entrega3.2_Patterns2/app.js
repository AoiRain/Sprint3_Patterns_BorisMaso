const Middleware = require('./Middleware');
const numbers = require('./numbers');

class Operations {
	add({ a, b }) {
		return a + b;
	}
	subtract({ a, b }) {
		return a - b;
	}
	multiply({ a, b }) {
		return a * b;
	}
}

const calculator = new Operations();
const app = new Middleware(calculator);

app.use((req, next) => {
	req.a = req.a * req.a;
	console.log(`The first number squared is ${req.a}.`);
	next();
});

app.use((req, next) => {
	req.b = req.b * req.b;
	console.log(`The second number squared is ${req.b}.`);
	next();
});

app.use((req, next) => {
	req.a = req.a * req.a * req.a;
	console.log(`The first squared number cubed is ${req.a}.`);
	next();
});

app.use((req, next) => {
	req.b = req.b * req.b * req.b;
	console.log(`The second squared number cubed is ${req.b}.`);
	next();
});

app.use((req, next) => {
	req.a = req.a / 2;
	console.log(`The first squared number cubed divided by 2 is ${req.a}.`);
	next();
});

app.use((req, next) => {
	req.b = req.b / 2;
	console.log(`The second squared number cubed divided by 2 is ${req.b}.`);
	next();
});

console.log(app.add(numbers[0]));
console.log(app.subtract(numbers[1]));
console.log(app.multiply(numbers[2]));