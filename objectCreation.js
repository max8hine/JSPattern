const dog = {
	sound: 'woofy',
	talk() {
		return this.sound
	},
}
const talkFunction = dog.talk.bind(dog)
console.log(talkFunction())

// Prototype Basics
function talk() {
	console.log(this)
	console.log(this.sound)
}

const animal = { talk }
const cat = { sound: 'Meow!' }
// Set prototype of cat to be animal
Object.setPrototypeOf(cat, animal)
cat.talk()

const bigCat = {
	howl() { return this.sound.toUpperCase() },
}
Object.setPrototypeOf(bigCat, cat)
console.log(bigCat.howl())


console.log(cat, cat.__proto__)
console.log(bigCat, bigCat.__proto__)

bigCat.prototype = function whoami() {
	console.log('bigCat')
}

// __proto__ vs prototype

/*
	The prototype is a property on a constructor function
	that sets what will become  the __proto__ property
	on the constructed object.
 */

// Prototype an object that delegate to other objects
const munchkin = {
	breed: 'munchkin',
}

const myCat = {
	name: 'Fluffykins',
}

Object.setPrototypeOf(myCat, munchkin)
console.log(
	myCat,
	myCat.__proto__,
)

function Dog() {
	this.Dname = 'Bob'
}

Dog.prototype.breed = 'Bulldog'

const newDog = new Dog()
console.log(
	newDog.breed, // Bulldog
	newDog.name, // Bob
	newDog.__proto__.Dname,	// undefined
	newDog.__proto__.breed, // Bulldog
	Dog.prototype.breed, // Bulldog
	Dog.prototype.Dname,	// undefined
	Dog.breed, // undefined
	Dog.Dname, // undefined, nothing return here
)


/* Object.create() - ES6 - Object.create(proto[, propertiesObject])
	The Object.create() method
	Creates a new object with the specified prototype
	Object and properties
 */

// for an object
const person = {
	name: 'no-one',
	isHuman: false,
	printIntroduction() {
		return `My name is ${this.name}. Am I human ${this.isHuman}`
	},
}

const me = Object.create(person)
// me.name = 'Max'
// me.isHuman = true
me

console.log(
	me,
	me.__proto__,
)

me.__proto__.name = 'Robot'
me.__proto__.isHuman = 'I think I am'
console.log(
	me,
	me.__proto__,
)

function objCreate(o) {
	function F() {}
	F.prototype = o
	return new F()
}

const me2 = objCreate(person)
// me2.name = 'Xiaoguang'
// me2.isHuman = true
me2

me2.__proto__.name = 'Xiaoguang2'
me2.__proto__.isHuman = false
console.log(me2.__proto__)
