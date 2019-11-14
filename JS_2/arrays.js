function main() {
	console.log('Arrays');
	let myStringArray = [ 'hello', 'world', 'my', 'name', 'is', 'Patrick' ];
	let myNumArray = [ 1, 2, 3, 4, 5 ];
	let mixedArray = [ 1, 'Patrick', true, { a: 1, b: 'john', c: 'hello' } ];

	myStringArray.forEach((value) => {
		console.log(value);
	});

	let myNumArraySquared = myNumArray.map((x) => {
		return x * x;
	});

	//Difference between foreach and map:
	/*
	forEach() — executes a provided function once for each array element.
	map() — creates a new array with the results of calling a provided function 
	on every element in the calling array.
	https://codeburst.io/javascript-map-vs-foreach-f38111822c0f
	*/

	console.log(myNumArray);
	console.log(myNumArraySquared);

	let oddNumbers = myNumArray.filter((num) => {
		return num % 2 === 1;
	});
	console.log(oddNumbers);
	console.log(myNumArray);
	console.log(oddNumbers);

	/*	The reduce() method reduces the array to a single value.
		The reduce() method executes a provided function for each value of the array (from left-to-right).
		The return value of the function is stored in an accumulator (result/total).
		Note: reduce() does not execute the function for array elements without values.
		Note: this method does not change the original array.
		https://www.w3schools.com/jsref/jsref_reduce.asp
*/
	let sumOfOdds = oddNumbers.reduce((currentTotal, newValue) => {
		const newTotal = currentTotal + newValue;
		return newTotal;
	}, 0);

	console.log(sumOfOdds);

	myNumArray.push(6);
	console.log(myNumArray);
	myNumArray.pop();
	console.log(myNumArray);
	let joined = myNumArray.join('');
	console.log(typeof joined);
	console.log(joined);
}

main();
