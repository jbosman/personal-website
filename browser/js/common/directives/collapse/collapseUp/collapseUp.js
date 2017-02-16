app.directive( 'collapseUp', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/common/directives/collapse/collapseUp/collapseUp.html',
		scope: {
			collapseCtrl: '='
		}
	}

});