app.factory('projectSectionUtilityFactory', function( sectionFactoryUtilities){

	let projectSectionFactoryUtilities = {
		getGitHubLink: function(){ this.gitHubLink; }
	}

	function getSectionObj( sectionDetails ){
		return sectionFactoryUtilities.getSectionObj( projectSectionFactoryUtilities,  sectionDetails);
	}

	return {
		getSectionObj: getSectionObj
	}
});