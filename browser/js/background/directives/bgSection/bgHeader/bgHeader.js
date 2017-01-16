app.directive( 'bgHeader', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/background/directives/bgSection/bgHeader/bgHeader.html',
		scope: {
			headerInfo: '='
		}
	}
});
