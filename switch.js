function long(x) {
	switch(x) {
		case '1': return 'I am 1'
		case '2': return 'I am 2'
		case '3': return 'I am 3'
		case '4': return 'I am 4'
		case '5': return 'I am 5'
		default: return 'I am nothing'
	}
}

function short(x) {
	const cases = {
		1: 'I am 1',
		2: 'I am 2',
		3: 'I am 3',
		4: 'I am 4',
		5: 'I am 5',
	}
	return cases[x] ? cases[x] : 'I am nothing'
}
console.log('---- Longhand ----')
console.log(long('1'))
console.log(long('4'))
console.log(long())
console.log('---- Shorthand ----')
console.log(short('1'))
console.log(short('4'))
console.log(short())


const priorityClass = value => {
	switch(value) {
	case '1': return 'priority-1';
	case '2': return 'priority-2';
	case '3': return 'priority-3';
	case '4': return 'priority-4';
	case '5': return 'priority-5';
	default:  return 'priority-null';
	}
};
console.log(priorityClass('2'));


