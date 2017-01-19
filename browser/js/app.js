'use strict'

let app = angular.module( 'personalSite', ['ui.router', 'ui.bootstrap']); // eslint-disable-line no-undef

app.config( ($urlRouterProvider, $locationProvider) =>  {

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/profile');    

});
