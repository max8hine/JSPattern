const factorial = n => {
  if (n < 2) return 1
  return n * factorial(n - 1)
}
// 4 * factorial(n - 1)
// 4 * 3 * factorial(n - 1)
// 4 * 3 * 2 * factorial(n - 1)
// 4 * 3 * 2 * 1
// 4 * 3 * 2
// 4 * 6
// 24
// ! maximum stack call if you do factorial(100000)

const result = factorial(4)
result

// * Tail call optimization in ES2015
const optimizedFactorial = (n, accumulator = 1) => {
  if (n < 2) return accumulator
  return optimizedFactorial(n - 1, n * accumulator)
}

// factorial(4, 1)
// factorial(3, 4)
// factorial(2, 12)
// factorial(1, 24)
// 24
// const optResult = optimizedFactorial(4)
// optResult
