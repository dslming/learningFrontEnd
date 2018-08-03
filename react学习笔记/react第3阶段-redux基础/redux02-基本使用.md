# 一、Redux的基本原则

- 唯一数据源
- 保持状态只读
- 数据改变只能通过纯函数完成

## 1.1 唯一数据源
应用的状态数据应该只存储在唯一的一个Store上。
整个应用只保持一个Store，所有组件的数据源就是这个Store上的状态。
## 1.2 保持状态只读
不能直接修改，要修改Store的状态，必须通过派发一个action对象完成。
UI=render(state),驱动用户界面更改的是状态。但是改变状态的方法不是修改状态的值，而是创建一个新的状态对象返回给Redux,Redux完成新状态的组装。
## 1.3 数据改变只能通过纯函数
这里的纯函数就是reducer.

# 二、Redux实例

通过chapter-03/redux_basic    例子，引出react-reduc库。

功能：3个计数器和1个求和。

## 2.1 Action

在Action.js文件中：
```react
export const increment = (counterCaption) => {
  return {
    type: ActionTypes.INCREMENT,
    counterCaption: counterCaption
  };
};

export const decrement = (counterCaption) => {
  return {
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption
  };
};
```

定义了两个action的构造函数,每个都返回一个对象。counterCaption也是一个对象由action 组成。
返回对象展开为：

```react
{
    type：ActionTypes.INCREMENT,
        counterCaption:{
            action:xxx,
        }
}
```

## 2.2 Store

```react
const initValues = {
  'First': 0,
  'Second': 10,
  'Third': 20
};

// 处理函数和初始值
const store = createStore(reducer, initValues);
```

状态的初始值由

## 2.3 Reducer

```react
export default (state, action) => {
  const {counterCaption} = action;
  switch (action.type) {
    case ActionTypes.INCREMENT:
      console.log(state);//{First: 0, Second: 10, Third: 20}
      return {...state, [counterCaption]: state[counterCaption] + 1};
    case ActionTypes.DECREMENT:
      return {...state, [counterCaption]: state[counterCaption] - 1};
    default:
      return state
  }
}
```

这里，reducer应该是一个纯函数，不应该直接修改state的值。**所以每次都是通过新的state和action，返回一个新的state。**



## 2.4 View

组件结构：

![ControlPanel](G:\REACT\react学习笔记\react第3阶段-redux\img\ControlPanel.png)

由2个组件组成，Conter和Summary。

### 2.4.1 Conter

**1)引入全局的stroe**

```react
import store from '../Store.js';
```

**2)获取自己数据state**

```react
  getOwnState() {
    var obj =  {
      value: store.getState()[this.props.caption]
    };
    return obj;
  }
```

- **store.getState()**,返回应用当前的 state 树。
  内容为：{First: 0, Second: 10, Third: 20}
- **store.getState()[this.props.caption]**
  内容为：{value: 0} 

**3)为组件注册监听数据变化事件**

如果数据发生变化则重新渲染自己的UI。componentDidMount组件加载完成函数中注册监听事件。

```react
componentDidMount() {
store.subscribe(this.onChange);
}
```

**4)渲染UI**

在上一步中，只要store数据发生，就渲染自己的组件。

```react
 onChange() {
    this.setState(this.getOwnState());
  }
```

5)点击按钮派发action

```react
  onIncrement() {
    store.dispatch(Actions.increment(this.props.caption));
    console.log(this.props.caption);//First
  }
```

在点击事件中调用onIncrement函数，实现action派发。

store.dispatch调用后就会进入Reducer处理，根据action type，更新对应的state。

### 2.4.2 Summary

太简单，略。

<全文结束>