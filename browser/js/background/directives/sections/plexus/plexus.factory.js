app.factory( 'plexusFactory', () => {

	// Header information
	let logoId =		"plexusLogo";
	let logoSrc =  		"js/background/directives/sections/plexus/plexus-logo.jpg";
	let institution =	"Plexus Corp";
	let timeFrame = 	"June '08 - July '16";
	let location = 		"Louisville, CO";

	let header = {
		getLogoId: 		() => logoId,
		getLogoSrc: 	() => logoSrc,  		
		getInstitution: () => institution, 	
		getTimeFrame: 	() => timeFrame, 		
		getLocation: 	() => location		
	}

	let title = 'Experience';
	let showCollapse = true;
	let target = 'plexusExperience';

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