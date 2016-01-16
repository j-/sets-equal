const setsEqual = require('../dist/sets-equal');
const assert = require('assert');

describe('setsEqual', function () {
	const A = Symbol('A');
	const B = Symbol('B');
	const C = Symbol('C');

	it('is a function', function () {
		assert.equal(typeof setsEqual, 'function');
	});

	it('returns true for two empty sets', function () {
		const left = new Set();
		const right = new Set();
		assert.equal(setsEqual(left, right), true);
	});

	it('returns true for a set with a single item', function () {
		const left = new Set([A]);
		const right = new Set([A]);
		assert.equal(setsEqual(left, right), true);
	});

	it('returns true for an array with a single item', function () {
		const left = [A];
		const right = [A];
		assert.equal(setsEqual(left, right), true);
	});

	it('returns true for two ordered sets', function () {
		const left = new Set([A, B, C]);
		const right = new Set([A, B, C]);
		assert.equal(setsEqual(left, right), true);
	});

	it('returns true for two ordered arrays', function () {
		const left = new Set([A, B, C]);
		const right = new Set([A, B, C]);
		assert.equal(setsEqual(left, right), true);
	});

	it('returns true for two unordered sets', function () {
		const left = new Set([A, B, C]);
		const right = new Set([C, A, B]);
		assert.equal(setsEqual(left, right), true);
	});

	it('returns true for two unordered arrays', function () {
		const left = [A, B, C];
		const right = [C, A, B];
		assert.equal(setsEqual(left, right), true);
	});

	it('can compare a set to an array', function () {
		const left = new Set([A, B, C]);
		const right = [C, A, B];
		assert.equal(setsEqual(left, right), true);
	});

	it('returns true for the same set twice', function () {
		const set = new Set([A, B, C]);
		assert.equal(setsEqual(set, set), true);
	});

	it('returns true for the same array twice', function () {
		const arr = [A, B, C];
		assert.equal(setsEqual(arr, arr), true);
	});

	it('returns false for incomplete sets', function () {
		const left = new Set([A, B, C]);
		const right = new Set([A, B]);
		assert.equal(setsEqual(left, right), false);
	});

	it('returns false for different sets', function () {
		const left = new Set([A, B]);
		const right = new Set([B, C]);
		assert.equal(setsEqual(left, right), false);
	});
});
