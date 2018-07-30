---
typora-copy-images-to: media
---

> 第02阶段.前端基本功.前端基础.jquery插件

## 学习目标


* 了解


    * 什么是插件


* 重点

  * 会下载插件

  * 会通过文档使用插件

  * 自己会制作jquery插件

    ​

    ​



# 插件

>Plug-in

**概念: ** 是一种遵循一定规范的应用程序接口编写出来的程序

**通俗理解:  **实现具体需求的js库

## 1. jquery插件

> jquery不可能包含所有的功能，我们可以通过插件扩展jquery的功能。
>
> jQuery有着丰富的插件，使用这些插件能给jQuery提供一些额外的功能。



### 1.1 jquery.color.js

> animate不支持颜色的渐变，但是使用了jquery.color.js后，就可以支持颜色的渐变了。

下载地址:https://github.com/jquery/jquery-color

使用插件的步骤

```javascript
1. 引入jQuery文件
2. 引入插件（如果有用到css的话，需要引入css）
3. 使用插件
```

```javascript
<!-- 1. 引入 jquery -->
<script src="jquery-1.12.4.js"></script>
<!-- 2. 引入 插件 -->
<script src="jquery.color.js"></script>

<script>
  
  // 引入 jquery.color.js 就能让 animate 强化功能
  // 可以实现颜色渐变
  $(function () {
    $('div').animate({
      width: 400,
      height: 400,
      backgroundColor: 'blue'
    }, 2000)
  });

```



### 1.2 jquery.lazyload.js

下载地址:https://github.com/tuupola/jquery_lazyload/tree/1.x

文档网站:https://appelsiini.net/projects/lazyload/v1/

懒加载插件的使用

1. 引包

   ```css
   <script src="jquery-1.12.4.js"></script>
   <script src="jquery.lazyload.js" ></script>
   ```

2. 真图片地址, 设置给 data-original, 并给需要懒加载的图片加上统一的类( lazy )

   ```css
   <img class="lazy" data-original="02.gif" width="640" height="480">
   ```

3. 实例初始化

   ```js
   $('img.lazy').lazyload({
     effect : "fadeIn", // 加效果 slideDown  show
     event:'click;  //点击时加载
     placeholder : "/default.jpg",  //默认图 
   });
   ```

   ​

### 1.3 jquery.ui.js插件

jQueryUI专指由jQuery官方维护的UI方向的插件。

下载地址: http://jqueryui.com/download/

官方API：[http://api.jqueryui.com/category/all/](http://api.jqueryui.com/category/all/)

其他教程：[jQueryUI教程](http://www.runoob.com/jqueryui/jqueryui-tutorial.html)

基本使用:

```javascript
1.	引入jQueryUI的样式文件
2.	引入jQuery
3.	引入jQueryUI的js文件
4.	使用jQueryUI功能
```

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <!-- 2. 引入样式 -->
  <link rel="stylesheet" href="jquery-ui.css">
</head>
<body>

<!-- 1. 结构 -->
<!-- Accordion -->
<h2 class="demoHeaders">Accordion</h2>
<div id="accordion">
  <h3>First</h3>
  <div>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</div>
  <h3>Second</h3>
  <div>Phasellus mattis tincidunt nibh.</div>
  <h3>Third</h3>
  <div>Nam dui erat, auctor a, dignissim quis.</div>
</div>

<!-- 3. 引入 jquery 和 jquery.ui.js -->
<script src="jquery-1.12.4.js"></script>
<script src="jquery-ui.js"></script>

<!-- 4. 使用插件 -->
<script>
  // 初始化手风琴
  $( "#accordion" ).accordion();
</script>

</body>
</html>
```



### 1.4 jquery-fullPage 全屏切换插件

官方文档: https://github.com/alvarotrigo/fullPage.js

1. 引包

   ```html
   <link rel="stylesheet" href="jquery.fullPage.css">
   <script src="js/jquery-1.8.3.min.js"></script>
   <script src="js/jquery.fullPage.js"></script>
   ```

2. 结构

   ```css
   <div id="box">
     <div class="section page1">第一屏</div>
     <div class="section page2">第二屏</div>
     <div class="section page3">第三屏</div>
     <div class="section page4">第四屏</div>
   </div>
   ```

3. 实例初始化

   ```js
   $(function() {
     $('#box').fullpage();
   })
   ```

   ​

## 2. 依赖于 jquery 的插件

### 2.1 弹出层插件 layer

官网:http://layer.layui.com/

获得 layer 文件包后，解压并将 *layer 整个文件夹*（不要拆分结构） 存放到你项目的任意目录，如果你的项目中已经有了jquery, 使用时，*只需引入 layer.js 即可。*

1. 引包

   ```css
   <script src="jQuery的路径"></script> 
   <!-- 你必须先引入jQuery1.8或以上版本 -->
   <script src="layer.js的路径"></script>
   ```

2. 调用方法即可

   弹出一个提示层

   ```javascript
   layer.msg('hello');
   ```

3. 常用配置参数

   type - 基本层类型

   ```js
   类型：Number，默认：0
   0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
   ```

   title - 标题

   ```js
   1. 传入普通字符串
   2. 可以title样式['文本', 'font-size:18px;']
   3. 不显示标题栏, title: false
   ```

   content - 内容

   ```js
   类型：String/DOM/Array，默认：''
   1. 传普通字符串
   2. 传jQuery对象
   3. iframe 层
   ```

   area - 宽高

   ```js
   类型：String/Array，默认：'auto'
   1. 字符串, 设宽, 高度自适应
   2. 数组 [ 宽, 高 ]
   ```

   ​

   ​

## 3. 原生 js 插件

下载 : http://www.jq22.com/jquery-info3632

使用: http://www.jq22.com/demo/sHover-master20150718/#

### sHover鼠标感应进入插件

使用方式:

1. 引包

   ```css
   <script src="js/sHover.js"></script>
   ```

2. 结构样式

   ```css
   <div class="example1">
    	<span class="intro1"></span>
   </div>

   .example1{	
   	width: 300px;
   	height: 300px;
   	background:powderblue;
   }
   .intro1{
   	background:firebrick;
   }
   ```

3. 实例化

   ```js
   var example1=new sHover("example1","intro1");
   ```

参数配置:

```javascript
// 实例初始化
var hoverExm = new sHover("h-item","h-info");
	hoverExm.set({
	// 设置滑动速度, 默认值为5，取值范围0-10
	speed: 7,
	// 设置透明度, 设置悬浮层的最终透明度，默认值为100，取值范围0-100
	opacity: 90,
	// 是否开启滑动时淡入淡出
	opacityChange: false
});
```





## 4. 制作 jquery 插件

思考: 如何给数组扩展方法  ?

```javascript
Array.prototype.XXX = function(){}
```

jQuery插件的原理是什么 ?

> 原理：大部分 jquery插件, 其实说白了就是给jquery原型增加一个新的方法，让jquery对象拥有某一个功能。

```javascript
// 通过给$.fn添加方法就能够扩展jquery对象
$.fn.pluginName = function() {};
```

怎么添加一个最基础的小插件 ?








