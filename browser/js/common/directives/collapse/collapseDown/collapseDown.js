app.directive( 'collapseDown', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/common/directives/collapse/collapseDown/collapseDown.html',
		scope: {
			collapseCtrl: '='
		}
	}
});