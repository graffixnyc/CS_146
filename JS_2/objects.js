function main() {
	console.log('Objects');
	let testObj = {};
	testObj.firstName = 'Patrick';
	testObj.lastName = 'Hill';
	testObj.age = 'Not telling';
	console.log(testObj);

	let myObj = {
		hello: 'World',
		num: 1,
		bool: true,
		myFn: (name) => {
			return `Hello, ${name}`;
		}
	};

	console.log(myObj);

	myObj['new-Key1'] = 'I am a new key!';
	console.log(myObj);
	myObj.directlyAddedKey = "I've been added!";
	console.log(myObj);
	let keyName = 'myStrKey';
	myObj[keyName] = 'This was made dynamically';
	console.log(myObj);

	myObj.hello = 'Hello, world!';

	console.log(myObj.myFn('Patrick'));

	let obj1 = { a: 1, b: 2, c: 3 };
	let obj3 = { a: 1, b: 2, c: 3 };
	let obj2 = { b: 2, c: 3, a: 1, d: 4 };

	// const myName = 'Patrick';

	// myName = 'John';

	const myConstObj = { a: 1, b: 'Patrick' };
	myConstObj.firstName = 'John';
	myConstObj.a = 5;
	// // console.log(myConstObj.firstName);
	console.log(myConstObj);
	myConstObj = { a: 5, firstName: 'John' };
}

main();
