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

function changeDiv() {
	var myDiv = document.getElementById('myDiv');
	myDiv.classList.remove('salmon');
	myDiv.classList.add('purple');
	myDiv.classList.add('redText');
}

function toggleDiv() {
	var myDiv = document.getElementById('myDiv');
	myDiv.classList.toggle('hide');
}

function clearDiv() {
	var myDiv = document.getElementById('myDiv');
	myDiv.innerHTML = '';
	myDiv.innerHTML = "<h1>Test</h1> <div><p>I'm another div</p></div>";
}
var button2 = document.getElementById('myButton2');
button2.addEventListener('click', (event) => {
	alert('I was clicked');
});
