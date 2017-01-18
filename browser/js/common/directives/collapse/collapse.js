app.directive( 'collapse', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/common/directives/collapse/collapse.html',
		transclude: true,
		scope: {
			collapseCtrl: '='
		},
		link: scope => {
			scope.toggleCollapse = () => { 
				console.log('toggled');
				scope.collapseCtrl.toggleCollapse(); }
			scope.collapseIcon = () => {
				return scope.collapseCtrl.showCollapse() ? 
						'fa-chevron-circle-down' :
						'fa-chevron-circle-up';
			}
		}
	}
});