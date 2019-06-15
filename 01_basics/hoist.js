// https://www.w3schools.com/js/js_hoisting.asp
// developer.mozilla.org/en-US/docs/Glossary/Hoisting

https: console.log(myName)
var myName = 'Max'
console.log(myName)

function hoist(track) {
  if (track === 'yes') {
    action = 'dance'
  } else {
    action = 'skp'
  }
  var action

  return action
}

var a = hoist('yes')
a
action
