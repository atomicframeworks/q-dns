QNS
=========

A small library that wraps Node.js DNS with Q promises.

## Installation

    npm install qns --save

## Usage

    var qns = require('qns');

	qns.lookup('www.google.com').then(function (results) {
		console.dir(results);
	});

## Tests

    npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release