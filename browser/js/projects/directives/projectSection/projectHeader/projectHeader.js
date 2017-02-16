app.directive( 'projectHeader', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/projects/directives/projectSection/projectHeader/projectHeader.html',
		scope: {
			headerDetails: '='
		},
		controller: ($scope, projectHeaderFactory) => {
			$scope.headerInfo = projectHeaderFactory.getProjectHeaderObj( $scope.headerDetails );
			$scope.developers = $scope.headerInfo.getProjectDevelopers();
		}
	}
});