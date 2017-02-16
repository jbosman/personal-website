app.directive( 'sectionImvue', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/projects/directives/sections/imVue/imVue.html',
		scope: {}, // Creating isolate scope to keeps other scopes clean
		controller: ( $scope, imVueFactory, projectSectionUtilityFactory) => {
			$scope.headerDetails = imVueFactory.headerDetails;
			$scope.collapseCtrlDetails = imVueFactory.collapseCtrlDetails;
			$scope.sectionDetails = projectSectionUtilityFactory.getSectionObj( imVueFactory.sectionDetails );
		}
	};
});