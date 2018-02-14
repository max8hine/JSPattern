console.log('line 1')
setTimeout(console.log, 1000, 'line 2')
console.log('line 3')

// Q1: What's the output order of following code
setTimeout(console.log, 0, 'a')
console.log('b')
console.log('c')

// Q2: Is the output equal or greater 500?
const t = Date.now()
for (let i = 0; i < 100000; i += 1) {}
console.log(Date.now() - t)

function fn() {
	console.log(Date.now() - t)
}

setTimeout(fn, 500)