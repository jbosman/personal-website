'use strict'

let chalk = require('chalk');

let express = require('express');
let app = express();

let startServer = () => {
	let PORT = 1337;

	app.get('/', (req, res) => { res.send('Hello World!')} );

	app.listen( 1337, () => { 
		console.log(chalk.blue('Server up on ' + chalk.magenta(PORT) + chalk.blue("!") ));
	});
};

startServer();





