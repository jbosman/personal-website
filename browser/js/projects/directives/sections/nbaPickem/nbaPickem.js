app.directive( 'sectionNbaPickem', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/projects/directives/sections/nbaPickem/nbaPickem.html',
		controller: ($scope, nbaPickemFactory) => {
			$scope.header = nbaPickemFactory.header;
			$scope.collapseCtrl = nbaPickemFactory.collapseCtrl;
		},
		scope: {} // Creating isolate scope to keeps other scopes clean
	};
});