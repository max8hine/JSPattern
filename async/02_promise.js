import fs from 'fs'
import path from 'path'

const readFilePromise = fileName => new Promise((resolve, reject) => {
	fs.readFile(fileName, (err, data) => {
		if (err) reject(err)
		else resolve(data.toString())
	})
})

// Chain async actions

const fullFileName1 = path.resolve(__dirname, '../data/data1.json')
const fullFileName2 = path.resolve(__dirname, '../data/data2.json')
const result1 = readFilePromise(fullFileName1)
const result2 = readFilePromise(fullFileName2)

result1.then(
	function onFulfillment (result) {
		console.log(result)
		return result
	},
	function onRejection (error) {
		console.log(error)
		return error
	},
).then(v => {
	console.log(v)
	return v
}).catch(e => {
	console.log(e)
	return e
})

result1
	.then( v => {
		console.log(v)
		return v
	})
	.catch( e => {
		console.log(e)
		return e
	})
	.then( v => {
		console.log(v)
		return v
	})
	.catch( e => {
		console.log(e)
		return e
	})


result2.then((data) => {
	console.log(data)
	return result1
}).then((data) => {
	console.log(data)
}).catch((err) => {
	console.log(err.stack)
})

const allP = Promise.all([result1, result2]).then((dataList) => {
	const a = dataList.map(x => {
		console.log(x)
		return x
	})
	console.log(a)
})

function artificialPromise() {
	return new Promise((resolve, reject) => {
		resolve({
			action: 'hello',
			payload: 'world',
			user: 'max'
		})
		// reject({ message: 'artificial error message', code: 41 })
	})
}

artificialPromise()
	.then((value) => {
		if (!value.user) return Promise.reject('User not found')
		return function() {
			return value
		}
	})
	.catch((error) => {
		console.log(error)
		error ? error : 'make an error'
		return error
	})
	.then((value) => {
		console.log(value())
	})
