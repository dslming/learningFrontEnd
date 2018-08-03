> 在创建React组件时,可声明一些函数,并让他们在组件的声明周期中的某些特定时间点被调用.了解每一个组件生命周期函数所扮演的角色以及他们的顺序,将可以在一个组件被创建或销毁时执行特定的操作.同时还应该根据需要去响应props或state的变化.

# 1 声明周期的阶段与函数

组件生命阶段:
- 组件加载
- state和props更改
- 触发更新
- 组件卸载



在一个具有许多组件的应用程序中，在组件被销毁时释放所占用的资源是非常重要的。

**加载阶段:**

```react
1) class constructor
2) componentWillMount
3) render
4) componentDidMount
```

**卸载阶段:**

```react
1) componentWillUnmount
```

**props更改:**

```react
1)componentWillReceiveProps
2)shouldComponentUpdate
3)componentWillUpdate
4)render
5)componentDidUpdate
```

**state更改:**

```react
1)shouldComponentUpdate
2)componentWillUpdate
3)render
4)componentDidUpdate
```



# 2 容器组件

数据的获取逻辑应当避免添加到已经负责其他事项的组件上.

所以应该创建一个新的有状态组件,专门负责和远端API通信,并将数据和回调以props的方式传递给下层组件.这种组件称为容器组件.

数据获取要在一个特定的组件生命周期里面获取数据:**componentDidMount**生命周期里.

<全文结束>