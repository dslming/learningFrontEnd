React定义:
>用来实现响应式UI渲染的方式。将状态从展现给用户的UI中分离出来。将UI“打散”成易于重用、扩展和维护的组件。


# 一、react.js 工程建立

## 1.1 工程创建

```
//安装环境
npm install -g create-react-app
```
```
//构建工程
create-react-app hello-react
```

```
//进入工程后就可以启动工程了
cd hello-react
npm start
```
# 二、react基础

## 2.1 React变量

`React` 是 React 库的入口。如果你用 `script` 标签来加载 React，这些顶级 API 都在 `React` 这个全局变量上。如果你在 npm 下使用 ES6 ，你可以这样写 `import React from 'react'` 。如果你在 npm 下使用 ES5，你可以这样写 `var React = require('react')` 。

## 2.2 ReactDOM变量

如果使用 `` 标签加载 React  ，这些在 `ReactDOM` 上的顶层 API 全局可用。 如果你使用 ES6 与 npm ，你可以写 `import ReactDOM from 'react-dom'`。如果你使用 ES5 与 npm ，你可以写 `var ReactDOM = require('react-dom')` 。

render():
渲染一个 React 元素到由 `container` 提供的 DOM 中，并且返回组件的一个 [引用(reference)](http://www.css88.com/react/docs/more-about-refs.html) 

## 2.3 代码分析
index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```
- 简单说,ReactDOM.render()会使用你的JSX来替换HTML中的一个DMO节点。
- ReactDOM.render()可以被多次调用
- 传入两个参数,第一个是准备渲染的JSX;第二个是渲染的位置。这个位置是一个id=“root”的元素,可以在public/index.html中找到这个id属性。

## 2.4 总结

- 组件类名必须首字母大写,从文件名到类名,不然报错。

<全文结束>