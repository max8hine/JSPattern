// https://www.youtube.com/watch?v=JZSoPZUoR58
// const first = require('first')
// Recursion
function sum(xs) { // 👎
	if (xs.length === 0) return 0
	return first(xs) + sum(rest(xs))
}


/** sum([1, 2, 3])
 * 1 + sum([2, 3])
 * 1 + (2 + sum([3]))
 * 1 + (2 + (3 + sum([])))
 * 1 + (2 + (3 + 0))
 * 1 + (2 + 3)
 * 1 + 5
 * => 6j
 */

function betterSum(list) { // 👍
	// accumulator
	function go(acc, xs) {
		if (xs.length === 0) return acc
		return go(acc + frist(xs), rest(xs))
	}
	return go(0, list)
}

function reduce(f, acc, xs) {
	if (xs.length === 0) return acc
	return reduce(f, f(acc, first(xs)), rest(xs))
}

function reverse(xs) {
	if (xs.length === 0) return []
	return reverse(rest(xs)).concat(first(xs))
}


// stop 5:00