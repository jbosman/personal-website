app.factory( 'wpiFactory', () => {

	// Header information
	let logoId =		"wpiLogo";
	let logoSrc =  		"js/background/directives/sections/wpi/wpi-logo.png";
	let institution =	"Worcester Polytechnic Institute";
	let timeFrame = 	"Sept '04 - June '08";
	let location = 		"Worcester, MA";

	let header = {
		getLogoId: 		() => logoId,
		getLogoSrc: 	() => logoSrc,  		
		getInstitution: () => institution, 	
		getTimeFrame: 	() => timeFrame, 		
		getLocation: 	() => location		
	}

	let title = 'Degree';
	let showCollapse = true;
	let target = 'wpiDegree';

	let collapseCtrl = {
		getTitle: () => title,
		showCollapse: () => showCollapse,
		toggleCollapse: () => { showCollapse= !showCollapse; },
		getDataTarget: () => '#' + target,
		getTargetID: () => target
	}

	let courses = [
				{ id: 'ECE4902', name: 'Analog Integrated Circuit Design'},
				{ id: 'ECE3803', name: 'Microprocessor System Design'},
				{ id: 'ECE3801', name: 'Advanced Logic Design'},
				{ id: 'ECE3503', name: 'Power Electronics'},
				{ id: 'ECE3204', name: 'Microelectronics 2'},
				{ id: 'ECE2801', name: 'Found. of Embedded Computer Systems'},
				{ id: 'ECE2311', name: 'Continious Time and Signal Analysis'},
				{ id: 'ECE2201', name: 'Bioelectric Foundations'},
				{ id: 'ECE2112', name: 'Electromagnetic Fields'},
				{ id: 'ECE2111', name: 'Physical Principles of ECE Applications'},	
			];

	return {
		header: header,
		collapseCtrl: collapseCtrl,
		getCourses: () => courses,
	}

});