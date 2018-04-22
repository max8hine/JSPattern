import https from 'https'
import request from 'request'
import fetch from 'node-fetch'
import axios from 'axios'


const url = 'https://randomuser.me/api/'
// const url = "https://maps.googleapis.com/maps/api/geocode/json?address=Florence"

/**
 * Node Native Solution
 * @argument(url, callback)
 * https://nodejs.org/api/https.html
 */
https.get(url, (res) => {
	res.setEncoding('utf8')
	let body = ''
	res.on('data', (data) => {
		body += data
	})
	res.on('end', () => {
		body = JSON.parse(body)
		const results = body.results[0]
		console.log(results.name)
	})
})

/**
 * Request Module
 */

request.get(url, (err, res, body) => {
	const data = JSON.parse(body)
	console.log(data.results[0].name)
})

/**
 * Node Fetch
 */
fetch(url)
	.then((res) => {
		if (res.status !== 200) return 'Error'
		res.json().then((data) => {
			console.log(data.results[0].name)
		})
		return res
	})
	.catch((err) => {
		throw err
	})

/**
 * axios
 */

axios.get(url)
	.then((res) => {
		if (res.status !== 200) return 'Error'
		const { data } = res
		console.log(data.results[0].name)
		return data
	})
