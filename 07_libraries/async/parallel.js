const parallel = require('async/parallel')

/** parallel(tasks, callback_opt)
 * Run the tasks collection of functions in parallel,
 * without waiting until the previous function has completed.
 * If any of the functions pass an error to its callback,
 * the main callback is immediately called with the value of the error.
 * Once the tasks have completed, the results are passed to the final callback as an array.
 */

// parallel is about execute function in parallel

const obj = {}

const callback = (err, results) => {
  if (err) {
    console.error(err.message)
    return err
  }
  console.log(results)
  return results
}

const tasks = [
  next => {
    setTimeout(() => {
      obj.a = '1'
      next(null, 1)
    }, 300)
  },
  next => {
    setTimeout(() => {
      obj.b = '2'
      next(null, 2)
    }, 120)
  },
  next => {
    setTimeout(() => {
      obj.c = '3'
      next(new Error('Error_3'), 3)
    }, 200)
  }
]
parallel(tasks, callback)

// Method 2
parallel(
  [
    next => {
      setTimeout(() => {
        next(null, 1)
      }, 100)
    },
    next => {
      setTimeout(() => {
        next(new Error('error2'), 2)
      }, 120)
    },
    next => {
      setTimeout(() => {
        next(null, 3)
      }, 200)
    }
  ],
  (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  }
)
