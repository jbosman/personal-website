app.factory( 'nbaPickemFactory', () => {

	// Header information
	let logoId =			"nbaPickemLogo";
	let logoSrc =  			"js/projects/directives/sections/nbaPickem/jumpman-logo-white-bg-rounded.png";
	let projectName =		"NBA Pickem";
	let projectLink =		"https://nba-pickem.herokuapp.com";
	let projectGitLink = 	"https://github.com/jbosman/NBA_Pickem" 
	let timeFrame = 		"Oct '16 - Present";
	let developers = 		[{ name: "Joe Bosman" }];

	let header = {
		getLogoId: 				() => logoId, 
		getLogoSrc: 			() => logoSrc,  		
		getProjectName: 		() => projectName,
		getProjectLink: 		() => projectLink,
		getProjectGitLink: 		() => projectGitLink,
		getTimeFrame: 			() => timeFrame, 		
		getProjectDevelopers: 	() => developers		
	}

	let title = 'App Info';
	let showCollapse = true;
	let target = 'nbaPickemInfo';

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