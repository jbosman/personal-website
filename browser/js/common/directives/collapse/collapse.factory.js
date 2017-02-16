app.factory( 'collapseFactory', function() {
	
	// Collapse Control Functions
	let collapseFunctions = {
		getTitle: 		function() { return this.title; },
		showCollapse: 	function() { return this.isCollapsed.value; },
		toggleCollapse: function() { this.isCollapsed.value = !this.isCollapsed.value; },
		getDataTarget: 	function() { return '#' + this.target; },
		getTargetID: 	function() { return this.target }
	};

	function getCollapseObj( title, target){
		// Attach collapse template functions
		let newCollapseObj = Object.create( collapseFunctions );
		// Attach new obj properites
		newCollapseObj.title = title;
		newCollapseObj.target = target;
		newCollapseObj.isCollapsed = { value: true };

		return newCollapseObj;
	}

	return {
		getCollapseObj: getCollapseObj
	}
});