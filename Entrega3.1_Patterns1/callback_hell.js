const { readdir, readFile, writeFile } = require('fs');
const { join } = require('path');
const inbox = join(__dirname, 'inbox');
const outbox = join(__dirname, 'outbox');
const reverseText = (str) => str.split('').reverse().join('');

// Read and reverse contents of text files in a directory
// readdir(inbox, (error, file) => {
// 	if (error) return console.log('Error: Folder inaccessible');
// 	readFile(join(inbox, file), 'utf8', (error, data) => {
// 		if (error) return console.log('Error: File error');
// 		writeFile(join(outbox, file), reverseText(data), (error) => {
// 			if (error) return console.log('Error: File could not be saved!');
// 			console.log(`${file} was successfully saved in the outbox!`);
// 		});
// 	});
// });

const firstStep = (error, file) => {
	if (error) return console.log('Error: Folder inaccessible');
	file.forEach(secondStep);
};

const secondStep = (file) => {
	const thirdStep = (error, data) => {
		if (error) return console.log('Error: File error');
		writeFile(join(outbox, file), reverseText(data), fourthStep);
	};
	const fourthStep = (error) => {
		if (error) return console.log('Error: File could not be saved!');
		console.log(`${file} was successfully saved in the outbox!`);
	};
    readFile(join(inbox, file), 'utf8', thirdStep);
};

readdir(inbox, firstStep);