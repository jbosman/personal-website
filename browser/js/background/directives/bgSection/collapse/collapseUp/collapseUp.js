app.directive( 'collapseUp', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/background/directives/bgSection/collapse/collapseUp/collapseUp.html',
		scope: {
			collapseCtrl: '='
		},
		link: scope => {
			scope.toggleCollapse = () => { scope.collapseCtrl.toggleCollapse(); }
			scope.showCollapse = () => !scope.collapseCtrl.showCollapse();
		}
	}

});