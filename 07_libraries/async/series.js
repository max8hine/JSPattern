const series = require('async/series')

function callback(err, results) {
  if (err) {
    console.log(typeof err, err)
    return err
  }
  console.log(results)
  return results
}

const functionList = {
  one(next) {
    setTimeout(() => {
      next(null, 1)
    }, 300)
  },
  two(next) {
    setTimeout(() => {
      next(null, 2)
    }, 2000)
  },
  three(next) {
    setTimeout(() => {
      next(null, 3)
    }, 100)
  }
}

series(functionList, callback)

series(
  [
    function(done) {
      console.log('hi')
      done()
    },
    function(done) {
      console.log('hi 2')
      done('Got an Error')
    },
    function(done) {
      console.log('hi 3')
      done()
    }
  ],
  function(err, result) {
    if (err) {
      console.log(err)
      return err
    }
    console.log(result)
    return result
  }
)
