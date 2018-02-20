/* https://github.com/airbnb/javascript#iterators-and-generators
	@airBnB js style guide
	#11.1 Don’t use iterators.
	Prefer JavaScript’s higher-order functions instead of loops like for-in or for-of.
	eslint: no-iterator no-restricted-syntax

	[Why] This enforces our immutable rule.
	Dealing with pure functions that return values is easier to reason about than side effects.
	[Use] map() / every() / filter() / find() / findIndex() / reduce() / some() / ...
	To iterate over arrays
	& Object.keys() / Object.values() / Object.entries()
	To produce arrays so you can iterate over objects.
 */

const number = [1, 2, 3, 4, 5]
let sum = 0
number.forEach((num) => {
	sum += num
})
console.log(sum)
