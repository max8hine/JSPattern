const express = require('express')

const app = express()
const port = 3001
const server = cb => {
  if (cb) return app.listen(port, cb)
  return app.listen(port)
}

function errorHandler(err, req, res, next) {
  if (err) return next(err)
  return next()
}

app.use(errorHandler)

app.all('/', (req, res) => {
  res.send('Home Page')
})

// Error Sync
app.all('/error', (req, res, next) => {
  const err = new Error('Boom!')
  if (err) return next(err) // return !important
  res.send('Error Page')
})

// Error async
app.all('/error-async', (req, res, next) => {
  Promise.resolve()
    .then(() => {
      throw new Error('Boom!')
    }) // throw !important
    .then(() => {
      res.send('Error Page - Async')
    })
    .catch(err => {
      next(err)
    })
})

// Exception 1
app.all('/uncaught-exception', (req, res, next) => {
  // uncaughtException
  try {
    setTimeout(() => {
      throw new Error('Boom!')
    }, 0)
  } catch (e) {
    if (e) next(e)
  }
})

app.all('unhandled-rejection', (req, res, next) => {
  // unhandledRejection
  Promise.resolve()
    .then(() => {
      throw new Error('Boom!')
    })
    .then(() => {
      res.send('Unhandled Exception')
    })
})

function reportError(err, cb) {
  console.log('----  🚨   ----')
  console.log('reportError() triggered')
  console.error(err)
  cb()
}

function shutDownGracefully(err, cb) {
  server().close(() => {
    reportError(err, cb)
  })
}

// Unhandled Error - catch-all
process.on('uncaughtException', err => {
  process.send('offline...')
  shutDownGracefully(err, () => {
    process.exit(1)
  })
})

process.on('unhandledRejection', err => {
  console.log('unhandledRejection 🚨')
  process.send('offline...')
  shutDownGracefully(err, () => {
    process.exit(1)
  })
})

server(() => {
  console.log(`App is running on port ${port}`)
})

/**
 * To run the server
 * ../node_modules/.bin/nodemon server
 * node server
 *
 * An example of error handling in Node.js
 */
