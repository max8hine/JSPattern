const parallel = require('async/parallel')
async function party(value) {
	const action = await value
	return action
}

const result = party('poop')
result.then(res => console.log(res))

console.log('I will')

parallel([
	function (callback) {
		setTimeout(function () {
			callback(null, 'one');
		}, 200);
	},
	function (callback) {
		setTimeout(function () {
			callback(null, 'two');
		}, 100);
	}
],
	// optional callback
	function (err, results) {
		console.log(results)
	});
// const notAarry = [1]

// const callback = (value) => {
// 	console.log(value)
// }
// const pushArray = (value, callback) => {
// 	console.log(notAarry)
// 	notAarry.push(value)
// 	if (typeof callback === 'function') {
// 		callback(notAarry)
// 	}
// }

// pushArray(2, callback)


// const After2Secs = v =>
// 	new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve(v)
// 		}, 2000)
// 	})

// async function add1(x) {
// 	const a = After2Secs(20)
// 	let b = After2Secs(30)
// 	return x + (await a) + (await b)
// }
// add1(10)
// 	.then((v) => {
// 		console.log(v)
// 	})
// 	.catch(e => console.log(e))

// // Example 2
// const doTask = ({ id, success = true, time = 100 }) =>
// 	new Promise(((resolve, reject) => {
// 		setTimeout(function() {
// 			let msg;
// 			if (success) {
// 				msg = `thing ${id} is done`;
// 				console.log(msg);
// 				resolve(msg);
// 			} else {
// 				msg = `thing ${id} failed`;
// 				console.error(msg);
// 				reject(msg);
// 			}
// 		}, time);
// 	}))

// async function doSerialTing() {
// 	await doTask({ id: 1 })
// 	await doTask({ id: 2, time: 5000 })
// 	// code will be paused here.
// 	await doTask({ id: 3, time: 500 })
// }

// doSerialTing()

// async function doParallelTing() {
// 	const [res1, res2, res3] = await Promise.all([
// 		doTask({ id: 1 }),
// 		doTask({ id: 2, time: 1000 }),
// 		doTask({ id: 3 }),
// 	])
// 	console.log(res1, res2, res3)
// }

// doParallelTing()

// async function doTasks() {
// 	try {
// 		await doTask({ id: 1, success: false })
// 		await doTask({ id: 2 })
// 	}catch (e) {
// 		console.log(`error: ${e}`)
// 	}
// }

// doTasks()

// async function doTasks() {
//   await doTask({id:1, success:false})
//   await doTask({id:2})
// }

// doTasks().catch((e)=>{
//    console.log(`error: ${e}`)
// })
