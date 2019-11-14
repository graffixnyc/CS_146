function changeH1() {
	var myElement = document.getElementById('myH1');
	myElement.innerHTML = 'New';
}

function demonstrateVarVersusLet() {
	// Say you want to do some basic counts, like count the number of odds and then
	// the number of event numbers from 0 to 12

	// Change this between "odd", "even", and "both";
	const whatDoICount = 'both';
	const howManyToCount = 12;

	if (whatDoICount === 'odd' || whatDoICount === 'both') {
		// CHANGE THIS BETWEEN `var` and `let` to see difference!
		let count;

		for (let i = 0; i < howManyToCount; i++) {
			if (i % 2 === 1) {
				if (count === undefined) {
					count = 0;
				}

				count = count + 1;
			}

			console.log(`at index ${i} there are ${count} odd numbers`);
		}
	}

	if (whatDoICount === 'even' || whatDoICount === 'both') {
		// CHANGE THIS BETWEEN `var` and `let` to see difference!
		let count;

		for (let i = 0; i < howManyToCount; i++) {
			if (i % 2 === 0) {
				if (count === undefined) {
					count = 0;
				}

				count = count + 1;
			}

			console.log(`at index ${i} there are ${count} even numbers`);
		}
	}
}

function writeP() {
	document.write('<p>Hello World from file</p>');
}

function printArray() {
	//map vs foreach
	let myArray = [ 1, 2, 3, 4 ];

	for (var i = 0; i < myArray.length; i++) {
		document.write(myArray[i]);
	}

	myArray.forEach((element) => {
		document.write(element);
	});
	myArray.map((element) => {
		document.write(element);
	});
}

test = () => {
	console.log('Hello');
};

function myFunc() {
	let isItTrue;
	if (true === true) {
		isItTrue = true;
	}

	console.log(isItTrue);
}

function myIf() {
	let count = 8;

	do {
		console.log('I will run no matter what once');
		count++;
	} while (count < 10);
}

myIf();
