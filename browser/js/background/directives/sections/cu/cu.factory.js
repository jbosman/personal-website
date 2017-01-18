app.factory( 'cuFactory', () => {

	// Header information
	let logoId =		"cuLogo";
	let logoSrc =  		"js/background/directives/sections/cu/cu-logo.jpg";
	let institution =	"University of Colorado";
	let timeFrame = 	"Jan '12 - Dec '13";
	let location = 		"Boulder, CO";

	let header = {
		getLogoId: 		() => logoId, 
		getLogoSrc: 	() => logoSrc,  		
		getInstitution: () => institution, 	
		getTimeFrame: 	() => timeFrame, 		
		getLocation: 	() => location		
	}

	let title = 'Courses';
	let showCollapse = true;
	let target = 'cuCourseWork';

	let collapseCtrl = {
		getTitle: () => title,
		showCollapse: () => showCollapse,
		toggleCollapse: () => { showCollapse= !showCollapse; },
		getDataTarget: () => '#' + target,
		getTargetID: () => target
	}

	let courses = [
				{ id: 'CSCI2270', 
					name: 'Data Structures',  
					date: 'Jan - May \'12', 
					desc: 'Studied data abstractions (e.g., stacks, queues, lists, trees) and their representation techniques (e.g., linking, arrays). This course introduced concepts used in algorithm design and analysis including criteria for selecting data structures to fit their applications.' },
				{ id: 'CSCI2400', 
					name: 'Computer Systems',  
					date: 'Jan - May \'13', 
					desc: 'Studied how programs are represented and executed by modern computers, including low-level machine representations of programs and data, and how computer components and the memory hierarchy influence performance.' },
				{ id: 'CSCI2824', 
					name: 'Discrete Structures',  
					date: 'Aug - Dec \'13', 
					desc: 'Topics include set theory, Boolean algebra, functions and relations, graphs, propositional and predicate calculus, proofs, mathematical induction, recurrence relations, combinatorics, discrete probability. Focuses on examples based on diverse applications of computer science.' }
			];

	return {
		header: header,
		collapseCtrl: collapseCtrl,
		getCourses: () => courses,
	}

});