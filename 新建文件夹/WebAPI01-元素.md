# 一 DOM
Web API ,应用程序接口。
- DOM API,操作HTML标签,文档对象模型(document object model)
- BOM API,操作浏览器
- DOM中常用的操作包括：获取元素、添加元素、操作元素、注册事件

## 1.1 获取元素
HTML页面中的标签、属性都会被抽象称为一个对象。通过操作对象达到操作页面的目的。部分如下：
- document对象,整个页面
- document.doucmentElement对象，html标签
- document.body对象，body标签
- eliment对象,其他标签, ` 注：元素，js对HTML标签的别称`


```js
//调试的两个方法区别
conslole.log()打印标签
consloge.dir()打印对象
```

**获取元素的方法：**
| 方法名称                   | 功能             | 输入       | 输出      | 调用者               |
| ---------------------- | -------------- | -------- | ------- | ----------------- |
| getElementById()       | 通过id获取元素       | HTML标签ID | 对象/null | document          |
| getElementsByTagName() | 通过标签名获取元素      | HTML标签   | 伪数组     | document/eliement |
| getElementsByClassName | 根据类名获取元素       | 类名       | 伪数      | document/eliement |
| getElementsByName()    | 根据名字获取元素       | 名称       | 伪数组     | document          |
| querySelector()        | 选择器获取元素        | 选择器      | 对象/null | document/eliement |
| querySelectorAll()     | 获取所有选择器符合条件的元素 | 选择器      | 伪数组     | document/eliement |
示例：
```js
//html
<div id="box" class="box-c" name="box-n">
//js
var box = document.getElementById('box');
var boxs = document.getElementsByTagName('div');
var box_class = document.getElementsByClassName('box-c');
var names = document.getElementsByName('box-n');
var box_selec = document.querySelector('.box-c');
var box_selecs = document.querySelectorAll('.box-c');
```

注意：
1)a标签的默认属性会属性整个页面,解决仅需要在事件处理函数增加`return false;`即可。
## 1.2 元素事件

事件三要素
- 事件源,作用的标签
- 事件名,事件类型,点击、经过...
- 事件处理函数,事件发生后的处理

示例：
```js
// 获取事件源
var box = document.getElementById('box');
// 确定事件类型和事件处理函数
box.onmouseover = function () {console.log('经过');}
```

## 1.3 操作元素属性
**1) 常用的非表单元素属性有:**
- href  超链接的url地址
- title  标签的标题属性
- id      标签的id属性
- src     引入外部文件的路径
- innerText   标签内的文本
- innerHTML   标签内的内容

```js
//html
<img src = "1.jpg" title="示例" id="img">
//js
var img = document.getElementById('img');
console.log(img.title) // 获取属性的值
img.title = '动态修改'  //设置属性的值
img.src = '2.jpg' //这行代码执行之后,会展示2.jpg的图片
```

**2)innerText  和 innerHTML**   

- 给双标签的元素设置内容/获取双标签里面的内容
- innerText,仅读/写文本内容
- innerHTML,识别HTML标签读/写内容

```js
//----------html---------
<div id="box">
  123
  <p>456</p>
  </div>
//----------js------------
//打印内容：
//        123
//        <p>456</p>
var box = document.getElementById('box');
console.log(box.innerHTML);

//打印内容：
//123
//456
console.log(box.innerText);
```


<全文结束>







