app.factory( 'sectionFactoryUtilities', function() {

	function getSectionObj( headerFunctions, sectionDetails ){
		// Attach collapse template functions
		let newSectionObj = Object.create( headerFunctions );
		// Attach new obj properites from sectionDetials
		Object.keys( sectionDetails ).forEach((key) => {
			newSectionObj[key] = sectionDetails[key];
		})

		return newSectionObj;
	}

	return {
		getSectionObj: getSectionObj
	}

});