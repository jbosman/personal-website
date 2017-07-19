app.directive( 'sectionWeatherApp', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/projects/directives/sections/weather-app/weather-app.html',
		scope: {}, // Creating isolate scope to keeps other scopes clean
		controller: ( $scope, weatherAppFactory, projectSectionUtilityFactory) => {
			$scope.headerDetails = weatherAppFactory.headerDetails;
			$scope.collapseCtrlDetails = weatherAppFactory.collapseCtrlDetails;
			$scope.sectionDetails = projectSectionUtilityFactory.getSectionObj( weatherAppFactory.sectionDetails );
		}
	};
});