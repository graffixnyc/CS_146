//Import the express module
const express = require('express');
//Create an instance of express
const app = express();
//Create a route, in this case, this is the root of our server
app.get('/', async (reqest, response) => {
	//send a response which in this case is an html file
	response.sendFile(__dirname + '/index.html');
});
app.get('/about', async (reqest, response) => {
	//send a response which in this case is an html file
	response.sendFile(__dirname + '/about.html');
});

app.get('*', async (reqest, response) => {
	//send a 404 response for any other route/page other than the root
	response.sendFile(__dirname + '/404.html');
});
/*  listen for requests and log a message to the console
    that the server is running */
app.listen(3000, () => {
	console.log("We've now got a server!");
	console.log('Your routes will be running on http://localhost:3000');
});
