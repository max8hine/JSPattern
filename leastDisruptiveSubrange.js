// const original    = [1, 2, 3, 4, 5];
// const replacement =    [3, 5, 3];

function fineBestFittingSubrange(original, replacement) {
	// Define variable`
	let ii,
			jj,
			distance,
			distanceSum,
			smallestDistanceSumIndex,
			smallestDistanceSum = Infinity;
	
	// loops
	for(ii = 0; ii <= original.length - replacement.length; ii++) {
		// Best place to store the state of distanceSum
		distanceSum = 0;
		console.log('logging for pass #' + ii);
		for(jj = 0; jj < replacement.length; jj++) {
			distance = Math.abs(original[ii + jj] - replacement[jj]);
			console.log(`  ${original[ii+jj]} is ${distance} off from ${replacement[jj]}`);
			distanceSum = distanceSum + distance;
		};
		console.log(`  *The total distance on this pass is ${distanceSum}`);
		if(distanceSum < smallestDistanceSum) {
			smallestDistanceSum = distanceSum;
			smallestDistanceSumIndex = ii;
		};
	};

	// Return the new array
	return smallestDistanceSumIndex;
};

console.log('---Test Run---');
console.log(fineBestFittingSubrange(
	[2,5,9,1,-3,40,2,19],
	[10,-3,39]
));

console.log('---Test Run---');
console.log(fineBestFittingSubrange(
	[2,5,9,1,-3,10,-3,39],
	[10,-3,39]
));


// function factorial(Num){
// 	let f = 1;
// 	for(let i = Num; i > 0; i--) {
// 		f = f * i
// 	}
// 	return f;
// }
// console.log(factorial(5));