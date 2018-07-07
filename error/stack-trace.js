/*
1. Operational Error
2. Programming Error
*/

function a() {
	//  call stack here is [a]
	console.log('Start a - 1')
	b()
	console.log('b done - 5')
}

function b(x) {
	// call stack here is [b, a]
	// throw 'Shut down Node with uncaught error'
	try {
		console.log('Start b - 2')
		c()
	} catch (e) {
		console.log(e.stack, 'e.stack')
		console.log('c done - 4, uncaught an error')
	}
}

function c() {
	// call stack here is [c, b, a]
	console.log('start c - 3')
	throw new Error('Boom')
}
process.on('uncaughtException', (err) => {
	console.log('Uncaught exception! Oh, no!')
	console.error(err)
	process.exit(1)
})


console.log('Start...')
a()
console.log('a done - 6')
