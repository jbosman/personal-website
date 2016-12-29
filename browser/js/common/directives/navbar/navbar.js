app.directive('navbar', function(){
	return{
		restrict: 'E',
		templateUrl: 'js/common/directives/navbar/navbar.html',
		link: scope => {
			scope.items = [
				{ label: 'Home', state: 'home' },
				//{ label: 'Porfolio', state: 'portfolio' },
				{ label: 'About', state: 'about' }
			]
		}
	};
});