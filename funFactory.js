// In JavaScript, any function can return a new object.
// When it’s not a constructor function or class,
// it’s called a factory function.

// 01 - Constructor Function in the Factory way
function Car(opt) {
	this.doors = opt.doors || 4
	this.state = opt.state || 'Brand New'
	this.color = opt.color || 'Silver'
}
Car.prototype = function sayIt() {
	return `I have a ${this.state} car!`
}

const x = new Car({ doors: 5, state: 'New', color: 'Blue' })
console.log(
	`instance: ${(x instanceof Car)}`,
	`proto: ${x.sayIt}`,
	`value: ${x.color}`,
)


function Truck(opt) {
	this.state = opt.state || 'used'
	this.wheelSize = opt.wheelSize || 'Large'
	this.color = opt.color || 'Blue'
}

// 02 - Defining the Car facotry
function VehicleFactory() {}

// 03 - Defining what's the kind of car the factory makes
VehicleFactory.prototype.vehicleClass = null

// 04 - Defining the process of making the car
VehicleFactory.prototype.createVehicle = function (opt) {
	if (opt.vehicleType === 'Car') {
		this.vehicleClass = Car
	} else {
		this.vehicleClass = Truck
	}
	return new this.vehicleClass(opt)
}

// 05 - Register the factory and giving a name as well
const carFactory = new VehicleFactory()

// 06 - Start to make cars
const car = carFactory.createVehicle({
	vehicleType: 'Car',
	color: 'Yellow',
	doors: 6,
})

// 07 - verifying the car type is correct
console.log(car instanceof Car)

// Check out the goods
console.log(car)

// Make another Car

const movingTruck = carFactory.createVehicle({
	vehcleType: 'Truck',
	state: 'Mint',
	color: 'Red',
})

console.log(movingTruck instanceof Truck)

console.log(movingTruck)

