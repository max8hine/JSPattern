/* One of bulid-in Array Method
  arr.reduce(callback[, initialValue])
  |- callback
  |---- accumulator
  |---- currentValue
  |---- currentIndex (Optional)
  |---- array (Optional)
  |- initialValue
  => returnValue
*/

import fetch from 'node-fetch'

// An example for plain Array
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr = []

const reducer = (accumulator, currentValue, currentIndex, Array) => {
  arr.push(currentValue)
  console.log(arr)

  return accumulator + currentValue
}

console.log(array1.reduce(reducer, 0))

console.log(array1.reduce(reducer, 5))

// An example for Array with nested Object

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

const totalAmount = orders.reduce(
  (accumulator, currentValue) => accumulator + currentValue.amount,
  0
)

console.log(`totalAmount: ${totalAmount}`)

// For loop for reudcer method

function myReduce(Arr) {
  let accumulator = 0
  // for (let index = 0; index < Arr.length; index++) {
  //   accumulator += Arr[index]
  // }
  for (let value of Arr) {
    accumulator += value
  }
  return accumulator
}
console.log(myReduce(array1))

// Asynchronous Reduce in JavaScript
// http://blog.bloomca.me/2018/01/27/asynchronous-reduce-in-javascript.html

const fetchUrl = id =>
  fetch('https://catappapi.herokuapp.com/users/', id)
    .then(response => response.json())
    .then(data => data.imageUrl)

async function createLinks(links) {
  const results = []
  for (const link of links) {
    const res = await fetchUrl(link)
    results.push(res)
  }
  console.log('from async', results)
  return results
}

const links = ['123', '124', '125', '126']

createLinks(res => {
  console.log(res)
})
