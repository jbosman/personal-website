app.directive( 'bgSection', () => {

	return {
		restrict: 'E',
		templateUrl: 'js/background/directives/bgSection/bgSection.html',
		transclude: true,
		scope: {
			headerDetails: '=',
			collapseCtrlDetails: '='
		}
	}
});