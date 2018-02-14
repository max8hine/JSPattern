const dog = {
	sound: 'woofy',
	talk() {
		console.log(this.sound)
	},
}
const talkFunction = dog.talk.bind(dog)
talkFunction()
for (key in dog) { console.log(key) }
console.log(
	// `in` operator
	'sound' in dog,
	'constructor' in dog,
	'hasOwnProperty' in dog,
)


// Prototype
function talk() {
	console.log(this)
	console.log(this.sound)
}

const animal = {
	talk,
}

const cat = {
	sound: 'Meow!',
}

const bigCat = {
	howl() {
		console.log(this.sound.toUpperCase())
	},
}

Object.setPrototypeOf(cat, animal)
Object.setPrototypeOf(bigCat, cat)
console.log(cat, cat.__proto__)
console.log(bigCat, bigCat.__proto__)
bigCat.howl()
cat.talk()

bigCat.prototype = function whoami() {
	console.log('bigCat')
}

bigCat.__prototype__



