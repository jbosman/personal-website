'use strict'

let app = angular.module( 'personalSite', []); // eslint-disable-line no-undef

app.configure( ($urlRouterProvider, $locationProvider) =>  {

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');    

});
