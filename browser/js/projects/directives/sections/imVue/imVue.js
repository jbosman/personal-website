app.directive( 'sectionImvue', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/projects/directives/sections/imVue/imVue.html',
		controller: ($scope, imVueFactory) => {
			$scope.header = imVueFactory.header;
			$scope.collapseCtrl = imVueFactory.collapseCtrl;
		},
		scope: {} // Creating isolate scope to keeps other scopes clean
	};
});