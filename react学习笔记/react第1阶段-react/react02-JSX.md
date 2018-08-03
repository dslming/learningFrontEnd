# 一、JSX基本用法
## 1.1 基本用法

React的核心机制之一就是可以在内存中创建虚拟的DOM元素。React利用虚拟DOM来减少对实际DOM的操作从而提升性能。

```jsx
const element = <h1>Hello, world!</h1>;
```
这就是 JSX ，他是 JavaScrip 的一种扩展语法。我们推荐在 React 中使用这种语法来描述 UI 信息。JSX 可能会让你想起某种模板语言，但是它具有 JavaScrip 的全部能力。

JSX 可以生成 React “元素”。我们将在[下一章](http://www.css88.com/react/docs/rendering-elements.html)探索如何把它渲染到DOM上。下面你可以找到 JSX 的基础知识，以帮助您开始使用



## 1.2 插入表达式

```jsx
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
```
JS代码用`{}`包起来。

详细参考：http://www.css88.com/react/docs/introducing-jsx.html

# 二、列表(Lists) 

## 2.1 map函数

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
```

这里展示了map函数和箭头函数的用法。

## 2.2 多组件渲染
我们用 JavaScript 的 map() 函数将 numbers 数组循环处理。对于每一项，我们返回一个 <li> 元素。最终，我们将结果元素数组分配给 listItems：
```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
```
把整个 listItems 数组包含到一个 <ul> 元素，并渲染到 DOM：

```js
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```

## 2.3 基本列表组件

我们可以重构前面的例子到一个组件，它接受一个 `numbers` 数组，并输出一个元素的无序列表。

```js
function NumberList(props) {
  const numbers = props.num;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList num={numbers} />,
  document.getElementById('root')
);
```

- 这里有props的用法

## 2.4 key入门
我们在 numbers.map() 中赋值一个 key 给我们的列表元素，解决丢失 key 的问题。
```js
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

详细参考:http://www.css88.com/react/docs/lists-and-keys.html

<全文结束>


