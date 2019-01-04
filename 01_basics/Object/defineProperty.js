/**
 * how to use javascript Object.defineProperty
 * ==========================================
 * https://stackoverflow.com/questions/18524652/how-to-use-javascript-object-defineproperty
 */

function Product(name, price) {
  let _discount = 0
  this.name = name
  this.price = price
  Object.defineProperty(this, 'discount', {
    get() {
      return _discount
    },
    set(newDiscount) {
      _discount = newDiscount
      if (_discount > 80) _discount = 80
    }
  })

  Object.defineProperty(this, 'newPrice', {
    get() {
      const x = this.price * (1 - _discount / 100).toFixed(2)
      return x.toFixed(2)
    }
  })
}

const sneakers = new Product('sneakers2018', 215)
sneakers.discount = 81
console.log(sneakers.discount)
console.log(sneakers.newPrice)

/* END */
