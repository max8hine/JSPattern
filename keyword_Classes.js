/* ECMAScript 2015
	Classes are primarily syntactical sugar
	over JS's existing prototype-based inheritance
 */

class Mammal {
	constructor(sound) {
		// Using underscore as a convention
		// to indicate that this is a private member
		this._sound = sound
	}
	talk() {
		return this._sound
	}
}

class Dog extends Mammal {
	constructor() {
		// super calls constructor of the inherited class
		super('woffeliwofffff')
	}
}
const fluffykins = new Mammal('woof')
const Bulldog = new Dog()

fluffykins
Bulldog

const x = fluffykins.talk()
x
const y = Dog.prototype.talk.bind({
	_sound: 'Roar',
})().toUpperCase()
y
