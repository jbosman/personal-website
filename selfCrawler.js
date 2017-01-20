let RequestPromise = require('request-promise');

(function selfCrawl(){

	RequestPromise('http://www.bosman.io')
	.then(resp => {
		console.log('selfcrawl succeeded...');
		setInterval( selfCrawl, 1500000);
	})

})();