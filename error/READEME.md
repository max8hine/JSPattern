# Error in Node.js

## Don't keep running in an unknown state
* State shared across multiple requests: less isolation
* Unexpected error in one request can pollute state of others
* Polluted state can lead to undefined behavior
	* Memory leaks, infinite loop, security issues
* Only way to get back to a know good state: bail out, restart

## The game plan
1. always know when errors happen: don't ignore!
2. Handle what you can, avoid what you can't
3. Know and use different mechanisms for effective handling
4. have a global catch-all for the errors you couldn't handle
5. Use a process manager so shutting down is no big deal
6. Accept when it's time to pack up shop, clean up, shut down

# 3. Know and use different mechanisms for effective handling

## Error Mechanisms in Node

* Try/Catch - throw and try/catch
* Callbacks - err first argument and if (err)
* Promises - reject(err) and .catch()
* EventEmitters - error events and .on('error')
* Express - next(err) and error-handling middleware

``` javascript
/* Callback */
function readAndParse(file, callback) {
	fs.readFile(file, { encoding: 'utf8' }, function (err, data) {
		if (err) return callback(err)
		try {
			callback(null, JSON.parse(data))
			// JSON.parse {Exceptions} Throws a SyntaxError exception, if the string to parse is not valid JSON.
		} catch(e) {
			callback(e)
		}
 	})
}
```

``` javascript
/* Promises */
const p = new Promise((resolve, reject) => {
	fs.readFile('data.txt', (err, data) {
		if (err) return reject(err)
		resolve(data)
	})
})

p.then(JSONParse)
	.then(doSomethingElse)
	.catch((reson) => {
		// If readFile or JSON parsing or something else failed,
		// We can handle it here
	})
```

## EventEmitters
* Servers, sockets, requests, streams
	* Long-lived objects with asynchronous stuff going on
* They can emit error events: listen for them!
* If an error event is emitted without an error listener...
	* The Error object will be thrown instead!
	* How operational errors become programming errors

``` javascript
/* EventEmitter */
const req = http.get(url, function (res) {
	doSomething(res)
})
req.on('error', function (err) {
	// We caught the request error, let's recover
})

/* Express Error Middleware */
app.post('/login', function (req, res, next) {
	db.query('SELECT...', function (err, user) {
		if (err) return next(err)
	})
})
app.use(function(err, req, res, next) {
	// spit out your own error page, log the error, etc
	next()
})
```

# 4. Have a global catch-all for the errors you couldn't handle

## Basic Global error handler
process.on('', function (err) {
	console.log('Uncaught exception! Oh no!')
	console.error(err)
	process.exit(1)
})

# 5. Use a process manager so shutting down is no big deal

## Process managers and Node

* Run multiple server processes
	* One of them dying won't take us offline
	* Node cluster module
* Process managers: systems, pm2, forever, naught
	* WIll automatically restart processes when they die
	* Some provide further Node-specific functionality

``` javascript
/* Naught */
const server = http.createServer(...)
process.on('uncaughtException', function (err) {
	console.log('Uncaught exception! Oh no!')
	console.error(err)
	// Tell naught to stop sending us connections & start up a replacement
	process.send('offline')
	process.exit(1)
})

server.listen(80, function() {
	// Tell naught we're ready for traffic
	if (process.send) process.send('online')
})
```

# Accept when it's time to pack up shop, clean up, shut down

## When we catch a 'fatal' error, we want to

* Quit accepting new connections
* Start reporting whatever we're gonna report
* Tell proc manager we're gonna die so it starts replacement
* Wait for any existing requests, sockets, etc to be dealt with
* Close any open resources, connections, etc
* Shut down

## We want to report that stack trace!

``` javascript
function reportError(err, cb) {
	// send the stack trace somewhere, then call cb()
}
process.on('uncaughtException', function(err) {
	process.send('offline')
	reportError(err, function(sendErr) {
		// Once error has been reported, let's shut down
		process.exit(1)
	})
})
```

``` javascript
/* Get a text message */
const myPhone = '...'
function reportError(err, cb) {
	console.error(err)
	twilio.sendTextMessage(myPhone, err.message, cb)
}

/* Useful to report operational errors */
db.query('SELECT...', function (err, results) {
	if (err) return reportError(err)
	doSomething(results)
})

/* Alternatively, use Sentry */
const Raven = require('raven')
Raven.config('<sentry-key>')

function reportError(err, cb) {
	console.error(err)
	Raven.captureException(err, cb)
}
```

## Graceful shutdown

``` javascript
server = http.createServer(...)
function shutDownGracefully(err, cb) {
	// Quit accepting connection, clean up any other resources
	server.close(() => { reportError(err, cb) })
}

process.on('uncaughtException', function (err) {
	process.send('offline')
	shutDownGracefully(err, function () {
		process.exit(1)
	})
})
```
* Wait for any existing requests, sockets, etc to be dealt with
* Close any open resources, connections, etc

## Big Combined Example

``` javascript
server = http.createServer(...)

function reportError(err, cb) {
	console.error(err)
	Raven.captureException(err, cb)
}

function shutDownGracefully(err, cb) {
	// Quit accepting connection, clean up any other resources
	server.close(() => {
		// Can also wait for all connections: server._connections
		reportError(err, cb)
	})
}

process.on('uncaughtException', function (err) {
	process.send('offline')
	shutDownGracefully(err, function () {
		process.exit(1)
	})
})

server.listen(80, function() {
	if (process.send) process.send('online')
})
```

## What NOT to do with a global catch-all

* Just log the error and carry on
* Keep the process running indefinitely
* Try to recover in any way: it's too late!
* Try to centralize handling of operational errors into one place

## Other global error mechanisms

* `process.on('uncaughtException')`
* `process.on('unhandledRejection')`
* Domains - but application code shouldn't need them
