app.directive( 'sectionNbaPickem', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/projects/directives/sections/nbaPickem/nbaPickem.html',
		scope: {}, // Creating isolate scope to keeps other scopes clean
		controller: ($scope, nbaPickemFactory, projectSectionUtilityFactory) => {
			$scope.headerDetails = nbaPickemFactory.headerDetails;
			$scope.collapseCtrlDetails = nbaPickemFactory.collapseCtrlDetails;
			$scope.sectionDetails = projectSectionUtilityFactory.getSectionObj( nbaPickemFactory.sectionDetails );
		},
		
	};
});