// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

// Left-Hand-Side Expressions < Expressions and operators by category

/* new constructor[([arguments])]
	The `new` operator creates an instance of a user-defined object type
	Or of one of the built-in object types that has a constructor function.
*/

// Creating a user-defined object requires two steps:
// Step 1: Define the object type by writing a function
function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}
// Step 2: Create an instance of the object with new.
const newCar = new Car('Rove', '216Sli', 1997)
// A user-defined object done
console.log(newCar)

Car.prototype.owner = null
newCar.owner = 'Max'
console.log(newCar)
console.log(Car.prototype)

// Example From FunFunFunction
function Person(shit, saying) {
  this.shit = shit
  this.talking = function() {
    return saying
  }
}

Person.prototype.talk = function() {
  return this.shit + ' ' + this.talking()
}

const say = new Person('f*cking', 'good')
console.log(say, say.talk())

function aNew(constructor) {
  // 1 - Create a new object
  const obj = {}
  // 2 - set prototyoe to the new object
  Object.setPrototypeOf(obj, constructor.prototype)
  // 3 - Execute constructor with 'this'
  const argsArray = Array.prototype.slice.apply(arguments)
  // console.log(argsArray.slice(1))
  // 4 - Return the created object
  return constructor.apply(obj, argsArray.slice(1)) || obj
}

function ES6New(constructor, ...resArgs) {
  const obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  constructor.apply(obj, resArgs)
  return obj
}
const crockford = ES6New(Person, 'f*cking', 'Good')
console.log(crockford.talk())
