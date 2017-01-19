app.factory( 'contactFactory', () => {
	let showEmail = false;

	function toggleEmail(){
		showEmail = !showEmail;
	}

	function displayEmail(){
		return showEmail;
	}

	return {
		toggleEmail: toggleEmail,
		displayEmail: displayEmail
	}

});