**引子：**

为什么需要redux？
1）解决数据传递
2）代码维护

flux数据模型：

![redux数据流](.\img\redux数据流.png)
- Dispatcher：处理动作分发，维持Store之间的依赖关系；
- Stroe：负责存储数据和处理数据相关逻辑；
- Action：驱动Dispatcher的Javascript对象；
- View：视图部分，负责用户显示界面；



## 一、Redux:

定义：预知状态的容器

> Redux 主要分为三个部分 Action、Reducer、及 Store 

![redux工作方式](.\img\redux工作方式.png)

## 1.1 Action
行为动作，是把数据从应用传到 store 的有效载荷。它是 store 数据的**唯一**来源。 

```react
const ADD_TODO = 'ADD_TODO'
import { ADD_TODO, REMOVE_TODO } from '../actionTypes'
{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
```

Action 本质上是 JavaScript 普通对象。我们约定，action 内必须使用一个字符串类型的 `type` 字段来表示将要执行的动作。多数情况下，`type` 会被定义成字符串常量。当应用规模越来越大时，建议使用单独的模块或文件来存放 action。 

##1.2 Reducer
有了 Action 来传达需要操作的信息，那么就需要有根据这个信息来做对应操作的方法，这就是 Reducer。

## 1.3 Store
Action 用来表达操作消息，Reducer 根据 Action 来更新 State。

在 Redux 项目中，Store 是单一的。维护着一个全局的 State，并且根据 Action 来进行事件分发处理 State。可以看出 Store 是一个把 Action 和 Reducer 结合起来的对象。 

# 二、使用redux

实现一个couter的例子。分别包含了,reducer,store,action。

```html
<div>
      <p>
        Clicked: <span id="value">0</span> times
        <button id="increment">+</button>
        <button id="decrement">-</button>
      </p>
</div>
```

```js
       //reducer,通过action改变状态
       function counter(state, action) {
        if (typeof state === 'undefined') {
          return 0
        }
        switch (action.type) {
          case 'INCREMENT':
            return state + 1
          case 'DECREMENT':
            return state - 1
          default:
            return state
        }
      }

      //store,存储所有的状态
      //创建一个 Redux store 来以存放应用中所有的 state。
      var store = Redux.createStore(counter)
      var valueEl = document.getElementById('value')
    
      //渲染UI
      function render() {
        valueEl.innerHTML = store.getState().toString()
      }
      render();
      //事件触发后绑定改变状态处理的函数
      store.subscribe(render);

      //action,事件触发的动作
      document.getElementById('increment')
        .addEventListener('click', function () {
          store.dispatch({ type: 'INCREMENT' })
        })

      document.getElementById('decrement')
          .addEventListener('click', function () {
          store.dispatch({ type: 'DECREMENT' })
        })
```

## 2.1 store 的使用

**Store** 就是把它们联系到一起的对象。Store 有以下职责：

- 维持应用的 state；
- 提供 [`getState()`](https://cn.redux.js.org/docs/api/Store.html#getState) 方法获取 state；
- 提供 [`dispatch(action)`](https://cn.redux.js.org/docs/api/Store.html#dispatch) 方法更新 state；
- 通过 [`subscribe(listener)`](https://cn.redux.js.org/docs/api/Store.html#subscribe) 注册监听器;
- 通过 [`subscribe(listener)`](https://cn.redux.js.org/docs/api/Store.html#subscribe) 返回的函数注销监听器。



创建一个 Redux [store](https://cn.redux.js.org/docs/api/Store.html) 来以存放应用中所有的 state。
```react
var store = Redux.createStore(counter)
```
**其他API：**

### [`getState()`](https://cn.redux.js.org/docs/api/Store.html#getState)

返回应用当前的 state 树。
它与 store 的最后一个 reducer 返回值相同。

### [`dispatch(action)`](https://cn.redux.js.org/docs/api/Store.html#dispatch)

分发 action。这是触发 state 变化的惟一途径。

将使用当前 [`getState()`](https://cn.redux.js.org/docs/api/Store.html#getState) 的结果和传入的 `action` 以同步方式的调用 store 的 reduce 函数。它的返回值会被作为下一个 state。从现在开始，这就成为了 [`getState()`](https://cn.redux.js.org/docs/api/Store.html#getState) 的返回值，同时变化监听器(change listener)会被触发。

### [`subscribe(listener)`](https://cn.redux.js.org/docs/api/Store.html#subscribe)

添加一个变化监听器。每当 dispatch action 的时候就会执行，state 树中的一部分可能已经变化。你可以在回调函数里调用 [`getState()`](https://cn.redux.js.org/docs/api/Store.html#getState) 来拿到当前 state。

###` createStore`

1. `reducer` *(Function)*: A [reducing function](https://redux.js.org/glossary#reducer) that returns the next [state tree](https://redux.js.org/glossary#state), given the current state tree and an [action](https://redux.js.org/glossary#action) to handle.
2. [`preloadedState`] *(any)*: The initial state. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. If you produced `reducer` with [`combineReducers`](https://redux.js.org/api-reference/combinereducers), this must be a plain object with the same shape as the keys passed to it. Otherwise, you are free to pass anything that your `reducer` can understand.
3. [`enhancer`] *(Function)*: The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc. The only store enhancer that ships with Redux is [`applyMiddleware()`](https://redux.js.org/api-reference/applymiddleware)

