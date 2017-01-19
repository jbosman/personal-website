app.directive( 'contactSection', () => {
	return {
		restrict: 'E',
		templateUrl: 'js/contact/directives/contactSection/contactSection.html',
		scope: {},
		controller: ($scope, contactFactory) => {
			$scope.toggleEmail = contactFactory.toggleEmail;
			$scope.displayEmail = contactFactory.displayEmail;
		}
	}
})