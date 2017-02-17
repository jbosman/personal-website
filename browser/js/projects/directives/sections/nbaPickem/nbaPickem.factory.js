app.factory( 'nbaPickemFactory', () => {

	// Header information
	let headerDetails = {
		logoId:			"nbaPickemLogo",
		logoSrc:  		"js/projects/directives/sections/nbaPickem/jumpman-logo-white-bg-rounded.png",
		projectName:	"NBA Pickem", 
		projectLink: 	"http://nba-pickem.herokuapp.com", 
		timeFrame: 		"Oct '16 - Present",
		developers: 	[{ name: "Joe Bosman" }],		
	}

	let collapseCtrlDetails = {
		title: 	'App Info',
		target: 'nbaPickemInfo',
	}

	let sectionDetails = {
		gitHubLink: "https://github.com/jbosman/NBA_Pickem",
	}

	return {
		headerDetails: 			headerDetails,
		collapseCtrlDetails: 	collapseCtrlDetails,
		sectionDetails: 		sectionDetails
	}

});