app.factory( 'fullstackFactory', () => {

	// Header information
	let logoId =		"fullstackLogo";
	let logoSrc =  		"js/background/images/fullstack-logo.jpg";
	let institution =	"Fullstack Academy";
	let timeFrame = 	"July '16 - Oct '16";
	let location = 		"New York, NY";

	let header = {
		getLogoId: 		() => logoId, 
		getLogoSrc: 	() => logoSrc,  		
		getInstitution: () => institution, 	
		getTimeFrame: 	() => timeFrame, 		
		getLocation: 	() => location		
	}

	let title = 'Experience';
	let showCollapse = true;
	let target = 'fullstack';

	let collapseCtrl = {
		getTitle: () => title,
		showCollapse: () => showCollapse,
		toggleCollapse: () => { showCollapse= !showCollapse; },
		getDataTarget: () => '#' + target,
		getTargetID: () => target
	}

	return {
		header: header,
		collapseCtrl: collapseCtrl
	}

});