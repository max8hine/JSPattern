// * A partial application(Functional composition)

// Object oriented approach
const getUglyFirstCharacterAsLower = str => str.substr(0, 1).toLowerCase()
console.log(getUglyFirstCharacterAsLower('hello'))
// Functional approach
const curriedSubstring = start => length => str => str.substr(start, length)
const curriedLowerCase = str => str.toLowerCase()
const getComposedFirstCharacterAsLower = str => curriedLowerCase(curriedSubstring(0)(1)(str))

function foo() {
	// Imaginary large data set - instantiated per invocation
	const private = [1, 2, 3, 4, 5]
	// private will be remove b/c garbage collection
	console.log(private)
}

foo()

const bar = (function () {
	// Step 1, create a closure
	const private = [1, 2, 3, 4, 5]
	// Step 2, return a function that reference that private value
	return function () { console.log(private) }
}())


// b/c private is referenced, it will not be garbage collected.
bar()
/* END */
