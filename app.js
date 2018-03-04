import express from 'express'
import path from 'path'
import './config/config'

// Init App
const app = express()
const port = process.env.PORT
// Load View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
// Route
app.get('/', (req, res) => {
	// res.send('Hello World')
	res.render('index', {
		tittle: 'PUG HOME',
	})
})

app.get('/page-1', (req, res) => {
	// res.send('Hello World')
	res.render('page_1', {
		tittle: 'PUG PAGE 1',
		name: 'Timothy',
	})
})

// Start Server
app.listen(port, () => {
	console.log(`Server Started on port ${port}`)
})
