const date = new Date(Date.now())

const dateValues = [
	date.getFullYear(),
	date.getMonth() + 1,
	date.getDate(),
	date.getHours(),
	date.getMinutes(),
	date.getSeconds(),
]

dateValues

const date2 = (new Date()).toLocaleDateString()
date2

const date3 = new Date().toUTCString()
date3

console.log(new Date())

var d = (new Date()).getTimezoneOffset()
d
console.log(
	Date.parse(new Date()),
	Date.now(),
)