'use strict'

let app = angular.module( 'personalSite', []);

app.configure( ($urlRouterProvider, $locationProvider) =>  {

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

});
