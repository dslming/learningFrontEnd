# 一、事件

> React 事件使用驼峰命名，而不是全部小写。
> 通过 JSX , 你传递一个函数作为事件处理程序，而不是一个字符串。



## 1.1 区别一：事件命名

在HTML中:

```html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

在React中:

```js
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

## 1.2 区别二：阻止默认行为

在HTML中:

```js
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```

在React中:

```js
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

## 1.3 区别三: 事件监听

当使用 React 时，你一般不需要调用 `addEventListener` 在 DOM 元素被创建后添加事件监听器。相反，只要当元素被初始渲染的时候提供一个监听器就可以了。

当使用一个 ES6 类 定义一个组件时，通常的一个事件处理程序是类上的一个方法。例如， Toggle 组件渲染一个按钮，让用户在 “ON” 和 “OFF” 状态之间切换：
```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 这个绑定是必要的，使`this`在回调中起作用
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```

在JSX回调中你必须注意 `this` 的指向。 在 JavaScript 中，类方法默认没有 [绑定](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind) 的。如果你忘记绑定 `this.handleClick` 并将其传递给`onClick`，那么在直接调用该函数时，`this` 会是 `undefined` 。

这不是 React 特有的行为；这是 [JavaScript 中的函数如何工作](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)的一部分。 一般情况下，如果你引用一个后面没跟 `()` 的方法，例如 `onClick={this.handleClick}` ，那你就应该 绑定(bind) 该方法。