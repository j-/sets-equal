import makeSet from 'make-set';

/**
 * Check if two sets contain all the same items.
 * @param {Iterable|Array|Set} left Iterable, Array or Set
 * @param {Iterable|Array|Set} right Iterable, Array or Set
 * @return {Boolean} False if any items are in one set but not the other.
 */
export default function setsEqual (left, right) {
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
