// http://2ality.com/2016/03/promise-rejections-vs-exceptions.html
// Handling exceptions in Promise-based functions
const async = require('async')

function solvedPromise(message) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, message)
  })
}

function handlingException_1(message, done) {
  // throw an exception
  try {
    // throw new Error('Oops, new Error!')
    solvedPromise(message)
      .then(result => {
        done(false, result)
      })
      .catch(err => {
        console.log(err)
        done({ type: 'ERROR_CATCH', payload: 'caught an exception error' })
      })
  } catch (e) {
    done({ type: 'ERROR_CATCH', payload: e.message })
  }
}

function handlingException_2(message, done) {
  Promise.resolve()
    .then(() => {
      return (x = message)
    })
    .then(x => done(false, x))
    .catch(e => done({ type: 'ERROR_CATCH_2', payload: e.message }))
}

function doThing() {
  async.waterfall(
    [
      done => handlingException_1('YES!', done),
      (result, done) => handlingException_2(result, done)
    ],
    (err, result) => {
      if (err) {
        console.log(err)
      }
      console.log(result)
    }
  )
}

doThing()

process.on('uncaughtException', function(err) {
  console.log(err, '@ uncaughtException')
})
process.on('unhandledRejection', function(err) {
  console.log(err, '@ unhandledRejection')
})
