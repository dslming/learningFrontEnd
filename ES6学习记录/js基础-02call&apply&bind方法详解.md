# call、apply方法详解

> call()、apply()、bind()都是函数对象的一个方法，它们的作用都是改变函数的调用对象。它的使用极大的简化了代码的调用。
----------

### 一、为什么需要call
JavaScript 的一大特点是，函数存在「**定义时上下文**」和「**运行时上下文**」以及「**上下文是可以改变的**」这样的概念。先来一个栗子：

```js
function fruits() {}
 
fruits.prototype = {
    color: "red",
    say: function() {
        console.log("My color is " + this.color);
    }
}
 
var apple = new fruits;
apple.say();    //My color is red
```

但是如果我们有一个对象banana= {color : "yellow"} ,我们不想对它重新定义 say 方法，那么我们可以通过 call 或 apply 用 apple 的 say 方法：
```js
banana = {
    color: "yellow"
}
apple.say.call(banana);     //My color is yellow
apple.say.apply(banana);    //My color is yellow
```
所以，可以看出 call 和 apply 是为了动态改变 this 而出现的，当一个 object 没有某个方法（本栗子中banana没有say方法），但是其他的有（本栗子中apple有say方法），我们可以借助call或apply用其它对象的方法来操作。
###二、call 和 apply区别
对于 apply、call 二者而言，作用完全一样，只是接受参数的方式不太一样。例如，有一个函数定义如下：
```js
var func = function(arg1, arg2) {   
};
```

就可以通过如下方式来调用：
```js
func.call(this, arg1, arg2); 
func.apply(this, [arg1, arg2])
```
其中 this 是你想指定的上下文，他可以是任何一个 JavaScript 对象(JavaScript 中一切皆对象)，call 需要把参数按顺序传递进去，而 apply 则是把参数放在数组里。　　

### 三、应用场景

#### 1、数组之间的追加

```js
var array1 = [12 , "foo" , {name "Joe"} , -2458];  
var array2 = ["Doe" , 555 , 100];  
Array.prototype.push.apply(array1, array2);  
/* array1 值为  [12 , "foo" , {name "Joe"} , -2458 , "Doe" , 555 , 100] */
```

#### 2、获取数组中的最值
number 本身没有 max 方法，但是 Math 有，我们就可以借助 call 或者 apply 使用其方法。
```js
var  numbers = [5, 458 , 120 , -215 ];  
var maxInNumbers = Math.max.apply(Math, numbers),   //458
maxInNumbers = Math.max.call(Math,5, 458 , 120 , -215); //458
```

#### 3、验证是否是数组
前提是toString()方法没有被重写过。
```js
functionisArray(obj){  
    return Object.prototype.toString.call(obj) === '[object Array]' ;
}
```

#### 4、类（伪）数组使用数组方法
Javascript中存在一种名为伪数组的对象结构。比较特别的是 arguments 对象，还有像调用 getElementsByTagName , document.childNodes 之类的，它们返回NodeList对象都属于伪数组。不能应用 Array下的 push , pop 等方法。

但是我们能通过 Array.prototype.slice.call 转换为真正的数组的带有 length 属性的对象，这样 domNodes 就可以应用 Array 下的所有方法了。

```js
var domNodes = Array.prototype.slice.call(document.getElementsByTagName("*"));
```



# bind方法详解

#### 1、定义

**1)概念**

对于给定函数，创建具有与原始函数相同的主体的绑定函数。在绑定函数中，this 对象将解析为传入的对象。绑定函数具有指定的初始参数。**改变this指向。**

**2)定义**

```
function.bind(thisArg[,arg1[,arg2[,argN]]])
```

**3)参数**

- *function*

  必选。一个函数对象。

- *thisArg*

  必选。   **this** 关键字可在新函数中引用的对象。

- *arg1*[,*arg2*[,*argN*]]]

  可选。要传递到新函数的参数的列表。

- 返回值
  改变了this指向的新函数。

#### 2、示例

```js
 var obj1 = {name:"obj1"}
 function sayName(){

   console.log(this.name);
 }
// 将this指向由winddow改为 obj1
var obj1Fun = sayName.bind(obj1);
obj1Fun();// obj1
```



<全文结束>