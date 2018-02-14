import fetch from 'node-fetch'
import co from 'co'

/* Iterators
	An object is an iterator
	when it knows how to access items
	from a collection one at a time,
	while keeping track of its current position within that sequence.

	In JavaScript,
	an iterator is an object that provides a next() method
	which returns the next item in the sequence.
 */

function makeIterator(arr) {
	let nextIndex = 0
	return {
		next: () => (nextIndex < arr.length ?
			{ value: arr[nextIndex++], done: false } :
			{ done: true }),
	}
}

const ite = makeIterator(['yo', 55, 'ya'])

console.log(
	ite.next(),
	ite.next().value,
	ite.next().value,
	ite.next().done,
)

/**
	Generator allow you to define an iterative algorithm
	by writing a single function which can maintain its own state.

	A GeneratorFunction is a special type of function
	that works as a factory for iterators.

	When it is executed
	it returns a new Generator object.
 */

function* foo() {
	const x = yield 'x'
	console.log(x)
	const y = yield 'y'
	console.log(y)
	const z = yield 'z'
	console.log(z)
	return x + y + z
}
const generatorFoo = foo()
console.log(
	generatorFoo.next(),
	generatorFoo.next(8),
	generatorFoo.next(17),
	generatorFoo.next(25),
)

/* Iterables
	An object is iterable if it defines its iteration behavior.
	In order to be iterable, an object must implement the @@iterator method
	meaning that the object must have a property with a Symbol.iterator key
 */
const myIterable = {}
console.log(myIterable)

myIterable[Symbol.iterator] = function* () {
	yield 1
	yield 2
	yield 3
}

console.log(myIterable)

for (const value of myIterable) {
	console.log(value)
}

console.log([...myIterable])

console.log([...'abc'])

const run = (generator) => {
	// 01 Call the generator, if it is and return an iterator
	const iterator = generator()
	// 02 First run, get it going and get an iteration object {value: promise, done: false}
	// But stop at the yield
	const iteration = iterator.next()
	// Promise will be the value of the iteration object
	const promise = iteration.value
	promise.then((response) => {
		// 03 Second run, pass an iteration object to response and the stop at second yield
		const anotherIterator = iterator.next(response)
		// Get the Prmise from the iteration
		const anotherPromise = anotherIterator.value
		// 04 resume from yield, and return the post value
		anotherPromise.then(post => iterator.next(post))
	})
}

// recursive function
function co2(generator) {
	const iterator = generator()
	function iterate(iteration) {
		if (iteration.done) return iteration.value
		const promise = iteration.value
		return promise.then(x => iterate(
			// Always return an iteration object
			iterator.next(x)))
	}
	// First run, to run the recursive function
	return iterate(iterator.next())
}

const URI = 'https://jsonplaceholder.typicode.com/posts/2'


fetch(URI)
	.then(response => response.json())
	.then((post) => {
		console.log(post.title)
		return post.title
	})
	.then((title) => {
		console.log({ Title: title })
	})



co(function* fetchData() {
	const uri = URI
	const response = yield fetch(uri)
	const post = yield response.json()
	const { title } = post
	console.log(title)
	return title
})
	.catch((error) => {
		console.error(error)
		return error
	})
	.then((x) => {
		console.log(x)
		return x
	})

co2(function* fetchData() {
	const uri = URI
	const response = yield fetch(uri)
	const post = yield response.json()
	const { title } = post
	console.log(title)
	return title
})
	.catch((error) => {
		console.error(error)
		return error
	})
	.then((x) => {
		console.log(x)
		return x
	})

