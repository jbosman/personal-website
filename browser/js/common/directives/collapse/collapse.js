app.directive( 'collapse', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/common/directives/collapse/collapse.html',
		transclude: true,
		scope: {
			collapseCtrlDetails: '='
		},
		controller: function($scope, collapseFactory) {

			$scope.collapseCtrl = collapseFactory.getCollapseObj( $scope.collapseCtrlDetails.title,  $scope.collapseCtrlDetails.target );
			// Attach function for controlling selected collapse up and down icons
			$scope.collapseIcon = function() {
				return $scope.collapseCtrl.showCollapse() ? 
						'fa-chevron-circle-down' :
						'fa-chevron-circle-up';
			}
		}
	}
});