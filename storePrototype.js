/** https://github.com/JedWatson/store-prototype/blob/master/store.js
 *  Simple class for creating event-driven Data Stores
 */

const Store = function() {
	let _changeListeners = []
	let _eventListeners = {}
	this.notifyChange = function (name) {
		if (_eventListeners[name]) {
			_eventListeners[name].forEach((fn) => {
				fn()
			})
		}
		
		_changeListeners.forEach((fn) => {
			fn()
		})
	},
	this.addChangeListener = function (name, fn) {
		console.log(arguments.length)
		if (arguments.length === 1) {
			fn = name
			name = null
		}
		if (name) {
			if (!_eventListeners[name]) {
				_eventListeners[name] = []
			}
			_eventListeners[name].push(fn)
		} else {
			_changeListeners.push(fn)
		}
	},
	this.removeChangeListener = function (name, fn) {
		if (arguments.length === 1) {
			fn = name
			name = null
		}
		if (name) {
			if (_eventListeners[name]) {
				_eventListeners[name] = _eventListeners[name].filter(i => fn !== i)
			}
		} else {
			_changeListeners = _changeListeners.filter(i => fn !== i)
		}
	}
	return this.extend.apply(this, arguments)
}

Store.prototype.extend = function () {
	for (let i = 0; i < arguments.length; i++) {
		const source = arguments[i]
		for (const key in source) {
			if (source.hasOwnProperty(key)) {
				this[key] = source[key]
			}
		}
	}
	console.log(Object.keys(this))
	return this
}
var MyStore = new Store();
console.log(typeof MyStore)
console.log(MyStore.__proto__.extend())

var _things = {};

MyStore.extend({
	getThing: function (key) {
		return _things[key];
	},
	addThing: function (key, data) {
		_things[key] = data;
		this.notifyChange();
	},
	removeThing: function (key) {
		delete _things[key];
		this.notifyChange();
	}

});
console.log(MyStore.__proto__.extend())

MyStore.addChangeListener(function () {
	console.log('Things changed!');
})
// MyStore.notifyChange()
MyStore.addChangeListener('key', function () {
	console.log('things changed because key!');
})

MyStore.notifyChange('key')
