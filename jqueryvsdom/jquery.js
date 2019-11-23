function addP() {
	let p = '<p>This is dymanic text</p>';
	$('#myDiv').append(p);
}

function addList() {
	let myList = `
    <ul> 
        <li>Apples</li>
        <li>Oranges</li>
        <li>Grapes</li>
    </ul>`;

	$('#myDiv').append(myList);
}
