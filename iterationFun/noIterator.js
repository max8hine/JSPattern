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

const number = [5, 4, 9, 2, 1]
let goodSum = 0

number.forEach((num) => {
	goodSum += num
})
const bestSum = number.reduce((total, num) => total + num, 0)
console.log(goodSum, bestSum)
// accumulator, currentValue
number.reduce((a, b) => {
	console.log(a)
	console.log(b)
	console.log(a + b)

	if (b > a) {
		console.log(b)
	} else {
		console.log(a)
	}
	return b
}, 0)

const myFilter = number.filter(isEven => isEven % 2 !== 0)
console.log(myFilter)
number
number.sort()
number



/* Filter() - modify exsiting array
	 Syntax var newArray = arr.filter(callback[, thisArg])
 */

const s = 'It was a  dark and stormy night.'
const words = s.split(/\W+/).filter(word => word.length)
console.log(words)
/* The sort() method sorts the elements of an array in place (In-place algorithm)
	And returns the array
	arr.sort([compareFunction])
 */
const words2 = words.sort((a, b) => a.length + b.length)
words2




const randomFilter = ['A', 'a', '1', '-']
randomFilter.sort()
randomFilter

const objFilter = [{ x: 15, y: 9 }, { x: 8, y: 10 }]
const compare = (a, b) => {
	console.log(a)	
	console.log(b)
	return b.y + a.y
}
objFilter.sort(compare)
objFilter
