# 一、组件内部状态
​	组件内部状态也被称为局部状态,允许保存、删除、修改存储在组件内部的属性。使用ES6类组件可以在构造函数中初始化组件的状态。使用ES6编写的组件有构造函数时,需要强制调用super()方法。

```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

详细参考：http://www.css88.com/react/docs/state-and-lifecycle.html

