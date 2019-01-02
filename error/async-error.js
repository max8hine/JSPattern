// sync is fine
try {
  throw new Error('Boom!') // You need to throw
} catch (e) {
  console.log('Aha! I caught the error!')
}

// Async is not fine

try {
  setTimeout(() => {
    throw new Error('Boom!')
  }, 0)
} catch (e) {
  console.log('Aha! I caught the error!')
}
