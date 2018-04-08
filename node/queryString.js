// https://nodejs.org/api/querystring.html
const querystring = require('querystring')

const obj = { name: 'hello', url: 'http://yijiebuyi.com' }
/**
 * @param {obj} Object - The object to serialise into a URL query string
 * @param {sep} String/divider - The substring used to delimit key and value paris in the query string. Defaults to '&'
 * @param {eq}  String/allocator - The substring used to delimit keys and values in the query string. Defaults to '='
 * @param {options} encodeURIComponent - Defaults to querystring.escape()
 * @return {String}
 */
const param = querystring.stringify(obj)
const param2 = querystring.stringify(obj, ', ', ': ')
console.log(param)
console.log(param2)

