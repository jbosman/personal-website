app.directive( 'collapseDown', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/background/directives/bgSection/collapse/collapseDown/collapseDown.html',
		scope: {
			collapseCtrl: '='
		},
		link: scope => {
			scope.toggleCollapse = () => { scope.collapseCtrl.toggleCollapse(); }
			scope.showCollapse = () => scope.collapseCtrl.showCollapse();
		}
	}
});