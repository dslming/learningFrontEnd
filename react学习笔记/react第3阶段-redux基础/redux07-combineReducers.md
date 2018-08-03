# `combineReducers(reducers)`

随着应用变得越来越复杂，可以考虑将 [reducer 函数](https://cn.redux.js.org/docs/Glossary.html#reducer) 拆分成多个单独的函数，拆分后的每个函数负责独立管理 [state](https://cn.redux.js.org/docs/Glossary.html#state) 的一部分。

`combineReducers` 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 [`createStore`](https://cn.redux.js.org/docs/api/createStore.html) 方法。

合并后的 reducer 可以调用各个子 reducer，并把它们返回的结果合并成一个 state 对象。 **由 combineReducers() 返回的 state 对象，会将传入的每个 reducer 返回的 state 按其传递给 combineReducers() 时对应的 key 进行命名**