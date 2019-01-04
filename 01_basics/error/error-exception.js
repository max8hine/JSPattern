/** Error is an special Class in Javascript
 * 1. it is Object
 * 2. Runtime Error throw an Error Object
 * 3. Has {message} and {stack} property
 * 4. Also RangeError, ReferenceError, SyntaxError, oters
 */

const anError = new Error('I am the error message')

console.log(anError.message, 'anError.message')
console.log('--------------------------------')
console.log(anError.stack, 'anError.stack')
console.log(typeof anError.stack, 'anError.stack type')
console.log('--------------  Still Running   --------------')

/** Exceptions
 * - Usually you throw an Error Object
 * - Callback unwinds looking for a catch block
 * - You can throw anything, not just Object, but don't
 * - Node will shut down if an exception is unhandled
 */
throw new Error('I will shut down node')
throw 'Hello There' // <- Shut down silence, Never do this
console.log('--------------  Never Reach Out   --------------')
