app.directive( 'sectionCu', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/background/directives/sections/cu/cu.html',
		controller: ($scope, cuFactory) => {
			$scope.header = cuFactory.header;
			$scope.collapseCtrl = cuFactory.collapseCtrl;
			$scope.courses = cuFactory.getCourses();
		},
		scope: {} // Creating isolate scope to keeps other scopes clean
	};
});
