// 01 Currying as a partial application
// Pure function
const uppercaseALetter = index => str => str.charAt(index).toUpperCase()
const extractALetter = index => str => str.slice(index).toLowerCase()
// Compose both function
const curriedFistLetterUpperCase = index1 => index2 => str => uppercaseALetter(index1)(str) + extractALetter(index2)(str)

const log = str => { console.log(str) }

// Utility function
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))
// Create a function that using the composed function
const logUppercaseName = compose(log, curriedFistLetterUpperCase(0)(1))
logUppercaseName('mAx')


/* END */
