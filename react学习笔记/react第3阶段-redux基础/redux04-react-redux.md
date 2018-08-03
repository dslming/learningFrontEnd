# 一、为什么需要react-redux

## 1.1 全局React Store

在Counter和Summary组件中，使用React Store 需要手动导入，

```react
import store from '../Store.js';
```

 如果应用的规模很大，不会所有的组件都放在一个代码仓库中，所以在组件中直接导入Store是非常不利于组件复用的。

## 1.2 将组件拆分为容器组件和展示组件



## 二、react-redux功能

## 2.1 connetc

连接容器组件和展示组件。

在Counter组件中，直接导出这样一句话。

```react
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

执行 结果依然是一个函数，所以才可以在后面又加一个圆括号，把 connect 函数执行的结果立 刻执行，这一次参数是 Counter 这个傻瓜组件。    **connect函数的结果是返回一个容器组件。**

connect函数中传入两个参数：

- **mapStateToProps**（傻瓜组件的输入） ,负责将通过state获得的数据映射到展示组件的this.props
- **mapDispatchToProps**（傻瓜组件的输出） ,负责将用户操作转化为Action的功能函数映射到展示组件的this.props

作为容器组件，要做两件事：

- 把Store上的状态转化为内层傻瓜组件的props
- 把内层组件中的用户动作转化为派送给Store的动作。

## 2.2 Provider

提供包含store的context。

