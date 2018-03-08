/* T
	1. To name constructor functions with an upper-case first letter

 */

function Tree(name) {
	this.name = name
}

const theTree = new Tree('Redwood')
console.log(
	theTree,
	theTree.constructor.name,
)

console.log(theTree.constructor === Tree)
