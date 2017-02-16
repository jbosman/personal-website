app.factory( 'imVueFactory', () => {

	let headerDetails = {
		projectName:		"ImVue",
		logoId:				"imVueLogo",
		logoSrc:  			"js/projects/directives/sections/imVue/imVueLogo.jpeg",
		projectLink:		"https://radiant-cliffs-28831.herokuapp.com", 
		timeFrame: 			"Oct '16 - Nov '16",
		developers: 		[	{ name: "Joe Bosman" }, 
								{ name: 'Jose Renteria'}, 
								{ name: 'Han Cho'},
								{ name: 'Danny Kearney'}
							]
	}

	let collapseCtrlDetails = {
		title: 			'App Info',
		target: 		'imVueInfo',
	};

	let sectionDetails = {
		gitHubLink: "https://github.com/clockwrk/ImVue"
	}

	return {
		headerDetails: 			headerDetails,
		collapseCtrlDetails: 	collapseCtrlDetails,
		sectionDetails: 		sectionDetails
	}

});