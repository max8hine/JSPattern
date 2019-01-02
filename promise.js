function timeout(duration) {
	return new Promise(function (resolve, reject) {
		if (!duration) return reject(new Error('missing duration value'))
		return setTimeout(() => resolve('success'), duration)
	})
}

function logResolve(v) { console.log(v) }
function logReject(err) { console.log(`Error: ${err}`) }

timeout(1000)
	.then(() => Promise.reject(new Error('en')))
	.catch((e) => { console.log('cached an error: ', e) })

// timeout(10)
// 	.then(logResolve)
// 	.catch(logReject)
Promise.resolve()
	.then(() => timeout(10))
	.then(() => timeout(10000))
	.catch(logReject)
	.finally(() => { console.log('DONE') })

/* END */
