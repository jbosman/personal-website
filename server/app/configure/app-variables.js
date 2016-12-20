'use strict'
let path = require('path');
let morgan = require('morgan');

let rootPath = 	path.join(__dirname, '../../../');
let indexPath = path.join(rootPath, './server/app/views/index.html');

module.exports = app => {

	app.setValue('projectRoot', rootPath);
	app.setValue('indexHTMLPath', indexPath);
	app.setValue('log', morgan('dev'));

};