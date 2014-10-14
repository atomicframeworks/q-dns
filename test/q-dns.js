var assert = require('chai').assert,
	dns = require('dns'),
	qns = require('../index.js');
	
describe('# Has same methods as DNS', function() {
	
	it('Has lookup function', function () {
		assert.isFunction(qns.lookup);
	});
	
	it('Has resolve function', function () {
		assert.isFunction(qns.resolve);
	});
	
	it('Has resolve4 function', function () {
		assert.isFunction(qns.resolve4);
	});
	
	it('Has resolve6 function', function () {
		assert.isFunction(qns.resolve6);
	});
	
	it('Has resolveMx function', function () {
		assert.isFunction(qns.resolveMx);
	});
	
	it('Has resolveTxt function', function () {
		assert.isFunction(qns.resolveTxt);
	});
	
	it('Has resolveSrv function', function () {
		assert.isFunction(qns.resolveSrv);
	});
	
	it('Has resolveNs function', function () {
		assert.isFunction(qns.resolveNs);
	});
	
	it('Has resolveCname function', function () {
		assert.isFunction(qns.resolveCname);
	});
	
	it('Has reverse function', function () {
		assert.isFunction(qns.reverse);
	});
	
});