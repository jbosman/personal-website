app.directive( 'projectSection', () => {

	return {
		restrict: 'E',
		templateUrl: 'js/projects/directives/projectSection/projectSection.html',
		transclude: true,
		scope: {
			headerDetails: '=',
			collapseCtrlDetails: '=',
			sectionDetails: '='
		}
	}	
});