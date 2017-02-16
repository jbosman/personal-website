app.factory( 'plexusFactory', () => {

	let headerDetails = {
		logoId:			"plexusLogo",
		logoSrc : 		"js/background/directives/sections/plexus/plexus-logo.jpg",
		institution:	"Plexus Corp",
		timeFrame: 		"June '08 - July '16",
		location: 		"Louisville, CO",
	};

	let collapseCtrlDetails = {
		title: 		'Experience',
		target: 	'plexusExperience',
		isCollapsed: true
	};

	return {
		headerDetails: headerDetails,
		collapseCtrlDetails: collapseCtrlDetails
	}

});