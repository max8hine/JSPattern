/**
 * Factory
 * Pattern
 * #Closure#
 */
const pplFactory = (name, age, state) => {
	let temp = {};

	temp.age = age;
	temp.name = name;
	temp.state = state;
	// Cann't be the Arrow Function
	temp.printPerson = function() {
		console.log(`${this.name}, ${this.age}, ${this.state} from a Factory`);
	};

	return temp;
};

// Need an instance
const personAFactory = pplFactory("kim", 27, "SC");
personAFactory.printPerson();
/*===========  or object in to __proto__  ============*/
function factoryPll() {
	return Object.create(pplFactory("Max", 33, "AKL"))
}
factoryPll().__proto__.printPerson();


/**
 * Constructor
 * Pattern
 * #behave like class#
 * #Creating an object#
 * #Can not be the Arrow Function#
 * #Problem is the code is redundant somehow#
 */

const pplConstructor = function(name, age, state) {
	this.name = name;
	this.age = age;
	this.state = state;
	this.printPerson = function() {
		console.log(`${this.name}, ${this.age}, ${this.state} from a Constructor`);
	};
};
// Hey, Javascript, give me a new object
const personAConstructor = new pplConstructor("kim", 27, "SC");
personAConstructor.printPerson();

/**
 * Prototype
 * Pattern
 * #No Arrow Function at all#
 * #The drawback of Prototype:#
 * #it create a confusion#
 */

// Step 1: Creating an empty prototype object inside of a function
const pplProto = function() {};
// Creating default value
pplProto.prototype.age = 0;
pplProto.prototype.name = "no name";
pplProto.prototype.city = "no city";
pplProto.prototype.printPerson = function() {
	console.log(this);
	console.log(
		`${this.name}, ${this.age}, ${this.city} from a Prototype Object`
	);
};

// Step 2: Creating an new instance of an object
const personAProto = new pplProto();
// Step 3: Giving it a value
// personAProto.name = "kim"
personAProto.age = 27;
personAProto.city = "SC";
personAProto.printPerson();

// console.log('name' in personAProto, personAProto.name)
// console.log(personAProto.hasOwnProperty('name'), personAProto)

/**
 * Dynamic
 * Prototype
 * Pattern
 * #combind with constructor function#
 */
const pplDynamicProto = function(name, age, state) {
	this.name = name;
	this.age = age;
	this.state = state;
	// Attached a prototype with constructor function
	if (typeof this.printPerson !== "function") {
		pplDynamicProto.prototype.printPerson = function() {
			console.log(this);
			console.log(`${this.name}, ${this.age}, ${this.state} from a Dynamic Prototype Object`);
		};
	}
};

const personADynamic = new pplDynamicProto("john", 23, "CA");
personADynamic.printPerson();
// console.log('name' in personADynamic, personADynamic.name)
// console.log(personADynamic.hasOwnProperty('name'), personADynamic)

/**
 * Class
 * #just a Dynamic Prototype pattern#
 */
class pplClass {
	// exposes as object
	constructor(name, age, state) {
		this.name = name;
		this.age = age;
		this.state = state;
	}
	// exposes as __proto__ underneath the object
	printPerson() {
		console.log(this);
		console.log(`${this.name}, ${this.age}, ${this.state} from a Class`);
	}
}
// need a new object
const personAClass = new pplClass('max', 33, 'AKL')
personAClass.printPerson();


