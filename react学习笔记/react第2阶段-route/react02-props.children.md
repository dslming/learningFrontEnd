**基本使用：**
一个组件的props正常都是键值对的一个对象，但是有一个特殊的，就是children.
它将拿到该组件内的所有节点。

举例：
```react
<A> 
	<div>hello</div>
    <div>word</div>
</A>
```
那么 A.props.children拿到的是两个div，hello和word。