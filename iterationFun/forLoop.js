/* For...Of Statement creates a loop iterating over iterable objects
    for (variable of iterable) {statement}
 */

function* foo() {
  yield 1;
  yield 2;
}
const arr1 = [1,2,3,4,5]

for (let o of foo() ) {
  console.log(o);
  break; // closes iterator, triggers return
}

let arrPush = []
for (let o of arr1) {
  arrPush.push(o)
}
console.log(arrPush)

