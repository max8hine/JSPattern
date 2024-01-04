
const sayHi = verb => subject => `${verb} ${subject}.`
const toWho = sayHi('Hello')

console.log(toWho('Max'), toWho('World'))