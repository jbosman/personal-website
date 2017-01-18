app.directive( 'projectHeader', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/projects/directives/projectSection/projectHeader/projectHeader.html',
		controller: ($scope) => {
			$scope.developers = $scope.headerInfo.getProjectDevelopers();
		},
		scope: {
			headerInfo: '='
		}
	}
});