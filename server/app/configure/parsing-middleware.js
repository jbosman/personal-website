'use strict'

let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

module.exports = app => {

	app.use( cookieParser() );

	app.use( bodyParser.json() );
	app.use( bodyParser.urlencoded( {extended: true } ));

}