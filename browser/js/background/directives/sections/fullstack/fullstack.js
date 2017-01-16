app.directive( 'sectionFullstack', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/background/directives/sections/fullstack/fullstack.html',
		scope: {},
		controller: ($scope, fullstackFactory) => {
			$scope.header = fullstackFactory.header;
			$scope.collapseCtrl = fullstackFactory.collapseCtrl;
		}
	};
});