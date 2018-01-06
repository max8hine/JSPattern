// Class Function
// Autobinding itself, but when you out put it
// _this refers global object, need .bind()
class Dog {
	constructor() {
		this.sound = 'woof'
	}
	talk() {
		console.log('Dog talks ', this.sound)
	}
}
// Need an instance
const sniffles = new Dog()
sniffles.talk()
console.log(typeof sniffles);

// factory - Closure
const Kitten = () => {
	const sound = 'mewww'
	return {
		talk() { console.log('Kitten talks ', sound)},
	}
}
// Need an instance
const fluffy = Kitten();

fluffy.talk()

// Composition
const OutputStream = () => {
  return {
    send(line) {console.log(line);}
  };
}
const Greeter =  (outputStream) => {
 return {
   greet() {
     outputStream.send('Hello World!');
   }
 };
}

const Gesturer = (outputStream) => {
  return {
    wave() {outputStream.send('*Waves hand*');}
  };
}
let greeter = Greeter(OutputStream());
let gesturer = Gesturer(OutputStream());

// const wavingGreeter = Object.assign({}, greeter, gesturer);
const wavingGreeter = Object.assign({}, greeter, gesturer)

wavingGreeter.greet();
wavingGreeter.wave();


// Prototype
const food = {
	init: (type) => {
		this.type = type 
	},
	eat: () => {
		console.log(`you ate the ${this.type}`)
	}
}

// food.type = 'carrot'

// The Object.create() method creates a new object with the specified prototype object and properties.
// Object.create() will create a new object with __proto__ Object which will copy the creating object
// waffle{
// 	// roof object is empty
// 	__proto__ {
// 		init: {}
// 		eat: {}
// 	}
// }
const waffle = Object.create(food)
waffle.init('waffle')
// waffle.eat()
// waffle.eat = () => {console.log(`I am eating ${this.type}`)}
// waffle.type = 'carrot';
// waffle.type = 'carrot2';
// waffle.init('carrot3');
waffle.eat() // i am eating waffle 
waffle.__proto__.eat(); // you ate the waffle
console.log(waffle.type, waffle.__proto__.type, waffle.this); 
console.log(waffle, waffle.__proto__, waffle.type);

console.log(food.isPrototypeOf(waffle))