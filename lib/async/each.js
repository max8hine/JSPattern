const each = require('async/each')

/** async.each(coll, iteratee, callback_opt)
 * Applies the function iteratee to each item in coll, in parallel.
 * The iteratee is called with an item from the list, and a callback for when it has finished.
 * If the iteratee passes an error to its callback,
 * the main callback (for the each function) is immediately called with the error.
 *
 * Note, that since this function applies iteratee to each item in parallel,
 * there is no guarantee that the iteratee functions will complete in order.
*/

// async.each feels like filter but has more controls.

const books = ['Jane Eyre', 'The Stranger', 'Oliver Twist', 'Stranger in a Strange Land', 'Rebecca']
const newBooks = []
const processingRecorder = []
const errorRecorder = []
const callbackOnCalled = []
let errorCounter = 0

const iteratee = (file, callback) => {
	processingRecorder.push(`<${file}>`)
	if (file.length > 10) {
		errorCounter += 1
		errorRecorder.push(file)
		callback(`<${file}> name too long`)
	} else {
		newBooks.push(file)
		callback() // successful call
	}
}

const callback = (err) => {
	if (err) {
		callbackOnCalled.push(err)
	} else {
		console.log('All files have been processed successfully')
	}
}

each(books, iteratee, callback)

console.log(newBooks)
console.log(processingRecorder)
console.log(errorRecorder)
console.log(errorCounter)
console.log(callbackOnCalled)
