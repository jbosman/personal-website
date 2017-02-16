app.directive( 'sectionCu', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/background/directives/sections/cu/cu.html',
		scope: {}, // Creating isolate scope to keeps other scopes clean
		controller: ( $scope, cuFactory) => {
			$scope.header = 		cuFactory.headerDetails;
			$scope.collapseCtrl = 	cuFactory.collapseCtrlDetails;
			$scope.courses = cuFactory.getCourses();
		}
	};
});
