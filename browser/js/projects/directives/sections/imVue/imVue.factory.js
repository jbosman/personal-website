app.factory( 'imVueFactory', () => {

	// Header information
	let logoId =			"imVueLogo";
	let logoSrc =  			"js/projects/directives/sections/imVue/imVueLogo.jpeg";
	let projectName =		"ImVue";
	let projectLink =		"https://radiant-cliffs-28831.herokuapp.com";
	let projectGitLink = 	"https://github.com/clockwrk/ImVue" 
	let timeFrame = 		"Oct '16 - Nov '16";
	let developers = 		[	{ name: "Joe Bosman" }, 
								{ name: 'Jose Renteria'}, 
								{ name: 'Han Cho'},
								{ name: 'Danny Kearney'}
							];

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
	let target = 'imVueInfo';

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