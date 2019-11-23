function addP() {
	var text = document.createTextNode('This is dymanic text');
	var p = document.createElement('p');
	p.appendChild(text);
	document.getElementById('myDiv').appendChild(p);
}
