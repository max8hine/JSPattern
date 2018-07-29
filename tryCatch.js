/* Customized error message */

function Err(message, fileName) {
	this.message = message
	this.fileName = fileName
}
Err.prototype = new Error()

try {
	throw new Err('404', 'Oops, Error occur', 'tryCatch.js')
} catch (error) {
	console.log(error)
}

/* END */

try {
	test()
} catch (e) {
	console.log(e)
} finally {
	console.log('done')
}

function test1() {
	let reject
	let resolve
	try {
		resolve = 2
		throw new Error('Error')
	} catch (err) {
		reject = err
	}
	if (reject) return reject
	return resolve
}

function test2() {
	var i = 0
	try {
		return i += 1
	} catch (e) {
		return i -= 1
	} finally {
		return 5
	}
}

function test3() {
	var i = 0
	try {
		return i += 1
	} catch (e) {
		return i -= 1
	} finally {
		return 5
	}
}

console.log(test1())
console.log(test2())
console.log(test3())
