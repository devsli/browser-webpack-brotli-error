try {
	const brotli = require('brotli');
	console.log(brotli);

	document.getElementById('caption').innerHTML = 'It works!';
} catch (e) {
	document.getElementById('status').innerHTML = e.toString();
	throw e;
}
