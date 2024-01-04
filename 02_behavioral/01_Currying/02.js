// State with currying
// Create a function which update whatever function you want to use
const setFoo = function (state) {
	// Specific state
	if (state === 'a') return () => 'State a PTW'
	// Default State
	if (state) return () => 'Default state'
	// Empty function since no state is desired.
	// This avoids invocation error
	return () => { }
}

// Set to the specific state (a)
let good = setFoo('a')
console.log(foo()) // > 'State a PTW'

good = setFoo(true)
console.log(foo()) // > 'Default State'

good = setFoo()
console.log(foo()) // > Undefined