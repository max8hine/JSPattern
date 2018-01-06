// Currying Function
// Function composition
// Higher order function
const curry = fn => (...args) => {
	if (args.length >= fn.length) {
		return fn(...args);
	}
	return a => fn(...[...args, a]);
};

const filterWords = (wordsToRemove, rawText) => {
	let partsList = rawText.split(" ");
	wordsToRemove = [].concat(wordsToRemove);
	wordsToRemove.forEach(word => {
		partsList = partsList.filter(
			part => part.toLowerCase() !== word.toLowerCase()
		);
	});
	return partsList.join(" ");
};

const thingsToFilter = [
	"this is a test of rocks",
	"this is a test of that",
	"i'm not sure if this is a good of or bad of thing"
];

const curriedFilterWords = curry(filterWords);

const wordsToRemove = ["is", "a", "of"];

const removeIsOf = curriedFilterWords(wordsToRemove);

const output = thingsToFilter.map(removeIsOf);

console.log(output);

// Function composition is the process of combining
// Two or more functions to produce a new function.
// Composiing functions together is like snapping Together
// A series of pipes for our data to flow through
// f(g(x()))
// 
const toSlug = input => encodeURIComponent(
  join('-')(
    map(toLowerCase)(
      split(' ')(
        input
      )
    )
  )
);
console.log(toSlug('JS Cheerleader'));
