const { createSelector } = require('reselect')

var state = {
  a: 100
}

var naiveSelector = state => state.a

// mySelector 会缓存输入 a 对应的输出值

var mySelector = createSelector(
  naiveSelector,
  a => {
    console.log('argument =', a)
    return a * a
  }
)

console.log(mySelector(state)) // 第一次计算，需要做一次乘法
console.log(mySelector(state)) // 输入值未变化，直接返回缓存的结果
state.a = 55
console.log(state.a) // 同上
console.log(mySelector(state)) // 同上
console.log(mySelector(state)) // 输入值改变，做一次乘法
console.log(mySelector(state)) // 输入值未变化，直接返回缓存的结果
console.log(mySelector(state))
