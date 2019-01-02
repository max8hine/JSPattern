/*
 */

console.log(typeof Symbol('drescrption') === 'symbol')
let wow = Symbol('drescrption')
wow = 'wow'

console.log(wow.toString(), wow, Object.getOwnPropertyNames(wow).length)
const symbol3 = Symbol('foo')
console.log(symbol3.toString())

const person = {
  name: 'Jenner',
  age: 24
}
const NZid = Symbol('id')
const AUid = Symbol('id')

person[NZid] = { 'New Zealand ID': '84619GHSFDSA' }
person[AUid] = { 'Australia ID': '19-6839-SDFA' }

console.log(person[NZid], typeof person[NZid], person)
