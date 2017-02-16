app.factory( 'nbaPickemFactory', () => {

	// Header information
	let headerDetails = {
		logoId:				"nbaPickemLogo",
		logoSrc:  			"js/projects/directives/sections/nbaPickem/jumpman-logo-white-bg-rounded.png",
		projectName:		"NBA Pickem",
		projectGitLink: 	"https://github.com/jbosman/NBA_Pickem", 
		timeFrame: 			"Oct '16 - Present",
		developers: 		[{ name: "Joe Bosman" }],		
	}

	let collapseCtrlDetails = {
		title: 	'App Info',
		target: 'nbaPickemInfo',
	}

	let sectionDetails = {
		gitHubLink: "http://nba-pickem.herokuapp.com",
	}

	return {
		headerDetails: 			headerDetails,
		collapseCtrlDetails: 	collapseCtrlDetails,
		sectionDetails: 		sectionDetails
	}

});