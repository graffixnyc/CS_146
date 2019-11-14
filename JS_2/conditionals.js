function main() {
	console.log('Conditionals');

	let x = 5;
	let y = '5';

	if (x === y) {
		console.log('They are both Equal');
	} else {
		console.log('They are both Not-Equal');
	}

	let myName = 'Mike';
	if (myName) {
		console.log(`There is a value and it is: ${myName}`);
	} else {
		console.log('There is no name');
	}

	switch (myName) {
		case 'Patrick':
			console.log("It's Patrick");
			break;

		case 'John':
			console.log('John');
			break;

		default:
			console.log('None of the listed names');
	}
}

main();
