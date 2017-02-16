app.directive( 'sectionFullstack', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/background/directives/sections/fullstack/fullstack.html',
		scope: {},
		controller: ($scope, fullstackFactory) => {
			$scope.header = 		fullstackFactory.headerDetails;
			$scope.collapseCtrl = 	fullstackFactory.collapseCtrlDetails;
		}
	};
});