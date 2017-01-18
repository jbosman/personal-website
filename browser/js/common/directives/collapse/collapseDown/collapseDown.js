app.directive( 'collapseDown', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/common/directives/collapse/collapseDown/collapseDown.html',
		scope: {
			collapseCtrl: '='
		},
		link: scope => {
			scope.toggleCollapse = () => { scope.collapseCtrl.toggleCollapse(); }
			scope.showCollapse = () => scope.collapseCtrl.showCollapse();
		}
	}
});