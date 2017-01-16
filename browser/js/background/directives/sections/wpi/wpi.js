app.directive( 'sectionWpi', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/background/directives/sections/wpi/wpi.html',
		controller: ($scope, wpiFactory)  => {
			$scope.header = wpiFactory.header;
			$scope.collapseCtrl = wpiFactory.collapseCtrl;
			$scope.courses = wpiFactory.getCourses();
		},
	};
});

