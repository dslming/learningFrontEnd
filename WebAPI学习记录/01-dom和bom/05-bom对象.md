# 零、BOM对象

#一、location对象

| 对象名称     | 描述   |
| -------- | ---- |
| location | 地址栏  |
| history  | 历史   |

## 1.1 location对象
概览:

- location对象代表浏览器的地址栏.
- 学习location的目标主要是为了操作地址栏的url地址
- 网络中的地址我们称为url

属性：
| 属性名称   | 描述                              |
| ------ | ------------------------------- |
| href   | 返回地址栏的整个url,设置值的时候,也可以起到跳转页面的作用 |
| hash   | 返回地址栏url的fragment               |
| host   | 返回地址栏url的主机名                    |
| path   | 路径                              |
| search | 返回地址栏url的键值对参数(query)           |

方法：
| 方法名称      | 描述         | 参数                 |
| --------- | ---------- | ------------------ |
| reload()  | 设置页面刷新     | [boolean]true:强制刷新 |
| replace() | 页面跳转,不记录历史 | url                |
| assign()  | 页面跳转,记录历史  | url                |

## 1.2 location小结
1)实现页面跳转的三种方式：
- href属性
- assign()方法
- replace()方法

2)三种方式必须加`http`协议

## 1.3 示例----实现页面跳转的三种方式
```js
<body>
    <button id="btn1">点我跳转方法1</button>
    <button id="btn2">点我跳转方法2</button>
    <button id="btn3">点我跳转方法3</button>

    <script>
        var btn1 = document.getElementById('btn1');
        var btn2 = document.getElementById('btn2');
        var btn3 = document.getElementById('btn3');

        //1使用href属性
        btn1.addEventListener('click', function () {
            window.location.href = 'http//:www.baidu.com';
        });

        //2使用replace方法
        btn2.addEventListener('click', function () {
            window.location.replace('http//:www.baidu.com');
        });

        //3使用assign方法
        btn3.addEventListener('click', function () {
            window.location.assign('http//:www.baidu.com');
        });
    </script>
</body>
```
# 二、history对象
- 一个浏览器只有一个history对象
| 方法        | 描述      | 参数   |
| --------- | ------- | ---- |
| back()    | 返回上一个页面 | 无    |
| forward() | 前进下一个页面 | 无    |
|go()|前进,+n;后退,-n|n(有正负)|

# 三、navigator对象
userAgent  返回识别客户端浏览器的字符串
语法: navigator.userAgent
#四、定时器

定时器是winddows的方法。

| 方法名称            | 描述                     |
| --------------- | ---------------------- |
| setTimeout()    | 设置一次超时的时间              |
| setInterval()   | 循环执行函数                 |
| clearTimeout()  | 清除以setTimeout方法设置的定时器  |
| clearInterval() | 清除以setInterval方法设置的定时器 |

# 五、综合案例
## 5.1 倒计时
```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        .time-item {
            width: 430px;
            height: 45px;
            margin: 0 auto;
        }

        .time-item strong {
            background: orange;
            color: #fff;
            line-height: 49px;
            font-size: 36px;
            font-family: Arial;
            padding: 0 10px;
            margin-right: 10px;
            border-radius: 5px;
            box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
        }

        .time-item>span {
            float: left;
            line-height: 49px;
            color: orange;
            font-size: 32px;
            margin: 0 10px;
            font-family: Arial, Helvetica, sans-serif;
        }

        .title {
            width: 260px;
            height: 50px;
            margin: 200px auto 50px auto;
        }
    </style>

</head>

<!-- 
    需求：
        1)计算当前时间和5月1日放假的时间差

    实现：
        1)获取元素
        2)获取当前时间
        3)获取目标时间
        4)计算时间差
        5)将时间差转换为对应的：天、时、分、秒
 -->

<body>
    <h1 class="title">距离五一，还有</h1>

    <div class="time-item">
        <span>
            <span id="day">00</span>天</span>
        <strong>
            <span id="hour">00</span>时</strong>
        <strong>
            <span id="minute">00</span>分</strong>
        <strong>
            <span id="second">00</span>秒</strong>
    </div>

    <script>
        function updata() {
            var day = document.getElementById('day');
            var hour = document.getElementById('hour');
            var minute = document.getElementById('minute');
            var second = document.getElementById('second');

            var curent_time = +new Date();
            var target_time = +new Date('2018-5-1 00:00:00');
            var time_ms = target_time - curent_time;
            var time_s = time_ms / 1000;

            var dayT = Math.floor(time_s / 60 / 60 / 24);
            var hourT = Math.floor(time_s / 60 / 60 % 24);
            var minuteT = Math.floor(time_s / 60 % 60);
            var secondT = Math.floor(time_s % 60);

            day.innerText = dayT;
            hour.innerText = hourT;
            minute.innerText = minuteT;
            second.innerText = secondT;
        }

        updata();
        setInterval(updata, 1000);
    </script>
</body>

</html>
```

## 5.2 盒子移动
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

        #box {
            width: 100px;
            height: 100px;
            background-color: pink;
            position: relative;
        }
    </style>
</head>

<body>

    <div id="box"></div>
    <button id="btn">动画</button>
    <!-- 
        需求：
            1)点击按钮移动盒子

        实现：
            1)开启一个定时器
            2)获取当前盒子位置是否小于目标位置
            3)如果小于目标位置则让盒子移动单位步长
     -->
    <script>
        //移动
        function animation(BoxObj) {
                var step = BoxObj.step;
                var final = BoxObj.final;
                var time_id = BoxObj.time_id;
                var box = BoxObj.node;
                var curent = box.offsetLeft;

                curent += step;
                if (curent >= final) {
                    box.style.left = final + 'px';
                    //关闭定时器
                    clearInterval(time_id);
                    console.log(box.offsetLeft);
                } else {
                    box.style.left = curent + 'px';
                }
            }

        window.onload = function () {
            var btn = document.getElementById('btn');
            var BoxObj = new Object();
            BoxObj.step = 29;//每次移动的像素
            BoxObj.final = 800;//目标位置
            BoxObj.node = box;//盒子节点
            BoxObj.time_id = 0;//动画用的定时器

            btn.onclick = function () {
                var box = document.getElementById('box');

                if (BoxObj.time_id == 0) {
                    BoxObj.time_id = setInterval(function () {
                        animation(BoxObj);
                    }, 500);
                }
            }

        }
    </script>
</body>

</html>
```

## 5.3 模拟时钟
```js
<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .clock {
            width: 600px;
            height: 600px;
            margin: 100px auto;
            background: url(images/clock.jpg) no-repeat;
            position: relative;
        }

        .clock div {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url(images/hour.png) no-repeat center center;
        }

        #m {
            background-image: url(images/minute.png);
        }

        #s {
            background-image: url(images/second.png);
            /*让盒子旋转*/
            /* transform: rotate(30deg); */
        }
    </style>
</head>

<body>
    <div class="clock">
        <div id="h"></div>
        <div id="m"></div>
        <div id="s"></div>
    </div>

    <!-- 
        需求:
             获取到当前的时间,根据当前时间就算元素旋转的角度 , 这些行为放到定时器中每隔一秒执行一次
        
        实现：
            1. 获取元素
            2. 获取当前时间

            3. 分针走的角度转换为时针走的角度：
                1)时针 1 小时走的角度 a = 360/12
                2)时针 1 分钟走的角度 b = (1/60)*a = 1/60*360/12 = 0.5
                  //先将分钟转换为小时,在乘以每小时走的角度

            4. 秒针走的角度转换为分针走的角度：
                1）分针 1 分钟走的角度 a = 360/60
                2) 分针 1 秒钟走的角度 b = (1/60)*a = 1/60*360/60 = 0.1
                    
 -->
    <script>


        function updata() {
            // 获取元素
            var h = document.getElementById('h');
            var m = document.getElementById('m');
            var s = document.getElementById('s');

            //获取当前时间
            var date = new Date();
            var hour = date.getHours();
            var min = date.getMinutes();
            var sec = date.getSeconds();

            //转换角度
            var hdeg = (360 / 12 * hour) + min*0.5;
            var mdeg = (360 / 60 * min) + sec*0.1;
            var sdeg = (360 / 60 * sec);

            //利用角度属性控制秒针转到
            h.style.transform = 'rotate(' + hdeg + 'deg' + ')';
            m.style.transform = 'rotate(' + mdeg + 'deg' + ')';
            s.style.transform = 'rotate(' + sdeg + 'deg' + ')';
        }

        updata();
        setInterval(updata, 1000);
    </script>
</body>
</html>
```

<全文结束>