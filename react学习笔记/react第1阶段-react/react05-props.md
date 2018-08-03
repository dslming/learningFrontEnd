# 一、props组件属性

>即属性(Property)， 在代码中写作 props ， 故可用 props 指代 properties .

从定义上来说， 组件就像JavaScript的函数。组件可以接收任意输入(称为”props”)， 并返回 React 元素，用以描述屏幕显示内容。

## 1.1 属性只读

Props 是只读的,无论你用[函数或类](http://www.css88.com/react/docs/components-and-props.html#functional-and-class-components)的方法来声明组件, 它都无法修改其自身 props。

```
function sum(a, b) {
  return a + b;
}
```

这种函数称为 [“纯函数”](https://en.wikipedia.org/wiki/Pure_function) ，因为它们不会试图改变它们的输入，并且对于同样的输入,始终可以得到相同的结果。

反之， 以下是非纯函数， 因为它改变了自身的输入值：
```js
function withdraw(account, amount) {
  account.total -= amount;
}
```

**所有 React 组件都必须是纯函数，并禁止修改其自身 props 。**

当然， 应用 UI 总是动态的，并且随时有可以改变。 `state` 允许 React 组件在不违反上述规则的情况下, 根据用户操作, 网络响应, 或者其他随便什么东西, 来动态地改变其输出。



# 二、组件通信

## 2.1 父组件向子组件通信

React数据流动是单向的,父组件通过props向子组件传递需要的信息。props可以是一个对象,注意对象必须在`{}`中,例如在父组件中为子组件赋值`<ListItem obj={{"id":1,"name":"jack"}}>1</ListItem>

`。

例子:

```js
import React, { Component } from 'react';
import {render} from 'react-dom';

// Parent Component
class GroceryList extends Component {
  render() {
    return (
      <ul>
        <ListItem obj={{"id":1,"name":"jack"}}>1</ListItem>
      </ul>
    );
  }
}

// Child Component
class ListItem extends Component {
  render() {
    return (
      <li>
        {this.props.obj.id }
        {this.props.obj.name }
      </li>
    );
  }
}

render(<GroceryList />, document.getElementById('root'));

```



<全文结束>

