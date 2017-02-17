app.factory('projectHeaderFactory', function( sectionFactoryUtilities ){

	let headerFunctions = {
		// Header Functions
		getLogoId: 				function(){  return this.logoId; },
		getLogoSrc: 			function(){  return this.logoSrc; }, 		
		getProjectName: 		function(){  return this.projectName; },
		getProjectLink: 		function(){  return this.projectLink; },
		getTimeFrame: 			function(){  return this.timeFrame; },		
		getProjectDevelopers: 	function(){  return this.developers; }
	}

	function getProjectHeaderObj( headerDetails ){
		return sectionFactoryUtilities.getSectionObj( headerFunctions, headerDetails );
	}

	return {
		getProjectHeaderObj: getProjectHeaderObj
	}

});