// Each function executed within the loop will reference
// The last value stored in i

// Wired thing is it exposes that
// The incrementer runs at the start of 
// every iteration except the first one

/* 
 * it's also my favorite #javascript #closure example.
 */

// let is scoped to the nearest enclosing block
for (let i = 0; i < 5; i += 1) {
	setTimeout(() => console.log(i)) // 1, 2, 3, 4, 5
}

/*
 * Another closure trap is var in #Javascript, var will look at the nearest function block, that could be your global block if forLoop exposes in the global scope.
*/

// var is scoped to the nearest function block, it might
// produces a side effec of closures of the implicitly closure
for (var i = 0; i < 5; i += 1) {
	setTimeout(() => console.log(i))  // 5, 5, 5, 5, 5
}

// * Solution
// Creating function block to limit the closure of the var of i
const createClosure = any => () => console.log(any)
for (var i = 0; i < 5; i += 1) {
	setTimeout(createClosure(i))  // 0, 1, 2, 3, 4, 5
}

// * Conclusion: Using let whenever you can


/*
 * let's back to let keyword, below contains few points
 * 2 #closure inside of #forLoop, #Javascript #eventLoop, #variableReference
*/
for (
	let i = 0;
	i < 5; // (2)
	i += 1 // (1)
) {
	console.log(i) // 0, 2, 4
	setTimeout(() => console.log(i)) // 3, 4, 5
	i += 1
} // #closure

/* For ... Loop
 * 1. The incrementer runs at the start of every iteration except the first one
 * 2. Each iteration creates a new lexical environment before runs this check
 * 3. It copies the value if i into it.
 */

/* END */
