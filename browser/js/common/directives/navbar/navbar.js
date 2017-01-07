app.directive('navbar', function(){
	return{
		restrict: 'E',
		templateUrl: 'js/common/directives/navbar/navbar.html',
		link: scope => {
			scope.items = [
				{ label: 'Profile', state: 'profile' },
				{ label: 'Background', state:'background' },
				{ label: 'Projects', state: 'projects' },
				{ label: 'Study', state: 'study'},
				{ label: 'Contact', state: 'contact' }
			]
		}
	};
});