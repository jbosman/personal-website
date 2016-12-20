'use strict'

let chalk = require('chalk');
let server = require('http').createServer();
let express = require('express');
//let app = express();

let createApp = () => {
	let app = require('./app')();
	server.on('request', app);	// Attach the express app
};

let startServer = () => {
	let PORT = process.env.port || 1337;

	server.listen( PORT, () => { 
		console.log(chalk.blue('Server up on ' + chalk.magenta(PORT) + chalk.blue("!") ));
	});
};

createApp();
startServer();
