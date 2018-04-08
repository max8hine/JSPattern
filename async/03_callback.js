/* Callback function doesn't mean asynchronous. */
/*
function Foo(a, cb) {
	const param = Math.floor(Math.random() * 20)
	const cbValue = cb(param)
	console.log('Foo.randomValue: ', cbValue)
	console.log('Foo.a: ', a)
}

function Foo2(a, cb) {
	const cbValue = cb(a)
	console.log('Foo2.cbValue: ', cbValue)
	console.log('Foo2.a: ', a)
}

const CallBack = num => num

Foo(2, CallBack)
Foo2(2, CallBack)
*/

/**  Classic Asynchronous Function */
// - Asynchronous Function
const lazyAdd = a => b => a + b
const result = lazyAdd(4) // A Closure, b => a + b, is a callback
console.log(result(6))
// in callback way
const lazyAddCB = (a, cb) => (b) => {
	// Outer Layer Closure, wait for the data of a
	console.log(a)
	console.log(b)
	return cb(a, b)
	// setTimeout(() => cb(1, 6), 2000)
}
const result2 = lazyAddCB(7, (x, y) => x + y)
console.log(result2(2))

// - Synchronous Add Function
const add = (a, b) => a + b
console.log(add(4, 8))

function asyncTask(taskDescription) {
	console.log('before ' + taskDescription)
	setTimeout(function () {
		console.log('this is an async task: ' + taskDescription)
	}, Math.random() * 100)
	console.log('after' + taskDescription)
}

asyncTask('hello word')


