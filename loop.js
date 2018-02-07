const arr = [3, 5, 7]
arr.foo = 'Hello'

console.log(
	arr, // [3, 5, 7, foo: "Hello"]
	arr.hasOwnProperty(2), // true
	arr.hasOwnProperty(3), // false
	arr.length, // 3
	arr[2], // 7
	arr[3], // undefined
)
for (const key in arr) { console.log(arr[key]) } // 3, 5, 7, Hello
arr.map((v) => { console.log('map: ', v) })
console.log('____________')
// ES6
for (const val of arr) {
	console.log(val)
} // 3, 5, 7

console.log('____________')



const trees = [
	'redwood',
	'bay',
	'cedar',
	'oak',
	'maple',
]
//  index:       0        1       2       3        4
console.log(
	0 in trees, // true
	4 in trees, // ture
	5 in trees, // false
)
console.log('____________')

let obj = {
	wow: 'obj_wow',
	hey: 'obj_hey',
}
for (const val of arr) {
	console.log(val)
}
console.log('____________')

for (const key in obj) {
	console.log(key, obj[key])
}
console.log('____________')

for (const key in arr) {
	console.log(key)
}
console.log('____________')

var gen = (function* () {
	yield 1
	yield 2
	yield 3
}());

let arobg = Array.from('1234')
console.log(arobg)
