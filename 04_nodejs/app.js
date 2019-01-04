const express = require('express')
const path = require('path')
const debug = require('debug')('http')

debug('booting %o My App')

// Init App
const app = express()
// Load View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(function (req, res, next) {
	debug(`${req.method} ${req.url}`)
	next()
})

// Route
app.get('/', (req, res) => {
	// res.send('Hello World')
	debug(`${req.method} ${req.url}`)
	const locals = { home: 'Home' }
	console.log(locals)
	res.render('index', locals)
})

app.get('/page-1', (req, res) => {
	// res.send('Hello World')
	res.render('page_1', {
		tittle: 'PUG PAGE 1',
		name: 'Timothy'
	})
})

app.get('/page-2', (req, res) => {
	res.render('page_2')
})
// Start Server
const port = 3000
app.listen(port, () => {
	console.log(`Server Started on port ${port}`)
})
