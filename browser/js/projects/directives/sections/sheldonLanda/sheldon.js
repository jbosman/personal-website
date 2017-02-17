app.directive( 'sectionSheldon', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/projects/directives/sections/sheldonLanda/sheldon.html',
		scope: {}, // Creating isolate scope to keeps other scopes clean
		controller: ( $scope, sheldonFactory, projectSectionUtilityFactory) => {
			$scope.headerDetails = sheldonFactory.headerDetails;
			$scope.collapseCtrlDetails = sheldonFactory.collapseCtrlDetails;
			$scope.sectionDetails = projectSectionUtilityFactory.getSectionObj( sheldonFactory.sectionDetails );
		}
	};
});