(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('make-set')) :
	typeof define === 'function' && define.amd ? define(['make-set'], factory) :
	(global.setsEqual = factory(global.makeSet));
}(this, function (makeSet) { 'use strict';

	makeSet = 'default' in makeSet ? makeSet['default'] : makeSet;

	function setsEqual (left, right) {
		left = makeSet(left);
		right = makeSet(right);
		for (let value of left) {
			if (!right.has(value)) {
				return false;
			}
		}
		for (let value of right) {
			if (!left.has(value)) {
				return false;
			}
		}
		return true;
	}

	return setsEqual;

}));