// Factory Pattern - Closure

const pplFactory = (name, age, state) => {
	const temp = {}
	temp.age = age
	temp.name = name
	temp.state = state
	return {
		printPerson() {
			return `${temp.name}, ${temp.age}, from ${temp.state}`
		},
	}
}

// Need an instance
const personAFactory = pplFactory('Max', 33, 'Christchurch')
const whoami = personAFactory.printPerson()
whoami

const animalFactory = {
	kitty() {
		const sound = 'Meow'
		const breed = 'Ragdoll'
		const category = 'animal'
	},
	Doggy() {
		const sound = 'bark'
		const breed = 'Bull'
		const category = 'animal'
	}
}

/*= ==========  or object in to __proto__  ============ */
function factoryPll(name, age, local, ...theArgs) { // rest parameter syntax
	// ES6
	return Object.create(pplFactory(name, age, local, ...theArgs))
}
const whoami2 = factoryPll('Max', 33, 'AKL').__proto__.printPerson()
whoami2


/**
 * Constructor
 * Pattern
 * #behave like class#
 * #Creating an object#
 * #Can not be the Arrow Function#
 * #Problem is the code is redundant somehow#
 */

const pplConstructor = function (name, age, state) {
	const gender = 'male'
	this.name = name
	this.age = age
	this.state = state	
	return {
		printPerson() {
		 return `${this.name}, ${gender}, ${this.age}, ${this.state} from a Constructor`
		},
	}
}

const personAConstructor = new pplConstructor('kim', 27, 'SC')

console.log(personAConstructor.__proto__.name)
console.log(personAConstructor.__proto__.printPerson)
console.log(personAConstructor.name)
console.log(personAConstructor instanceof pplConstructor)

console.log(typeof pplConstructor())
console.log(pplConstructor())


// Constructor Function

// Step 1: Creating an empty prototype object inside of a function
const pplProto = function () {}

// Creating default value
pplProto.prototype.age = 0
pplProto.prototype.name = 'no name'
pplProto.prototype.city = 'no city'
pplProto.prototype.printPerson = function () {
	console.log(this)
	console.log(`${this.name}, ${this.age}, ${this.city} from a Prototype Object`)
}

const ConstructorFun2 = function() {
	this.Cons1 = function() { return 'Cons1'}
	this.Cons2 = function () { return 'Cons2' }
	this.Cons3 = function () { return 'Cons3' }
}
console.log(ConstructorFun2())
const instanceofCons2 = new ConstructorFun2()
console.log(
	instanceofCons2 instanceof ConstructorFun2,
	instanceofCons2.Cons1(),
	Object.keys(instanceofCons2),
	instanceofCons2.__proto__.Cons1,
)

// Step 2: Creating an new instance of an object
const personAProto = new pplProto()
console.log(personAProto instanceof pplProto)
// Step 3: Giving it a value
// personAProto.name = "kim"
personAProto.__proto__.age = 27
personAProto.city = 'SC'
personAProto.name = 'Max'
personAProto.printPerson()

// console.log('name' in personAProto, personAProto.name)
// console.log(personAProto.hasOwnProperty('name'), personAProto)

/**
 * Dynamic
 * Prototype
 * Pattern
 * #combind with constructor function#
 */
const pplDynamicProto = function (name, age, state) {
	this.name = name
	this.age = age
	this.state = state
	// Attached a prototype with constructor function
	if (typeof this.printPerson !== 'function') {
		pplDynamicProto.prototype.printPerson = function () {
			console.log(this)
			console.log(`${this.name}, ${this.age}, ${this.state} from a Dynamic Prototype Object`)
		}
	}
}

const personADynamic = new pplDynamicProto('john', 23, 'CA')
personADynamic.printPerson()
// console.log('name' in personADynamic, personADynamic.name)
// console.log(personADynamic.hasOwnProperty('name'), personADynamic)

/**
 * Class
 * #just a Dynamic Prototype pattern#
 */
class pplClass {
	// exposes as object
	constructor(name, age, state) {
		this.name = name
		this.age = age
		this.state = state
	}
	// exposes as __proto__ underneath the object
	printPerson() {
		return `${this.name}, ${this.age}, ${this.state} from a Class`
	}
}
// need a new object
const personAClass = new pplClass('max', 33, 'AKL')
console.log(personAClass)
console.log(personAClass.printPerson())


/* https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e */

// class
class ClassCar {
	drive() {
		console.log('Vroom!');
	}
}

const car1 = new ClassCar();
console.log(car1.drive());

const AutoMaker = {
	Car(args) {
		return Object.create(this.bundle[args])
	},

	bundle: {
		premium: {
			drive() { return 'Vrooom!'},
			getOptions() { return ['leather', 'wood', 'pearl',]}
		},
		old: {},
	}
}

console.log(AutoMaker.Car('premium').drive())

// constructor
function ConstructorCar() { }

ConstructorCar.prototype.drive = function () {
	console.log('Vroom!');
};

const car2 = new ConstructorCar();
console.log(car2.drive());


// factory
const proto = {
	drive() {
		console.log('Vroom!');
	}
};

function factoryCar() {
	return Object.create(proto);
}

const car3 = factoryCar();
console.log(car3.drive());
