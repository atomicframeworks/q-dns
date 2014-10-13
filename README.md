Q-DNS
=========

A small library that wraps Node.js DNS with Q promises.  

Q-DNS offeres the same Node.js [DNS](http://nodejs.org/api/dns.html) methods conveniently wrapped in Q promises.

## Installation

    npm install q-dns --save

## Usage

    var qdns = require('q-dns');

	qdns.lookup('www.google.com').then(function (results) {
		console.dir(results);
	});

## Tests

    npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release