app.factory( 'fullstackFactory', () => {

	let headerDetails = {
		logoId:			"fullstackLogo",
		logoSrc : 		"js/background/directives/sections/fullstack/fullstack-logo.jpg",
		institution:	"Fullstack Academy",
		timeFrame: 		"July '16 - Oct '16",
		location: 		"New York, NY",
	};

	let collapseCtrlDetails = {
		title: 			'Experience',
		target: 		'fullstack',
		isCollapsed: 	{ value: true }
	};

	return {
		headerDetails: 			headerDetails,
		collapseCtrlDetails: 	collapseCtrlDetails
	}

});