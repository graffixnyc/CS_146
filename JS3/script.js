function addP() {
	var text = document.createTextNode('This is dymanic text');
	var p = document.createElement('p');
	p.appendChild(text);
	var myDiv = document.getElementById('myDiv');
	myDiv.appendChild(p);
}

var getURL = () => {
	alert(document.URL);
};

var button2 = document.getElementById('myButton2');
button2.addEventListener('click', (event) => {
	alert('I was clicked');
});
