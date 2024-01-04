// Observer Pattern

const Subject = () => {
	let observers = []
	return {
		subscribe: observer => { observers.push(observer) },
		unsubscribe: observer => {
			const index = observers.indexOf(observer)
			if (index >= 0) observers.splice(index, 1)
		},
		notify: observer => {
			const index = observers.indexOf(observer)
			console.log(index)
			if (index >= 0) observers[index].notify()
		},
		notifyAll: observer => {
			if (observers.length >= 0) observers.forEach(observer => observer.notify())
		},
	}
}

const Observer = number => ({
	notify: function () {
		console.log(`Observer ${number} is notified!`)
	},
})

const subject = Subject()

const observer1 = Observer(1)
const observer2 = Observer(2)
const observer3 = Observer(3)
const observer4 = Observer(4)

subject.subscribe(observer1)
subject.subscribe(observer2)
subject.subscribe(observer3)
subject.subscribe(observer4)

subject.notify(observer2)
subject.notifyAll()
subject.unsubscribe(observer2)

/* END */
