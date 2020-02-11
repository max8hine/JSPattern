Object.assign(this, {
  a: 'hello',
})

const obj = {
  name: 'george',
  greeting: () => {
    console.log(this)
  },
}
obj.greeting()

const b = () => {
  const c = () => {
    console.log(this)
  }

  c()
}
b()
