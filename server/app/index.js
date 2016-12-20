'use strict'

let path = require('path');
let express = require('express');
let app = express();

module.exports = () => {

	require('./configure')(app);	// First configure the express app

	// Middleware to catch any requests for .js, .html, or .css
	app.use( (req, res, next) => {
		let err;
		
		if ( path.extname(req.path).length > 0 ){
			err = new Error('Not found.');
			err.status = 404;
			next(err);
		}
		else{
			next();
		}

	});

	app.get( '/*', (req, res, next) => {
		res.sendFile( app.get('indexHTMLPath') );
	});

	// Error catching endware
	app.use( ( err, req, res, next) => {
		console.error(err);
		console.error(err.stack);
		res.status( err.status || 500 ).send( err.message || 'Internal servor error.');
	});

	return app;
};
