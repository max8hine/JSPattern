const EventEmitter = require('events')

// * 3 kinds of prototypes
// https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9#.dovq087e4

/**
 * * 1 Delegate prototype
 * Which is the type that you are already familiar with
 * When you don't find what you are looking for on that object
 * you go and look at the object's prototype
 * ! Flyweights for free
 * Stored on a single object instead of every instance
 */

// OLD N BUSTED
function Greeter(name) {
  this.name = name || 'John Doe'
}

Greeter.prototype.hello = function() {
  return `Hi, my name is ${this.name}`
}

const george = new Greeter('George')

console.info(george.hello())

// New way

const proto = {
  hello() {
    return `Hi, my name is ${this.name}`
  },
}
const george2 = Object.create(proto, {
  name: { value: 'George2', writable: true },
})
// JS has dynamic object extension, then extend the object
// george2.name = 'George2'

console.info(george2.hello())

/**
 * * 2 Cloning / Concatenation
 * Copy all the properties over from and
 * Create a new object using the copied properties
 * ! Good for mixin
 */

// _.extend in jQuery
var george3 = Object.assign({}, proto, { name: 'George3' })

console.info(george3.hello())

/* e.g.
const source = {
	get prop() {},
	set prop(v) {}
}
var foo = Object.assign(
	{},
	{
		get prop() {},
		set prop(v) {}
	},
	{
		get prop2() {},
		set prop2(v) {}
	},
	Events) */

/**
 * * 3 Functional Inheritance
 * Great for encapsulation / data privacy
 * Functional mixins
 */
const modelEvent = new EventEmitter()

function model() {
  const attrs = {}
  this.set = function(name, value) {
    attrs[name] = value
    this.emit('change', { name, value })
  }

  this.get = function(name) {
    return attrs[name]
  }
  Object.assign(this, modelEvent, modelEvent.__proto__)
  return this
}

const george4 = {}

model.call(george4).set('name', 'George4')
console.log(george4.get('name'))
george4.on('change', function(e) {
  console.info(`${e.name} has been changed to ${e.value}`)
})
