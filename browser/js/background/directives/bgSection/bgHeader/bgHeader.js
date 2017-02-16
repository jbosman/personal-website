	app.directive( 'bgHeader', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/background/directives/bgSection/bgHeader/bgHeader.html',
		scope: {
			headerDetails: '='
		},
		controller: function( $scope, bgHeaderFactory) {
			$scope.headerInfo = bgHeaderFactory.getHeaderInfoObj( $scope.headerDetails );
		}
	}
});
