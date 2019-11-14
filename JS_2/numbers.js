function main() {
	console.log('Numbers');
	const x = 5;
	const y = 2;

	let multiplied = x * y;
	let divided = y / x; //  %
	let subtracted = x - y;
	let added = x + y;

	console.log(multiplied, divided, subtracted, added);

	let toThePowerOf = Math.pow(x, y);
	console.log(toThePowerOf);

	let multipliedString = multiplied.toString();
	console.log(typeof multipliedString);
	console.log(typeof multiplied);

	let result = multiplied + 1;
	console.log(result);

	result = parseInt(multipliedString) + 1;
	console.log(result);
}

main();
