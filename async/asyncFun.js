async function test() {
	console.log('start...')
	await new Promise((resolve, reject) => setTimeout(() => resolve(), 1000))
	console.log('Hello, World')
}
test()

function bad() {
	throw new Error('bad');
}

function bad2() {
	return new Promise(() => { throw new Error('bad2'); });
}

async function test2() {
	try {
		await bad();
	} catch (error) {
		console.log('caught', error.message);
	}

	try {
		await bad2();
	} catch (error) {
		console.log('caught', error.message);
	}
}

test2()

function wait(ms) {
	return new Promise(resolve => setTimeout(() => resolve(), ms));
}

async function test3() {
	for (let i = 0; i < 10; ++i) {
		await wait(1000);
		// Prints out "Hello, World!" once per second and then exits
		console.log('Hello, World!');
	}
}

test3();