/* Customized error message */

function Err(message, fileName) {
	this.message = message
	this.fileName = fileName
}
Err.prototype = new Error()

// try {
// 	throw new Err('404', 'Oops, Error occur', 'tryCatch.js')
// } catch (error) {
// 	console.log(error)
// }

/* END */

// try {
// 	test()
// } catch (e) {
// 	console.log(e)
// } finally {
// 	console.log('done')
// }

function test1() {
	let reject
	let resolve
	try {
		resolve = 2
	} catch (err) {
		reject = err
	}
	if (reject) {
		return reject
	}
	return resolve
}

console.log(test1())