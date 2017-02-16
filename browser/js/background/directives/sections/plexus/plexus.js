app.directive( 'sectionPlexus', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/background/directives/sections/plexus/plexus.html',
		scope: {},
		controller: ($scope, plexusFactory) => {
			$scope.header = plexusFactory.headerDetails;
			$scope.collapseCtrl = plexusFactory.collapseCtrlDetails;
		}
	};
});