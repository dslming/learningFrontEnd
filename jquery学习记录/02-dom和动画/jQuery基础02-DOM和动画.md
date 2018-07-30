# 一、jQuery 操作样式
## 1.1 设置行内样式
通过css()方法操作样式。适用于样式少。
使用示例：
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <style>
        #box{
            /* float: left; */
            opacity: .5;
        }
    </style>
</head>

<body>
    <div id="box">1</div>

    <script src="jquery.js"></script>
    <script>
        //js原生,设置背景颜色
        // var box = document.getElementById('box');
        // box.style.backgroundColor = 'red';

        //jquery，设置行内属性
        $('#box').css('backgroundColor', 'red');

        //juqery的样式可以叠加
        $('#box').css('width', '100px');
        $('#box').css('height', '100px');
        $('#box').css('float', 'left');

        //同时设置多个参数，传递多个样式，使用对象方式。
        $('#box').css({
            border: '1px solid green',
            position: 'absolute',
        });

        //css()方法只传递一个参数属性名,返回对应的值,非行内的样式也能拿到
        console.log($('#box').css('opacity'));
            //1)js原生中,ele.style.xxx不能读取css设置的样式
            //2)jquery中则可以读取css中设置的样式,
    </script>

</body>
</html>
```
## 1.2 操作类名
将样式分离出来,推荐使用该方法。
addClass()、removeClass()、hasClass()、toggleClass()。

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <style>
        .box {
            width: 100px;
            height: 100px;
        }

        .one {
            background-color: yellow;
        }

        .two {
            background-color: red;
        }
        .common {
            border: 1px solid green;
        }
    </style>
</head>
<body>
    <div class="box"></div>
    <button id="btn">点我切换</button>

    <script src="jquery.js"></script>
    <script>
    
        //添加类名
        $('.box').addClass('one');
        //添加多个类
        $('.box').addClass('one common');

        //移除类名
        $('.box').removeClass('one');

        //判断有没有类名,返回true或者false
        var ret = $('.box').hasClass('one');

        //toggle，切换,先判断有没有,然后取反
        $('#btn').click(function(){
            $('#btn').toggleClass('one');
        });
        
    </script>
</body>
</html>
```
#二、操作DOM

## 2.1 添加子元素
### 2.1.1 append()方法

与append()方法类似还有很多: prepend()在前面添加子元素;after()放到自己的后面(变为兄弟元素);
before() 放到自己的前面(变为兄弟元素)。

- 传入jquery对象
```js
//html
<div></div>
<p></p>
//js
var $p = $('p');
$('div).append($p);
//执行之后的结果
<div>
  <p></p> 
</div>
 //注意：如果添加的是已经存在的元素,会有剪切的效果。
```
- html字符串
```js
//html
<div></div>
//js
$('div').append('<span>这是一个span元素</span>');
//执行之后的结果
<div>
    <span>这是一个span元素</span>
</div>
```
- DOM对象
```js
//html
<div></div>
<p id="p"></p>

//js
var p = document.getElementById('p');
$('div').append(p);
//执行之后的结果
<div>
  <p></p> 
</div>
 //注意：也会有剪切的效果。
```

### 2.1.2 html()方法

//注意: 会有覆盖的作用

```js
//html
<div>
    div里面的文本
	<p></p>
</div>

//js
$('div').html('<span>这是一段内容</span>');

//执行完的结果
<div>
    <span>这是一段内容</span>
</div>
```

## 2.2 创建元素
```js
//创建了一个jQuery包装的span,此时并没有添加到DOM树上
$('<span>这是一个span元素</span>'); 
```
## 2.3 清空子元素
清空指定节点的所有子节点  (推荐使用，会清除子元素上绑定的内容)
```javascript
//html
<div>
    <p></p>
	<span></span>
</div>

//js
$('div).empty();
  
//执行完的结果
<div></div>
```
## 2.4 删除元素本身
```js
//html
<p></p>
<div>
   <span></span>
   文本
</div>

//js
$('div').remove();

//执行之后的结果
<p></p>
```

## 2.5 复制元素
- 传入参数false,不穿参数相当于传入一个false,会复制所有内容
```js
//html
<div id="box"></div>
<p>
    <span>span元素</span>
</p>

//js
var newP = $('p').clone();
$('#box').append(newP);

//执行完的结果
<div id="box">
   <p>
     <span>span元素</span>
   </p> 
 </div>
<p>
    <span>span元素</span>
</p>
```
- 传入参数true,会克隆所有内容,,并且注册的事件也一起克隆下来,事件注册方式不能是原生方式
```js
//html
<div id="box"></div>
<p>
    <span>span元素</span>
</p>

//js
$span = $('span');
//这是jQuery中注册事件的方式,后面会仔细讲
$span.on('click', function(){
      console.log('span')
})
var newP = $('p').clone(true);
$('#box').append(newP);

//执行完的结果
<div id="box">
   <p>
     <span>span元素</span>   //点击会打印span
   </p> 
 </div>
<p>
    <span>span元素</span>    //点击会打印span
</p>
```

# 三、jQuery动画

## 3.1 显示与隐藏
利用display的属性中的"none"和"block“实现
```js
<body>
    <div id="box"></div>
    <script>

        $('#box').css({
            width:'100px',
            height:'100px',
            backgroundColor:'red'
        });
        
        $('#box').show();
        $('#box').hide();
    </script>
</body>
```
共三种方法：
- show([speed],[easing],[callback])  显示
- hide([speed],[easing],[callback])   隐藏
- toggle([speed],[easing],[callback])  显示隐藏的切换

## 3.2 滑入与滑出
通过控制高度实现渐变效果。
- slideDown([speed],[easing],[callback])  滑入
- slideUp([speed],[easing],[callback])  滑出
- slideToggle([speed],[easing],[callback])  滑入滑出切换

## 3.3 淡入与淡出

通过控制高度、宽度、透明度实现渐变效果。

- fadeIn([speed],[easing],[callback])  淡入
- fadeOut([speed],[easing],[callback])  淡出
- fadeToggle([speed],[easing],[callback])  淡入淡出切换

## 3.4 自定义动画
**语法:** jQuery对象.animate(json,[speed],[easing],[callback])

**参数详解: **

- json：要执行动画的CSS属性，带数字（必选）

- speed：执行动画时长（必选，默认normal）

- easing：控制动画的效果 

  ​     1.swing：摇摆、秋千(默认) 

  ​     2.linear:匀速

- callback：动画执行完后立即执行的回调函数（可选）

- 动画支持的属性(必须带数字)
```js
  <style>
        div{
            width: 109px;
            height: 100px;
            background-color: green;
            position: relative;
        }
    </style>
    
    <body>
    <div id="box"></div>

    <script src="jquery-1.12.4.min.js"></script>
    <script>
        $(function(){

            $('#box').click(function(){
                $(this).animate({
                    left : 400,  //要求必须值是带数字的
                    backgroundColor: 'red'  //颜色无法做动画
                }, 1000)
            })

        });
    
    </script>
</body>
```
##3.5 注意问题
在同一个元素上添加多个动画，那么对于这些动画会被放到动画队列中，等前面的动画执行完成了才会执行下一个动画.

**语法:** jQuery对象.stop([clearQueue], [jumpToEnd])

**作用: **停止当前正在执行的动画效果

**参数详解**

- clearQueue：是否清除动画队列  默认false
- jumpToEnd：是否跳转到当前动画的最终效果 默认fasle
- 如果不传,默认就是false
  - stop() --> stop(fasle,false)
  - stop(true) --> stop(true,false)