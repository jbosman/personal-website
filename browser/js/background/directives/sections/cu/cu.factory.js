app.factory( 'cuFactory', () => {

	let headerDetails = {
		logoId:			"cuLogo",
		logoSrc : 		"js/background/directives/sections/cu/cu-logo.jpg",
		institution:	"University of Colorado",
		timeFrame: 		"Jan '12 - Dec '13",
		location: 		"Boulder, CO",
	};

	let collapseCtrlDetails = {
		title: 			'Courses',
		target: 		'cuCourseWork',
	};

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
		headerDetails: 			headerDetails,
		collapseCtrlDetails: 	collapseCtrlDetails,
		getCourses: 			() => courses,
	}

});