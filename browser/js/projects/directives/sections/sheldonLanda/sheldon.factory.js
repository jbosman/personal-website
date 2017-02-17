app.factory( 'sheldonFactory', () => {

	let headerDetails = {
		projectName:		"Sheldon Landa",
		logoId:				"SL_Logo",
		logoSrc:  			"js/projects/directives/sections/sheldonLanda/SheldonWallLean.jpg",
		projectLink:		"http://www.sheldonlanda.com/", 
		timeFrame: 			"Jan '17 - Present",
		developers: 		[	{ name: "Joe Bosman" } ]
	}

	let collapseCtrlDetails = {
		title: 			'Freelance Work',
		target: 		'SL_info',
	};

	let sectionDetails = {
		gitHubLink: "https://github.com/jbosman/sheldonLandaPS"
	}

	return {
		headerDetails: 			headerDetails,
		collapseCtrlDetails: 	collapseCtrlDetails,
		sectionDetails: 		sectionDetails
	}

});