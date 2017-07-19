app.factory( 'weatherAppFactory', () => {

	let headerDetails = {
		projectName:		"Weather App",
		logoId:				"weather-app",
		logoSrc:  			"js/projects/directives/sections/weather-app/weather-app.png",
		projectLink:		"https://floating-wave-81995.herokuapp.com", 
		timeFrame: 			"Jul '17 - Present",
		developers: 		[	{ name: "Joe Bosman" } ]
	}

	let collapseCtrlDetails = {
		title: 			'App Info',
		target: 		'SL_info',
	};

	let sectionDetails = {
		gitHubLink: "https://github.com/jbosman/weather-app"
	}

	return {
		headerDetails: 			headerDetails,
		collapseCtrlDetails: 	collapseCtrlDetails,
		sectionDetails: 		sectionDetails
	}

});