import fs from 'fs'
import path from 'path'

const readFilePromise = fileName => new Promise((resolve, reject) => {
	fs.readFile(fileName, (err, data) => {
		// err ? reject(err) : resolve(data.toString)
		if (err) {
			reject(err)
		} else {
			resolve(data.toString())
		}
	})
})

// Chain ansyc actions

const fullFileName1 = path.resolve(__dirname, '../data/data1.json')
const fullFileName2 = path.resolve(__dirname, '../data/data2.json')
const result1 = readFilePromise(fullFileName1)
const result2 = readFilePromise(fullFileName2)

result2.then((data) => {
	console.log(data)
	return result1
}).then((data) => {
	console.log(data)
}).catch((err) => {
	console.log(err.stack)
})

Promise.all([result1, result2]).then((datas) => {
	console.log(datas[0])
	console.log(datas[1])	
})
