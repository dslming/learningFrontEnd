# 一、元素基本属性
##1.1 设置属性

- 设置单个属性
  语法: **jQuery对象.attr('属性名', '属性值');

```javascript
//html
<div></div>

//js
$('div').attr('id', 'box');
$('div').attr('a', 1);
//执行完的结果
<div id="box" a="1"></div>    //w3c标准和自定义的都可以
```

- 设置多个属性

**语法: **jQuery对象.attr({

​	属性名: 属性值,

​	...

});

```javascript
//html
<div></div>

//js
$('div').attr({
    id : 'box',
    a : 1
});

//执行完的结果
<div id="box" a="1"></div>    //w3c标准和自定义的都可以
```

## 1.3 获取属性

**语法: **jQuery对象.attr('属性名');   返回属性的值, 如果没有这个属性,会返回undefined

```javascript
//html
<div id="box" a = "1" ></div>

//js
$('div').attr('id');  //box
$('div').attr('a');   //1
$('div').attr('index');  //undefined
```

## 1.4 移除属性

**语法: **jQuery对象.removeAttr('属性名');   参数不传就什么都不做

```javascript
//html
<div id="box" a = "1" ></div>

//js
$('div').removeAttr('id');

//执行完的结果
<div  a = "1" ></div>
```

## 1.5 prop方法 

注意：在jQuery1.6之后，对于checked、selected、disable这类boolean类型的属性来说，如果使用attr方法获取属性值，得到的不是true和false，而是checked以及undefined。，使用prop方法来获取或者设置checked、selected、disable这类的值。prop方法使用跟attr方法一样,但是prop无法操作自定义的属性。

- 设置属性

**语法: **jQuery对象.prop('属性名', 属性值);  

**语法: **jQuery对象.prop({

​	属性名 : 属性值,

​	...

});  

- 获取属性

**语法: **jQuery对象.prop('属性名');   返回true/false

## 1.6 属性小结

attr 方法可以操作自定义的属性
prop 操作checked、selected、disable这类boolean值类型的属性,不可以操作自定义的属性

#二、元素内容
## 2.1 表单元素

val()方法。

## 2.2 非表单元素
html(),会识别html结构
text(),只会识别文本

#三、元素特效属性
特效属性主要指元素的位置、尺寸等属性。
对应到原生WebAPI为：
offsetHeight
offsetWidth
offsetParent
offsetLeft
offsetTop

## 3.1 尺寸属性

在jquery里面可以非常方便的操作元素或者窗口的尺寸。

- height()与width()：设置或者返回元素的宽度及高度,返回结果是数值类型。(content宽高)
- innerWidth()与innerHeight()：返回元素的宽度及高度（content + padding）
- outerWidth()与outerHeigth()：返回元素的宽度及高度（content + padding + border）
- outerWidth(true)与outerHeight(true)：返回元素的宽度及高度（content + padding + border + margin）

## 3.2 位置属性

### 3.2.1 offset方法

**作用: **设置或者获取元素相对于文档document的位置。

- 设置位置

  **语法: ** jQuery对象.offset({left:num, top: num})


- 获取位置

  **语法: ** jQuery对象.offset()

**注意：**使用offset操作，如果元素没有设置定位(默认position:static)，则会把position修改为relative.会修改left、top。



### 3.2.2 position方法

**作用: ** 获取相对于其最近的有定位的父元素的位置。

**语法: ** jQuery对象.position()    返回值为对象：{left:num,top:num}

**注意：**position方法只能获取，不能设置



### 3.2.3 scrollTop方法

**作用: ** 设置或获取元素的内容相对顶部滚动出去的距离

- 设置距离

  **语法: ** jQuery对象.scrollTop(num);

  $(selector).scrollTop(100);

- 获取距离

  **语法: ** jQuery对象.scrollTop(); //返回num

### 3.2.4 scrollLeft 方法

**作用: ** 设置或获取元素的内容相对左侧滚动出去的距离

- 设置距离

  **语法: ** jQuery对象.scrollLeft(num);

  $(selector).scrollLeft(100);

- 获取距离

  **语法: ** jQuery对象.scrollLeft(); //返回num

### 3.2.5 小结
- offset 相对文档的坐标
- position相对定位父元素的坐标,只读
- scorllleft, scrolltop 元素内容滚动出去的距离

【案例：仿腾讯固定菜单栏案例】

#四、jQuery事件
>JavaScript中已经学习过了事件，但是jQuery对JavaScript事件进行了封装，增加并扩展了事件处理机制。jQuery不仅提供了更加优雅的事件处理语法，而且极大的增强了事件的处理能力。

## 4.1 事件绑定
**(1)简单事件注册**
click(handler)             单击事件
mouseenter(handler)       鼠标进入事件
mouseleave(handler)       鼠标离开事件
scroll(handler)                 滚动事件
**缺点：**一次只能绑定一个事件

**(2)on()方法**
语法: jQuery对象.on('事件类型', [ '选择器' ], [data] .'事件处理函数')
参数详解:
-  第一个参数：events，绑定事件的名称可以是由空格分隔的多个事件
-  第二个参数：selector, 执行事件的后代元素（可选），如果没有后代元素，那么事件将有自己执行。
-  第三个参数：data，传递给处理函数的数据，事件触发的时候通过event.data来使用（不常使用）
-  第四个参数：handler，事件处理函数
```javascript
//html
<div id="box">
    <span></span>
	<span></span>
</div>


//js
// 表示给$(selector)绑定代理事件，但必须是它的内部元素span才能触发这个事件
//只有点击span的时候才会触发这个事件
$('#box').on('click', 'span', function () {
    console.log(this); //span
});


// 表示给$(selector)绑定事件，并且由自己触发。
//点击box就会触发
 $('#box').on('click',function () {
     console.log(this); //div
 })
```
## 4.2事件移除 

**语法: ** jQuery对象.off(参数)

- 不传参数

  **作用:  **解绑匹配元素的所有事件

```javascript
//html
 <div id="box">
     <span>span1</span>
	 <span>span2</span>
 </div>

//js
$('#box').on('click mouseenter', 'span', function () {
    console.log(this); 
});

//解绑所有的事件
$('#box').off();

```



- 传入对应的事件类型

  **作用: **解绑匹配元素对应的事件

```javascript
//html
 <div id="box">
     <span>span1</span>
	 <span>span2</span>
 </div>

//js
$('#box').on('click mouseenter', 'span', function () {
    console.log(this); 
});


$('#box').off('click');  //click解绑, mouseenter没有解绑
```



- 传入off( “click”, “**” ); 

  **作用: **解绑所有代理的click事件，元素本身的事件不会被解绑

```javascript
//html
 <div id="box">
     <span>span1</span>
	 <span>span2</span>
 </div>

//js
$('#box').on('click mouseenter', 'span', function () {
    console.log(this);  //span的click不会触发
});
$('#box').on('click mouseenter',function () {
        console.log(this); //不影响
});
 $('#box').off('click', '**');
```
## 4.3事件触发

**1)简单事件触发**
作用: 手动触发我们给元素绑定的事件
语法:jQuery对象.click(); //触发click事件

**2) trigger方法触发事件**
作用:根据传入的参数手动触发我们给元素绑定的事件
语法: jQuery对象.trigger('事件名'); //触发指定的事件事件

**3)triggerHandler触发** 
作用: 触发指定事件，不触发浏览器行为,也不会产生冒泡
语法: jQuery对象.triggerHandler('事件名'); 

注意：
这个方法的行为表现与trigger类似，但有以下三个主要区别： 
- 他不会触发浏览器默认事件。trigger会触发submit默认事件, triggerHandler不会
- 只触发jQuery对象集合中第一个元素的事件处理函数。
- 这个方法的返回的是事件处理函数的返回值，而不是据有可链性的jQuery对象。此外，如果最开始的jQuery对象集合为空，则这个方法返回 undefined 。

## 4.4 事件对象
该事件对象指jQuery中的事件对象,与原生webAPI的事件对象不同。
| **对象属性**                    | **解释**                    |
| --------------------------- | ------------------------- |
| **event.type**              | 事件类型                      |
| **event.data**              | 存储绑定事件时传递的附加数据            |
| **event.target**            | 事件目标(点谁就是谁)               |
| **event.currentTarget**     | 当前DOM元素，等同于this           |
| **event.delegateTarget**    | 代理对象                      |
| **screenX和screenY**         | 对应设备屏幕最左上角的值              |
| **offsetX和offsetY**         | 点击的位置距离元素的左上角的位置          |
| **clientX和clientY**         | 距离可视区左上角的位置               |
| **pageX和pageY**             | 距离页面最顶部的左上角的位置（会计算滚动条的距离） |
| **event.keyCode**           | 键盘码                       |
| **event.stopPropagation()** | 阻止事件冒泡行为                  |
| **event.preventDefault()**  | 阻止浏览器默认行为                 |