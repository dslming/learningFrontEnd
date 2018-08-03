> 中间件的引入

# 一、问题：记录日志

使用 Redux 的一个益处就是它让 state 的变化过程变的可预知和透明。每当一个 action 发起完成后，新的 state 就会被计算并保存下来。State 不能被自身修改，只能由特定的 action 引起变化。

试想一下，当我们的应用中每一个 action 被发起以及每次新的 state 被计算完成时都将它们记录下来，岂不是很好？当程序出现问题时，我们可以通过查阅日志找出是哪个 action 导致了 state 不正确。

![BjGBlES](G:\REACT\react学习笔记\react第3阶段-redux\img\BjGBlES.png)

## 1.1 解决：手动记录 

最直接的解决方案就是在每次调用 [`store.dispatch(action)`](http://cn.redux.js.org/docs/api/Store.html#dispatch) 前后手动记录被发起的 action 和新的 state。这称不上一个真正的解决方案，仅仅是我们理解这个问题的第一步。 

假设，你在创建一个 Todo 时这样调用：

```react
store.dispatch(addTodo('Use Redux'))
```
为了记录这个 action 以及产生的新的 state，你可以通过这种方式记录日志：
```react
const action = addTodo('Use Redux')

console.log('dispatching', action)
store.dispatch(action)
console.log('next state', store.getState())
```
虽然这样做达到了想要的效果，但是你并不想每次都这么干。 

## 1.2 解决：封装dispatch

你可以将上面的操作抽取成一个函数：

```
function dispatchAndLog(store, action) {
  console.log('dispatching', action)
  store.dispatch(action)
  console.log('next state', store.getState())
}
```

然后用它替换 `store.dispatch()`:

```
dispatchAndLog(store, addTodo('Use Redux'))
```

你可以选择到此为止，但是每次都要导入一个外部方法总归还是不太方便。



> **Monkey patch**
> 术语的定义取决于使用它的社区。在[Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language))，[[2\]](https://en.wikipedia.org/wiki/Monkey_patch#cite_note-2) [Python](https://en.wikipedia.org/wiki/Python_(programming_language))，[[3\]](https://en.wikipedia.org/wiki/Monkey_patch#cite_note-3)和许多其他[动态编程语言中](https://en.wikipedia.org/wiki/Dynamic_programming_language)，术语*猴子补丁*只是指在运行时对类或模块进行动态修改，其目的是为了修补现有的第三方代码作为解决方法一个错误或功能不符合要求。基于其不同的意图，其他形式的运行时修改类有不同的名称。例如，在[Zope](https://en.wikipedia.org/wiki/Zope)和[Plone中](https://en.wikipedia.org/wiki/Plone_(software))，安全补丁通常使用动态类修改来提供，但它们被称为*热修复*。[*需要引用* ] 

## 1.3 解决：猴子补丁 

如果我们直接替换 store 实例中的 dispatch 函数会怎么样呢？Redux store 只是一个包含一些方法的普通对象，同时我们使用的是 JavaScript，因此我们可以这样实现 dispatch 的 monkeypatch：
```react
const next = store.dispatch
store.dispatch = function dispatchAndLog(action) {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}
```
这离我们想要的已经非常接近了！无论我们在哪里发起 action，保证都会被记录。Monkeypatching 令人感觉还是不太舒服，不过利用它我们做到了我们想要的。 

# 二、记录崩溃

试想当发起一个 action 的结果是一个异常时，我们将包含调用堆栈，引起错误的 action 以及当前的 state 等错误信息通通发到类似于 [Sentry](https://getsentry.com/welcome/) 这样的报告服务中，不是很好吗？这样我们可以更容易地在开发环境中重现这个错误。实现一个记录崩溃的记录。

然而，将日志记录和崩溃报告分离是很重要的。理想情况下，我们希望他们是两个不同的模块，也可能在不同的包中。否则我们无法构建一个由这些工具组成的生态系统。（提示：我们正在慢慢了解 middleware 的本质到底是什么！）

如果按照我们的想法，日志记录和崩溃报告属于不同的模块，他们看起来应该像这样：

```react
function patchStoreToAddLogging(store) {
  const next = store.dispatch
  store.dispatch = function dispatchAndLog(action) {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }
}

function patchStoreToAddCrashReporting(store) {
  const next = store.dispatch
  store.dispatch = function dispatchAndReportErrors(action) {
    try {
      return next(action)
    } catch (err) {
      console.error('捕获一个异常!', err)
      Raven.captureException(err, {
        extra: {
          action,
          state: store.getState()
        }
      })
      throw err
    }
  }
}
```

 如果这些功能以不同的模块发布，我们可以在 store 中像这样使用它们：

```react
patchStoreToAddLogging(store)
patchStoreToAddCrashReporting(store)
```

尽管如此，这种方式看起来还是不是够令人满意。