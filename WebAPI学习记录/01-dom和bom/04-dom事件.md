# 一、事件注册
1)on+事件名,对应的移除为on+事件名 = null
2)addEventlister(),对应的移除为:removeEventlister()。
 如果移除,那么传入的事件处理函数必须是有名字的方法。

#二、事件对象
## 2.1 事件属性

| 属性名称            | 描述                        |
| --------------- | ------------------------- |
| clientX,clientY | 浏览器可视区域的鼠标坐标              |
| pageX,pageY     | 页面的鼠标坐标,在出现滚动条时,坐标以页面大小位置 |
| target          | 点击谁就是谁,标签名。事件发生的目标        |
| type            | 事件名                       |
| keyCode         | 键盘按下的键值                   |

## 2.2 键盘事件类型
| 事件名字     | 描述                          |
| -------- | --------------------------- |
| keydown  | 键盘按下时触发,不能区分大小写,键值都是字母的大写键值 |
| keypress | 键盘按下时触发,区分大小写               |
| keyup    | 键盘抬起时触发                     |

## 2.3 事件方法
1)event.preventDefault()
- 可以用来在a标签点击事件调用,用来去除a标签默认行为：即刷新页面。return false无效。
- 阻止默认行为

2)event.stopPropagation() 
- 阻止事件传递
- 写在最后一个执行事件处理函数之后。

# 三、事件处理流程
## 3.1 处理阶段
- 事件发生时如点击、键盘按下等,浏览器会创建一个事件对象,事件对象会由上到下从父级元素传递下来。路径可能为:window->document->html->body->table->tr->td等。
- 从顶层到td的路径称为`捕获阶段`。从外到里
- ,从tr到window的路径称为`冒泡阶段`。从里到外
- td的执行事件处理函数过程称为`目标阶段`。
- 一旦触发事件,就会产生事件流

## 3.2 事件委托
- 子元素的事件处理结束,父辈元素的相同事件处理也会执行。如果为null则跳过处理阶段。
  将子元素的事件处理交给父元素处理称为事件委托。
- 事件委托的好处是:代码简洁,节省内存。(代码简洁并不意味着节省内存,节省内存更是执行效率上的)
- 事件委托的原理：利用事件流,在冒泡或捕获阶段帮助子节点完成事件处理函数。

# 四、综合案例
## 4.1 切换背景颜色
利用事件对象的keyCode属性。
```js
<!-- 
    需求：
    1)整个页面注册键盘事件,监听键盘事件,修改div的背景颜色和文本
    2)r:红色,y:黄色,其他：粉色
 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <style>
        div {
            width: 300px;
            height: 300px;
            border: 1px solid blue;
        }
    </style>

</head>
<body>
      <div id="box">
        默认文本
    </div>
    
    <script>
        window.onload = function(){
            //获取元素
            var box = document.getElementById('box');
            
            //全局检测键盘按下事件
            document.onkeydown = function (e){
                //获得键值,r:82,y:89
                var key = e.keyCode;
                var color = '';
                
                if(key==82){
                    color = 'red';
                }else if(key == 89){
                    color = 'yellow';
                }else{
                    color = 'pink';
                }

                box.innerText = key;
                box.style.backgroundColor = color;
            }
        }
    </script>
</body>
</html>
```

## 4.2 收起和展开
事件的appendEventLister方法的使用。
```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <style>
        * {
            margin: 0;
            padding: 0;
        }

        div {
            border: 1px solid blue;
        }

        ul {
            padding: 20px;
        }

        li {
            list-style: none;
            margin-top: 10px;
            background-color: skyblue;
            height: 30px;
            line-height: 30px;
        }

        button {
            width: 100%;
            height: 50px;
            background-color: white;
        }
    </style>


</head>

<body>
    <div>
        <ul id="ul">
            <li>你见，或者不见我　</li>
            <li>我就在那里　</li>
            <li>不悲不喜　　</li>
            <li>你念，或者不念我　</li>
            <li>情就在那里　　</li>
            <li>不来不去　　</li>
            <li>你爱，或者不爱我　</li>
            <li>爱就在那里　</li>
            <li>不增不减　</li>
        </ul>
        <button id="btn">点击加载更多..</button>
    </div>

    <script>



        // 程序运行开始
        window.onload = function () {
            //数据
            var arr = [
                '你跟，或者不跟我',
                '我的手就在你手里',
                '不舍不弃',
                '来我的怀里',
                '或者',
                '让我住进你的心里',
                '默然　相爱',
                '寂静　喜欢',
            ];

            //获取元素
            var btn = document.getElementById('btn');
            var ul = document.getElementById('ul');
            var oldArr = [];

            // 更多按钮的事件处理函数
            function moreBtn() {
                var arr_data = arr;
                var ul = this.parentNode.children[0];
                
                arr_data.forEach(function(item){
                    var li = document.createElement('li');
                    li.innerText = item;
                    ul.appendChild(li);
                });

                this.removeEventListener('click', moreBtn, false);
                this.addEventListener('click', lessBtn, false);
                this.innerText = '收起更多';
            }

            // 收起按钮的事件处理函数
            function lessBtn(){
                var childs_lis = ul.children;
                var lis_length = childs_lis.length;
                //删除所有的li
                for(var i = 0; i<lis_length; i++){
                    ul.removeChild(childs_lis[0]);
                    // console.log(childs_lis.length);
                }

                //加上旧的li
                for(var i = 0; i < oldArr.length; i++){
                    ul.appendChild(oldArr[i]);
                }
                
                this.removeEventListener('click', lessBtn, false);
                this.addEventListener('click', moreBtn, false);
                this.innerText = '加载更多';
            }

            //获取展开之前的数据
            function getOldData(oldArr, ul){
                var lis = ul.children;
                for(var i = 0; i < lis.length; i++){
                    oldArr.push(lis[i]);
                }
            }

            //---------------------start----------------------
             //注册更多事件
             btn.addEventListener('click', moreBtn, false);
             getOldData(oldArr, ul);

        }
    </script>
</body>

</html>
```

##4.3 鼠标跟随(小天使)
利用事件对象中的鼠标坐标实现。
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <style>
            body{
                height: 1500px;
            }
        </style>

</head>
<body>
    <img src="images/tianshi2.gif" alt="我是图片">

    <script>
        var img = document.getElementsByTagName('img')[0];
        img.style.position = 'absolute';

        document.body.onmousemove = function (e){
            var x = e.pageX;
            var y = e.pageY;

            img.style.top = y +'px';
            img.style.left = x +'px';
        }
    </script>
</body>
</html>
```




