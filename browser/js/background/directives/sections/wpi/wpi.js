app.directive( 'sectionWpi', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/background/directives/sections/wpi/wpi.html',
		controller: ($scope, wpiFactory)  => {
			$scope.header = wpiFactory.headerDetails;
			$scope.collapseCtrl = wpiFactory.collapseCtrlDetails;
			$scope.courses = wpiFactory.getCourses();
		},
	};
});

