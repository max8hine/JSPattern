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
	.then(async () => {
		try {
			const result = await timeout()
			return result
		} catch (e) { throw e }
	})
	.then((v) => {
		console.log(v)
		return v
	})
	.catch(logReject)
	.finally(() => { console.log('DONE') })

/* END */
