app.factory('bgHeaderFactory', function( sectionFactoryUtilities ){

	let headerFunctions = {
		// Header Functions
		getLogoId: 		function() { return this.logoId; },
		getLogoSrc: 	function() { return this.logoSrc; },
		getInstitution: function() { return this.institution; },
		getTimeFrame: 	function() { return this.timeFrame; },
		getLocation: 	function() { return this.location; },
	}

	function getHeaderInfoObj( headerDetails ){
		return sectionFactoryUtilities.getSectionObj( headerFunctions, headerDetails);
	}

	return {
		getHeaderInfoObj: getHeaderInfoObj
	}

});