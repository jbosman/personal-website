'use strict'

let chalk = require('chalk');
let server = require('http').createServer();
let express = require('express');
//let app = express();

let createApp = () => {
	let app = require('./app')();
	// app.get('/*', (req,res,next) => {
	// 	res.send('<h1>Hello World</h1');
	// })
	server.on('request', app);	// Attach the express app
};

let startServer = () => {
	let PORT = 1337;

	server.listen( 1337, () => { 
		console.log(chalk.blue('Server up on ' + chalk.magenta(PORT) + chalk.blue("!") ));
	});
};

createApp();
startServer();





