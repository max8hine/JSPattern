const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']

// [immutable] concatenates
const newArr1 = array1.concat(array2)
newArr1

// first, and the rest
const [first, ...rest] = array1
first
rest

// last, and before the last
// ![reverse] mutate the array
const [last, ...before] = array1.reverse()
last
before
array1.reverse() // reverse array back

// reverse without mutation
const newArr2 = array1.slice().reverse() // using slice to create a new array
newArr2
array1
// ES6 variant
const newArr3 = array1.reduceRight((a, c) => (a.push(c), a), [])
newArr3

// Using object to express an Array
array1
let { 0: a, [array1.length - 1]: b } = array1
a
b
