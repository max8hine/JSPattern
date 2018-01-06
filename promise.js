// reject is callback function that get carried out after the promise is rejected.

// throw will prioritise completing the resolver function(this function will run immediately).
// 

function timeout(duration) {
	return new Promise(function(resolve) {
		setTimeout(resolve, duration);
	});
}

timeout(1000)
	.then(function(_, reject) {
		reject('en')
	})
	.catch(function(e) {
		console.log('catched an error: ',e);
	});

const newPromise = () => new Promise(function(resolve, reject) {
	false ? resolve('resolve some value') : reject('reject an error')
})

newPromise().then(v => console.log('there is ', v)).catch(e=>console.log('there is ', e));