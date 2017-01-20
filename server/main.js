'use strict'

let chalk = require('chalk');
let server = require('http').createServer();
let RequestPromise = require('request-promise');

function selfCrawl(){

	RequestPromise('http://www.bosman.io')
	.then( () => {
		console.log('selfcrawl succeeded...');
	})
	.catch(console.error);

}

let createApp = () => {
	let app = require('./app')();
	server.on('request', app);	// Attach the express app
};

let startServer = () => {
	let PORT = process.env.PORT || 1337;

	server.listen( PORT, () => { 
		console.log(chalk.blue('Server up on ' + chalk.magenta(PORT) + chalk.blue("!") )); // eslint-disable-line no-console
	});
};

createApp();
startServer();
setInterval( selfCrawl, 1500000); // Keep heroku site up

