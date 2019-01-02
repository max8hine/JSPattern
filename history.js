const location = window.History.createLocation()

const unlisten = history.listen((location, action) => {
  console.log(action, location.pathname, location.state)
})

history.push('/home', { some: 'state' })

unlisten()
