const series = require('async/series')


function callback(err, results) {
	if (err) {
		console.log(err)
	}
	console.log(results)
	// return results
}

const functionList = {
	one(next) { setTimeout(() => { next(null, 1) }, 300) },
	two(next) { setTimeout(() => { next(true, 2) }, 200) },
	three(next) { setTimeout(() => { next(null, 3) }, 100) },
}


series(functionList, callback)



/*
async.series([
    function(callback) {
        // do some stuff ...
        callback(null, 'one');
    },
    function(callback) {
        // do some more stuff ...
        callback(null, 'two');
    }
],
// optional callback
function(err, results) {
    // results is now equal to ['one', 'two']
});

async.series({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 200);
    },
    two: function(callback){
        setTimeout(function() {
            callback(null, 2);
        }, 100);
    }
}, function(err, results) {
    // results is now equal to: {one: 1, two: 2}
});
*/
