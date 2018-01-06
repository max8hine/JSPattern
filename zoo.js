 const animals = [
  {id: 0, species: 'tiger', name: 'Woody', food: 'meat'},
  {id: 1, species: 'tiger', name: 'Pawla', food: 'meat'},
  {id: 2, species: 'Monkey', name: 'Aladdin', food: 'mixed'},
  {id: 3, species: 'Lamb', name: 'Bandi', food: 'weed'},
  {id: 4, species: 'lamb', name: 'Burnell', food: 'weed'},
  {id: 5, species: 'ferret', name: 'Kendall', food: 'meat'},
  {id: 6, species: 'Alpaca', name: 'x$', food: 'weed'},
  {id: 7, species: 'Alpaca', name: 'x$', food: 'weed'},
  {id: 8, species: 'Alpaca', name: 'x$', food: 'weed'},
  {id: 9, species: 'Alpaca', name: 'x$', food: 'weed'},
  {id: 10, species: 'Alpaca', name: 'x$', food: 'weed'},
  {id: 11, species: 'Alpaca', name: 'x$', food: 'weed'},
  {id: 12, species: 'Alpaca', name: 'x$', food: 'weed'},
  {id: 13, species: 'Alpaca', name: 'x$', food: 'weed'},
  {id: 14, species: 'Alpaca', name: 'x$', food: 'weed'}
]

// Step 2 Sorting out by Diet
const groupMeat = animals.filter(item => item.food === 'meat');
const groupMixed = animals.filter(item => item.food === 'mixed');
const groupWeed = animals.filter(item => item.food === 'weed');

// console.log('Meat Group:', groupMeat);
// console.log('Mixed Group:', groupMixed);
// console.log('Weed Group:', groupWeed);


// Step 3 split the new animal grop to each enclosure
const splitToEnclousre = (animalGroup, size) => {
	let enclosure = [];
	while(animalGroup.length > 0) {
		enclosure.push(animalGroup.splice(0, size))
	}
	return enclosure;
};
console.log(splitToEnclousre(groupWeed, 3));
// Or, In a for loop with slice, no side effect
const splitToEnclousre2 = (animalGroup, size) => {
	let enclousreList = [];
	for(let i = 0; i < animalGroup.length; i = i + size) {
		enclousreList.push(animalGroup.slice(i, i + size));
	}
	return enclousreList;
};
console.log(splitToEnclousre2(groupWeed, 3));



const greeting = v => {
	console.log(v);
	const name = name => {
		console.log(name);
		return (`${v.slice(0,1).toUpperCase() + v.slice(1)} ${name}`);
	}
	return name;
}
console.log(greeting('hello')('Max Ma'));

const dog = () => {
	const sound = 'woof';
	const food = 'bone';
	return {
		talk: () => {console.log(sound)},
		diet: () => {console.log(food)}
	}
};

const sniffes = dog();
sniffes.talk();

const square = x => x*x;
const cube = x => x*x*x;
const power = x => {
	const inner = y => {
		let acc = y;	for(var i = 1; i < x; i++) {
			acc = acc * y;
		};
		return acc;
	};
	return inner;
}


