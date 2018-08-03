# 一、compose
## 1.1 功能
从右到左来组合多个函数。
这是函数式编程中的方法，为了方便，被放到了 Redux 里。
当需要把多个 store 增强器 依次执行的时候，需要用到它。

## 1.2 示例
```js
function func1(num) {
  console.log('func1 获得参数 ' + num);
  return num + 1;
}

function func2(num) {
  console.log('func2 获得参数 ' + num);
  return num + 2;
}
  
function func3(num) {
  console.log('func3 获得参数 ' + num);
  return num + 3;
}

var re2 = Redux.compose(func3, func2, func1)(0);
console.log('re2：' + re2);//6
```

#二、 [createStore](http://cn.redux.js.org/docs/api/createStore.html)

略

#三、combineReducers

## 3.1 功能

合并reducer。

## 3.2 示例

**1)store**

```
var initState = {
  counter: 0,
  todos: []
}
```

**2)待办事项reducer** 

```react
function reducer(state, action) 
  switch (action.type) {
    case 'ADD_TODO':
      var nextState = _.cloneDeep(state) // 用到了 lodash 的深克隆
      nextState.todos.push(action.payload) 
      return nextState
}
```

**3)计数器reducer**

```react
export default function counterReducer(counter = 0, action) { // 传入的 state 其实是 state.counter
  switch (action.type) {
    case 'INCREMENT':
      return counter + 1 // counter 是值传递，因此可以直接返回一个值
    default:
      return counter
  }
}
```

**4)合并reducer**

```react
const rootReducer = combineReducers({
  counter: counterReducer, // 键名就是该 reducer 对应管理的 state
  todos: todosReducer
})
```

 待办事项的state=tods，计数器的state=counter。





<全文结束>