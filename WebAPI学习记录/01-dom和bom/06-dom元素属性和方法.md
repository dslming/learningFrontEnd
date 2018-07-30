# 一、Element
Element（元素）接口是 Document的一个对象. 这个接口描述了所有相同种类的元素所普遍具有的方法和属性。 这些继承自Element并且增加了一些额外功能的接口描述了具体的行为. 例如,  HTMLElement 接口是所有HTML元素的基础接口， 而 SVGElement 接口是所有SVG元素的基本接口.
详细参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Element
利用Element的一些属性可以对元素进行位置控制,实现简单的操作。如放大镜等。

# 二、Element属性
所有属性继承至它的祖先接口 Node, 和它所扩展的接口 EventTarget, 并且从以下部分继承了属性ParentNode, ChildNode, NonDocumentTypeChildNode, 和Animatable.

## 2.1 clientWidth
**(1)概览**
Element.clientWidth 属性表示元素的内部宽度，以像素计。该属性包括内边距，但不包括垂直滚动条（如果有）、边框和外边距。
**(2)语法**
```js
var intElemClientWidth = element.clientWidth;
//intElemClientWidth 是一个整数，表示元素的 clientWidth。
```

## 2.2 clientHeight
**(1)概览**
Element.clientHeight这个属性是只读属性，对于没有定义CSS或者内联布局盒子的元素为0，同时它是元素内部的高度(单位像素)，包含内边距，但不包括水平滚动条、边框和外边距。
**(2)语法**
```js
var h = element.clientHeight;
//返回整数 h，表示 element 的 clientHeight（单位像素）。
```

## 2.3 scrollWidth
**(1)概览**
元素的scrollWidth只读属性以px为单位返回元素的内容区域宽度或元素的本身的宽度中更大的那个值。若元素的宽度大于其内容的区域（例如，元素存在滚动条时）, scrollWidth的值要大于clientWidth。
**(2)用法**
```js
var xScrollWidth = element.scrollWidth;
//xScrollWidth 的值是元素的内容宽度。
```

## 2.4 scrollHeight
**(1)概览**
Element.scrollHeight 这个只读属性是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。没有垂直滚动条的情况下，scrollHeight值与元素视图填充所有内容所需要的最小值clientHeight相同。包括元素的padding，但不包括元素的border和margin。scrollHeight也包括 ::before 和 ::after这样的伪元素。
**(2)用法**
```js
var intElemScrollHeight = document.getElementById(id_attribute_value).scrollHeight;
//intElemScrollHeight 存储着与元素scrollHeight像素值对应的一个整数。scrollHeight是一个只读属性。
```
**(3)扩展**
判定元素是否滚动到底?
```js
//如果元素滚动到底，下面等式返回true，没有则返回false.
element.scrollHeight - element.scrollTop === element.clientHeight
```

## 2.5 scrollTop
**(1)概览**
Element.scrollTop 属性可以获取或设置一个元素的内容垂直滚动的像素数。
一个元素的 scrollTop 值是这个元素的顶部到它的最顶部可见内容（的顶部）的距离的度量。当一个元素的内容没有产生垂直方向的滚动条，那么它的 scrollTop 值为0。
**(2)用法**
```js
// 获得滚动的像素数
var  intElemScrollTop = someElement.scrollTop;
//运行此代码后， intElemScrollTop 是一个整数，即element的内容向上滚动的像素数。
```
```js
// 设置滚动的距离
element.scrollTop = intValue
```
scrollTop 可以被设置为任何整数值，同时注意：
- 如果一个元素不能被滚动（例如，它没有溢出，或者这个元素有一个"non-scrollable"属性）， scrollTop将被设置为0。
- 设置scrollTop的值小于0，scrollTop 被设为0
- 如果设置了超出这个容器可滚动的值, scrollTop 会被设为最大值.

## 2.6 scrollLeft 
**(1)概览**
Element.scrollLeft 属性可以读取或设置元素滚动条到元素左边的距离。
注意如果这个元素的内容排列方向（direction） 是rtl (right-to-left) ，那么滚动条会位于最右侧（内容开始处），并且scrollLeft值为0。此时，当你从右到左拖动滚动条时，scrollLeft会从0变为负数（这个特性在chrome浏览器中不存在）。

**(2)用法**
```js
//获取滚动条到元素左边的距离
var sLeft = element.scrollLeft
//sLeft 是一个整数，代表元素滚动条距离元素左边多少像素。
```

```js
//设置滚动条滚动了多少像素
element.scrollLeft = 10;
```
scrollLeft 可以是任意整数，然而：
- 如果元素不能滚动（比如：元素没有溢出），那么scrollLeft 的值是0。
- 如果给scrollLeft 设置的值小于0，那么scrollLeft 的值将变为0。
- 如果给scrollLeft 设置的值大于元素内容最大宽度，那么scrollLeft 的值将被设为元素最大宽度。
#三、HTMLElement
HTMLElement 接口表示所有的 HTML 元素。一些HTML元素直接实现了HTMLElement接口，其它的间接实现HTMLElement接口.

# 四、 HTMLElement属性
继承自父接口Element和 GlobalEventHandlers的属性。
## 4.1 offsetHeight
(1)概览
HTMLElement.offsetHeight 是一个只读属性，它返回该元素的像素高度，高度包含该元素的垂直内边距和边框，且是一个整数。
​	通常，元素的offsetHeight是一种元素CSS高度的衡量标准，包括元素的边框、内边距和元素的水平滚动条（如果存在且渲染的话），不包含:before或:after等伪类元素的高度。
​	对于文档的body对象，它包括代替元素的CSS高度线性总含量高。浮动元素的向下延伸内容高度是被忽略的。 
(2)用法
```js
var intElemOffsetHeight = document.getElementById(id_attribute_value).offsetHeight;
//intelemoffsetheight是一个变量存储对应元素的offsetheight像素值的整数。offsetheight属性是只读的
```

## 4.2 offsetWidth
(1)概览
HTMLElement.offsetWidth 是一个只读属性，返回一个元素的布局宽度。一个典型的（译者注：各浏览器的offsetWidth可能有所不同）offsetWidth是测量包含元素的边框(border)、水平线上的内边距(padding)、竖直方向滚动条(scrollbar)（如果存在的话）、以及CSS设置的宽度(width)的值。
(2)用法
```js
var offsetWidth =element.offsetWidth;
```

## 4.3 offsetParent
(1)概览
HTMLElement.offsetParent 是一个只读属性，返回一个指向最近的（closest，指包含层级上的最近）包含该元素的定位元素。如果没有定位的元素，则 offsetParent 为最近的 table, table cell 或根元素（标准模式下为 html；quirks 模式下为 body）。当元素的 style.display 设置为 "none" 时，offsetParent 返回 null。offsetParent 很有用，因为 offsetTop 和 offsetLeft 都是相对于其内边距边界的。
(2)用法
```js
parentObj = element.offsetParent;
//parentObj 是一个对象引用，当前元素相对于该对象偏移（offset）。
```
## 4.4 offsetLeft
(1)概览
HTMLElement.offsetLeft 是一个只读属性，返回当前元素左上角相对于  HTMLElement.offsetParent 节点的左边界偏移的像素值。

对块级元素来说，offsetTop、offsetLeft、offsetWidth 及 offsetHeight 描述了元素相对于 offsetParent 的边界框。

然而，对于可被截断到下一行的行内元素（如 span），offsetTop 和 offsetLeft 描述的是第一个边界框的位置（使用 Element.getClientRects() 来获取其宽度和高度），而 offsetWidth 和 offsetHeight 描述的是边界框的尺寸（使用 Element.getBoundingClientRect 来获取其位置）。因此，使用 offsetLeft、offsetTop、offsetWidth、offsetHeight 来对应 left、top、width 和 height 的一个盒子将不会是文本容器 span 的盒子边界。
(2)用法
```js
left = element.offsetLeft;
//left 是一个整数，表示向左偏移的像素值。
```

## 4.5 offsetTop
(1)概览
HTMLElement.offsetTop 为只读属性，它返回当前元素相对于其 offsetParent 元素的顶部的距离。
(2)用法
```js
topPos = element.offsetTop;
//topPos 为返回的像素数。
```

# 五、小结
- offset, client, scroll系列返回的都是数字类型(Number)
- 返回的值是所有样式渲染到页面上的最终结果

# 六、Window
window 对象表示一个包含DOM文档的窗口，其 document 属性指向窗口中载入的 DOM文档 。使用 document.defaultView 属性可以获取指定文档所在窗口。
本节为 DOM window 对象中可用的所有方法、属性和事件提供简要参考。window 对象实现了 Window 接口，此接口继承自 AbstractView 接口。一些额外的全局函数、命名空间、对象、接口和构造函数与 window 没有典型的关联，但却是有效的，它们在  JavaScript参考 和 DOM参考 中列出。

在标签浏览器（比如Firefox）中，每个标签具有自己的 window 对象（如果你在开发扩展，浏览器窗口也是一个独立的 window ，详情参见 Working with windows in chrome code）。也就是说，同一个窗口的标签之间不会共享一个 window 对象。有一些方法，如 window.resizeTo 和 window.resizeBy 之类的方法会作用于整个窗口而不是 window 对象所属的那个标签。一般而言，如果无法恰当地作用于标签，则会将其作用于窗口。

# 七、window属性
## 7.1 window.innerHeight 
浏览器窗口的视口（viewport）高度（以像素为单位），如果存在水平滚动条，则包括它。
```js
var intViewportHeight = window.innerHeight;
//intViewportHeight 为浏览器窗口的视口的高度。
```
window.innerHeight 属性为只读，且没有默认值。
## 7.2 window.innerWidth
浏览器视口（viewport）宽度（单位：像素），如果存在垂直滚动条则包括它。
```js
var intViewportWidth = window.innerWidth;
```

## 7.3 window.pageYOffset (scrollY)
返回文档在垂直方向已滚动的像素值。

## 7.4 window.pageXOffset(scrollX)  
左侧滚动出去的距离。


# 八、综合案例
## 8.1 窗口拖拽(1)
```js
<!DOCTYPE html>
<html>

<head lang="en">
  <meta charset="UTF-8">
  <title></title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .login-header {
      width: 100%;
      text-align: center;
      height: 30px;
      font-size: 24px;
      line-height: 30px;
    }

    ul,
    li,
    ol,
    dl,
    dt,
    dd,
    div,
    p,
    span,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a {
      padding: 0px;
      margin: 0px;
    }

    .login {
      width: 512px;
      height: 280px;
      position: absolute;
      border: #ebebeb solid 1px;
      left: 50%;
      right: 50%;
      background: #ffffff;
      box-shadow: 0px 0px 20px #ddd;
      z-index: 9999;
      margin-left: -256px;
      margin-top: 140px;
      display: none;
    }

    .login-title {
      width: 100%;
      margin: 10px 0px 0px 0px;
      text-align: center;
      line-height: 40px;
      height: 40px;
      font-size: 18px;
      position: relative;
      cursor: move;
      -moz-user-select: none;
      /*火狐*/
      -webkit-user-select: none;
      /*webkit浏览器*/
      -ms-user-select: none;
      /*IE10*/
      -khtml-user-select: none;
      /*早期浏览器*/
      user-select: none;
    }

    .login-input-content {
      margin-top: 20px;
    }

    .login-button {
      width: 50%;
      margin: 30px auto 0px auto;
      line-height: 40px;
      font-size: 14px;
      border: #ebebeb 1px solid;
      text-align: center;
    }

    .login-bg {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0px;
      left: 0px;
      background: #000000;
      filter: alpha(opacity=30);
      -moz-opacity: 0.3;
      -khtml-opacity: 0.3;
      opacity: 0.3;
      display: none;
    }

    a {
      text-decoration: none;
      color: #000000;
    }

    .login-button a {
      display: block;
    }

    .login-input input.list-input {
      float: left;
      line-height: 35px;
      height: 35px;
      width: 350px;
      border: #ebebeb 1px solid;
      text-indent: 5px;
    }

    .login-input {
      overflow: hidden;
      margin: 0px 0px 20px 0px;
    }

    .login-input label {
      float: left;
      width: 90px;
      padding-right: 10px;
      text-align: right;
      line-height: 35px;
      height: 35px;
      font-size: 14px;
    }

    .login-title span {
      position: absolute;
      font-size: 12px;
      right: -20px;
      top: -30px;
      background: #ffffff;
      border: #ebebeb solid 1px;
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
  </style>
</head>

<body>
  <div class="login-header">
    <a id="link" href="javascript:;">点击，弹出登录框</a>
  </div>
  <div id="login" class="login">
    <div id="title" class="login-title">登录会员
      <span>
        <a id="closeBtn" href="javascript:void(0);" class="close-login">关闭</a>
      </span>
    </div>
    <div class="login-input-content">
      <div class="login-input">
        <label>用户名：</label>
        <input type="text" placeholder="请输入用户名" name="info[username]" id="username" class="list-input">
      </div>
      <div class="login-input">
        <label>登录密码：</label>
        <input type="password" placeholder="请输入登录密码" name="info[password]" id="password" class="list-input">
      </div>
    </div>
    <div id="loginBtn" class="login-button">
      <a href="javascript:void(0);" id="login-button-submit">登录会员</a>
    </div>
  </div>
  <!-- 遮盖层 -->
  <div id="bg" class="login-bg"></div>


</body>

</html>
<script>
  // 获取元素
  var link = document.getElementById('link'); //点击的文字
  var bg = document.getElementById('bg'); //遮盖层
  var login = document.getElementById('login'); //登录框
  var title = document.getElementById('title'); //登录框的标题
  var closeBtn = document.getElementById('closeBtn');

  //1. 点击文字,让登录框展示, 还要一个遮盖层
  link.onclick = function () {
    login.style.display = 'block';
    bg.style.display = 'block';
  }
  //2. 点击登录框的关闭按钮,让登录框消失, 遮盖层也消失

  closeBtn.onclick = function () {
    login.style.display = 'none';
    bg.style.display = 'none';
  }

  //3. 拖动登录框,并且要限制位置

  //3.1 给title注册mousedown事件,然后在鼠标按下的事件中给docuement注册鼠标移动事件
  title.onmousedown = function (e) {
    e = e || event;
    //获取鼠标按下时的坐标
    var x = e.clientX;
    var y = e.clientY;

    //获取鼠标按下时,login的位置
    var posX = login.offsetLeft;  //定位 + margin
    var posY = login.offsetTop;
    console.log(posX);
    console.log(posY);

    document.onmousemove = function (e) {
      // 3.2 计算鼠标移动的距离    获取鼠标移动时的坐标 -  获取按下时鼠标的坐标  --> 鼠标移动的距离
      e = e || event;
      var moveX = e.clientX;
      var moveY = e.clientY;
      
      //计算鼠标移动的距离
      var targetX = moveX - x;
      var targetY = moveY - y;

       //3.3 要给login重新设置位置 按下时login的位置 + 鼠标移动的那段距离
      
      //最终login的位置
      var finalX = posX + targetX;
      var finalY = posY + targetY;

      //增加拖动判断
      var minX = 0;
      var maxX = window.innerWidth - login.offsetWidth-21;
      var minY = 0+21;
      var maxY = window.innerHeight - login.offsetHeight;

      if(finalX < minX){
        finalX = minX;
      }

      if(finalY < minY){
        finalY = minY;
      }

      if(finalX > maxX){
        finalX = maxX;
      }

      if(finalY > maxY){
        finalY = maxY;
      }
      

      //给login设置新的位置
      //此时final的值包含原来margin
      login.style.left = finalX  + 256 + 'px';
      login.style.top = finalY - 140 + 'px';

    }

  }

  //鼠标抬起,不能拖动
  document.onmouseup = function(){
    document.onmousemove = null;
  }

 
</script>
```
## 8.2窗口拖拽(2)
```js
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }
    
    .nav {
      height: 30px;
      background: #036663;
      border-bottom: 1px solid #369;
      line-height: 30px;
      padding-left: 30px;
    }
    
    .nav a {
      color: #fff;
      text-align: center;
      font-size: 14px;
      text-decoration: none;
      
    }
    
    .d-box {
      width: 400px;
      height: 300px;
      border: 5px solid #eee;
      box-shadow: 2px 2px 2px 2px #666;
      position: absolute;
      top: 40%;
      left: 40%;
      background-color: white;
      
      /* 不让文字被选中 */
      -webkit-user-select:none;
      -moz-user-select:none;
      -ms-user-select:none;
      user-select:none;
    }
    
    .hd {
      width: 100%;
      height: 25px;
      background-color: #7c9299;
      border-bottom: 1px solid #369;
      line-height: 25px;
      color: white;
      cursor: move; /*将鼠标编程移动标示*/
    }
    
    #box_close {
      float: right;
      cursor: pointer;
    }
  </style>
</head>
<body>
<div class="nav">
  <a href="javascript:void(0);" id="register">注册信息</a>
</div>
<div class="d-box" id="d_box">
  <div class="hd" id="drop">注册信息 (可以拖拽)
    <span id="box_close">【关闭】</span>
  </div>
  <div class="bd"></div>
</div>
</body>
</html>
<script>

    //需求: 在drop里面 鼠标按下,一直按下,然后鼠标移动多少,box移动多少


    // 1.获取元素
    var drop = document.getElementById('drop');
    var box = document.getElementById('d_box');

    //2. 要给drop注册事件 mousedown  
    drop.onmousedown = function(e){
        e = e|| event;
        //获取鼠标当前的位置
        var startX = e.clientX;
        var startY = e.clientY;

        //获取当前盒子的坐标
        var boxX = box.offsetLeft;
        var boxY = box.offsetTop;

        document.onmousemove = function(e){
           //获取鼠标移动最后的距离
           var lastX = e.clientX;
           var lastY = e.clientY;
           console.log(lastX);

           var tarX = lastX - startX;
           var tarY = lastY - startY;

           box.style.left = boxX + tarX + 'px';
           box.style.top = boxY + tarY + 'px';
        }
    }

    // 3、移除鼠标移动事件
    drop.onmouseup = function(){
      document.onmousemove = null;
    }
</script>
```
## 8.3 放大镜效果

```js
<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <!--<link rel="stylesheet" href="css/index.css">-->
    <style>
        img {
            display: block;
        }

        * {
            margin: 0;
            padding: 0;
        }

        .box {
            width: 350px;
            height: 350px;
            margin: 100px;
            border: 1px solid #ccc;
            position: relative;
        }

        .big {
            width: 400px;
            height: 400px;
            position: absolute;
            top: 0;
            left: 360px;
            border: 1px solid #ccc;
            overflow: hidden;
            display: none;
        }

        .big img {
            position: absolute;

        }

        .mask {
            width: 175px;
            height: 175px;
            background: rgba(255, 255, 0, 0.4);
            position: absolute;
            top: 0px;
            left: 0px;
            cursor: move;
            display: none;
        }

        .small {
            position: relative;
        }
    </style>
</head>

<body>
    <div class="box" id="box">
        <div class="small" id="small" style="border:1px solid blue">
            <img src="images/small.jpg" width="350" alt="" />
            <div class="mask" id="mask"></div>
        </div>
        
        <div class="big" id="big" style="border:1px solid blue">
            <img src="images/big.jpg" width="800" alt="" id="img" />
        </div>
    </div>
</body>


<script>
    //获取元素
    var box = document.getElementById('box');
    var small = document.getElementById('small');
    var mask = document.getElementById('mask');
    var big = document.getElementById('big');
    var img = document.getElementById('img');

    // 1. 鼠标移入到small的时候,mask 和big展示
    small.onmouseover = function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    }
    //鼠标移出,mask 和big隐藏
    small.onmouseout = function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    }

    //2. 鼠标在small中移动, mask跟着鼠标移动
    //2.1 mask跟着鼠标动
    //2.2 只能在small里面动
    //3. mask在small中移动, 对应的big中的img也要那找比例跟着移动

    small.onmousemove = function (e) {
        //2.1 mask跟着鼠标动
        //获取当前鼠标的坐标
        var mosePoseX = e.clientX;
        var mosePoseY = e.clientY;

        //获取mask的坐标
        var maskPoseX = mask.offsetLeft;
        var maskPoseY = mask.offsetTop;

        //当前可视区的坐标 - 父盒子的坐标 = 鼠标坐标在small盒子的坐标
        var targetX = mosePoseX - box.offsetLeft;
        var targetY = mosePoseY - box.offsetTop;

        //让鼠标在mask中心显示
        targetX -= mask.offsetWidth/2;
        targetY -= mask.offsetHeight/2;

        //设置mask的移动范围
        var minX = 0;
        var minY = 0;
        var maxX = small.offsetWidth - mask.offsetWidth;
        var maxY = small.offsetHeight - mask.offsetHeight;

        targetX = targetX < minX ? minX: targetX;
        targetY = targetY < minY ? minY: targetY;

        targetX = targetX > maxX ? maxX: targetX;
        targetY = targetY > maxY ? maxY: targetY;

        //重新设置mask的坐标
        mask.style.left = targetX  + 'px';
        mask.style.top = targetY  + 'px';

        // 3.mask在small中移动, 对应的big中的img也要那找比例跟着移动
        var imgPosX = targetX/maxX*(img.offsetWidth - big.offsetWidth);
        var imgPosY = targetY/maxY*(img.offsetHeight - big.offsetHeight);
        img.style.left = - imgPosX + 'px';
        img.style.top = - imgPosY + 'px';

    }

   
    
</script>

</html>
```

<全文结束> 