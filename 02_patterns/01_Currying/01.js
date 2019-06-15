// 01 Currying as a partial application
// Pure function
// const uppercaseALetter = index => str => str.charAt(index).toUpperCase()
// const extractALetter = index => str => str.slice(index).toLowerCase()

// // Compose both function
// const curriedFistLetterUpperCase = index1 => index2 => str => uppercaseALetter(index1)(str) + extractALetter(index2)(str)

// const log = str => { console.log(str) }

// // Utility function
// const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))
// // Create a function that using the composed function
// const logUppercaseName = compose(log, curriedFistLetterUpperCase(0)(1))
// logUppercaseName('mAx')
function setNumber(x) {
  calculation.state = x
  return calculation
}

// No arrow function
const calculation = {
  state: 0,
  addWith(n) {
    return this.state + n
  },
  multiplyWith(n) {
    return this.state * n
  },
}

const x = { state: 10 }

const result1 = setNumber(2).addWith(3)
const result2 = setNumber(2).multiplyWith(3)

result1
result2

/* END */
