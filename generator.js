import fetch from 'node-fetch';
// import co from 'co';



function* foo() {
	let x = yield 'plz give me a value for x'
	console.log(x);
	let y = yield 'plz give me a value for y'
	let z = yield 'plz give me a value for z'
	return x + y + z
}
let generatorFoo = foo();
console.log(
	generatorFoo.next(),
	// generatorFoo.next(8),
	// generatorFoo.next(17),
	// generatorFoo.next(25)
)

const URI = 'https://jsonplaceholder.typicode.com/posts/1'
// Promise
/*
fetch(URI)
	.then(response => response.json())
	.then(post => post.title)
	.then(x => console.log('Title: ', x))
 */

const run = generator => {
	// 01 Call the generator, if it is and return an iterator
	const iterator = generator()
	// 02 First run, get it going and get an iteration object {value: promise, done: false}
	// But stop at the yield
	const iteration = iterator.next()
	// Promise will be the value of the iteration object
	const promise = iteration.value
	promise.then(response => {
		// 03 Second run, pass an iteration object to response and the stuop at second yield
		const anotherIterator = iterator.next(response);
		// Get the Prmise from the iteration
		const anotherPromise = anotherIterator.value
		// 04 resume from yield, and return the post value
		anotherPromise.then(post => iterator.next(post))
	})
}
// recursive function
function co(generator) {
	const iterator = generator()
	function iterate(iteration) {
		if(iteration.done) return iteration.value
		const promise = iteration.value
		return promise.then(x => iterate(
			// Always return an iteration object
			iterator.next(x)
			))
	}
	// First run, to run the recursive function
	return iterate(iterator.next())
}
co(function* fetchData() {
	const uri = URI
	const response = yield fetch(uri)
	const post = yield response.json()
	const title = post.title
	return title
})
.catch(error => console.error(error.stack))
.then(x => console.log('run resulted in ', x))
