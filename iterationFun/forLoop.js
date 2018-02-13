/*
	[Caveat] Don't use iterators. Prefer JS's higher-oder functions.
	More Info: https://github.com/airbnb/javascript#iterators--nope

	For...Of Statement creates a loop iterating over iterable objects
		for (variable of iterable) {statement}
	For...in Statement iterates over the enumerable properties of an object
		for (key in object)
 */

// Creating a bunch of objects

const arr = [3, 4, 5]
arr.greeting = 'hello'
const obj = { a: 'a1', b: 'b1', c: 'c1' }

function* iterableFunc() {
	yield 1
	yield 2
}

console.log(iterableFunc())
// 1. Understanding what is the Enumerable Properties
console.log(
	arr,
	Object.prototype.hasOwnProperty.call(arr, 2),
	Object.prototype.hasOwnProperty.call(arr, 3),
	Object.prototype.hasOwnProperty.call(arr, 'greeting'),
	arr.length,
	arr[2],
	arr[3],
	arr.greeting,
)

console.log('greeting' in arr);
console.log(2 in arr);

let arobg = Array.from('1234')
console.log(arobg);






for (const v of arr) { console.log(v) }

for (const v in arr) {
	if ({}.hasOwnProperty.call(arr, v)) {
		console.log(arr[v])
	}
}

for (const i in obj) {
	if ({}.hasOwnProperty.call(obj, i)) {
		console.log(i)
	}
}
for (const i in obj) {
	if ({}.hasOwnProperty.call(obj, i)) {
		console.log(obj[i])
	}
}

const objKey = object => Object.keys(object)
console.log(objKey(obj))


const arr1 = [1, 2, 3, 4, 5]

for (const o of iterableFunc()) {
	console.log(o)
	break
	// closes iterator, triggers return
}


const arrPush = []
for (const o of arr1) {
	arrPush.push(o)
}
console.log(arrPush)

