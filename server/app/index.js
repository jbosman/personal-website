'use strict'

let path = require('path');
let express = require('express'); 
let app = express();

module.exports = () => {

	require('./configure')(app);	// First configure the express app

	// Middleware to catch any requests for .js, .html, or .css
	app.use( (req, res, next) => { // eslint-disable-line no-unused-vars
		let err;
		
		if ( path.extname(req.path).length > 0 ){
			err = new Error('Not found.' + req.path);
			err.status = 404;
			next(err);
		}
		else{
			next();
		}

	});

	app.get( '/*', (req, res, next) => { // eslint-disable-line no-unused-vars
		res.sendFile( app.get('indexHTMLPath') );
	});

	// Error catching endware
	app.use( ( err, req, res, next) => { // eslint-disable-line no-unused-vars
		console.error(err);			// eslint-disable-line no-console
		console.error(err.stack);	// eslint-disable-line no-console
		res.status( err.status || 500 ).send( err.message || 'Internal servor error.');
	});

	return app;
};