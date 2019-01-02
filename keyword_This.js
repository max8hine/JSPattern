// `this` is Primary expressions < Expressions and operators by category

// http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/

/*
# These two snippets are different:
# 1 obj.method();
# 2 var method = obj.method;  method();
# Learn why and you’ll understand JavaScript.
*/

/*
	Function.prototype.call(thisArg, arg1, arg2, ...)       ECMAScript 1st Edition (ECMA-262)
	Function.prototype.apply(thisArg, [argsArray])          ECMAScript 3rd Edition (ECMA-262)
	Function.prototype.bind(thisArg[, arg1[, arg2[, ...]]]) ECMAScript 2015 (6th Edition, ECMA-262)
 */

// call();
// obj, ...args
function call(func, array) {
  let getArr = []
  console.log(arguments[0])
  for (let i = 1; i < arguments.length; i++) {
    getArr.push(arguments[i])
  }
  console.log(getArr)
}

function cb(arg) {
  console.log(arg)
}

call(cb.toString(), '1', '2', '3')

const person = {
  name: 'Brendan Eich',
  hello: function(thing) {
    console.log(this.name + ' says hello ' + thing)
  }
}
// const boundHello = function(thing) {
// 	return person.hello.call(person, thing);
// }

// var boundHello = function(thing) {
// 	return person.hello.call(person, thing);
// }

// boundHello("world");

const bind = function(func, thisValue) {
  return function() {
    return func.apply(thisValue, arguments)
  }
}
// const bind = (func, thisValue) => () => func.apply(thisValue, arguments);

var boundHello = bind(person.hello, person)
boundHello(['world', 'Yeah!']) // "Brendan Eich says hello world"
