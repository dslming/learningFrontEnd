## CSS3 中的3D动画



# 一、3维坐标系

![坐标轴2](G:\chuanzhiboke\前端课程(5)--移动端开发\day02-css302\自己总结\img\坐标轴2.png)
伸出左手，如上图。指尖的方向为正方向。

# 二、旋转方向

![旋转方向2](G:\chuanzhiboke\前端课程(5)--移动端开发\day02-css302\自己总结\img\旋转方向2.png)
用左手沿着坐标轴的正方向去抓。大拇指指向坐标的正方向。四指的方向为旋转的正方向。

# 三、3D  transform(变换)

包含translate3d移动和rotate3d旋转。

## 3.1 3D移动

**语法：**

1. transform:**translate3d**(x,y,z)  其中 **x y z** 分别指要移动的轴的方向的距离
2. translform:**translateX**(100px)  仅仅是移动在x轴上移动
3. translform:**translateY**(100px)  仅仅是移动在Y轴上移动
4. translform:**translateZ**(100px)  仅仅是移动在Z轴上移动  

**注意**:

因为z轴是垂直屏幕，由里指向外面，所以 默认是看不到元素在z轴的方向上移动，想要看到，可以使用下面的 **视距** 属性设置。

## 3.2 3D旋转
3d旋转指可以让元素在3维平面内沿着 **x轴，y轴，z轴或者自定义轴**进行旋转 。

语法：
transform:**rotateX(45deg)**：沿着x轴正方向旋转 45度
transform:**rotateY(45deg)** ：沿着y轴正方向旋转 45deg
transform:**rotateZ(45deg)**：沿着Z轴正方向旋转 45deg
transform:**rotate3d(x,y,z,deg)**：沿着自定义轴旋转 deg为角度  了解即可


## 3.3 3D缩放

3d缩放 可以控制元素 在 x轴，y轴，z轴上的缩放，也可以理解为 宽，高，厚度的缩放。

transform: **scale3d(1 ,1,2)**;  宽，高 缩放一倍，厚度放大两倍
transform: **scaleX(1)** ;只缩放宽
transform: **scaleY(1)** ;只缩放高
transform: **scaleZ(1)** ;只缩放厚  



# 四、3D其他属性

## 4.1 perspective(视距)

该属性属于：`属性`->`变换`

如 我们想要看到 物体 在z轴上的移动  的 **远大近小** 效果时  

1. 设置物体的 `translateZ` 一般大于 0  如  `transform:translateZ(100px)`
2. 设置 人和物体的距离 - 视距    这个值规定要设置给**物体的父元素**   `perspertive:1000px`
3. 动态改变物体的 `translateZ` 即可观察效果

示例如下：
```css
    /* 父元素 */
    body {
      /* 视距 */
      perspective: 1000px;
    }

    /* 目标 */
    div {
      width: 200px;
      height: 200px;
      background-color: aqua;
      margin: 100px auto;
      /* z轴的移动 */
      transform: translateZ(0px);
    }
```

## 4.2 perspective-origin(视距原点) 

![视距原点2](G:\chuanzhiboke\前端课程(5)--移动端开发\day02-css302\自己总结\img\视距原点2.png)

1. 视距原点和视距一样，也是设置给要观察元素的**父元素**上
2. perspective-origin:center center; 默认值是**元素的中心点**
3. perspective-origin:10px；  指定了一个参数的时候，第二个参数默认为center 也就是50%；
4. perspective-origin:10% %； 百分比都是相对于自身的宽度和高度

## 4.3  transform-style(变换的样式)

结合3d立方体案例理解，控制**子元素**是否开启3维立体环境

- `transform-style: flat;`  平面模式  -  不开启3维立体环境
- `transform-style: preserve-3d;`  3维立体环境


## 4.5 3D变换小结
1. 百分比单位都是相对于自身
2. 视距、视距原点、转换样式 这三个属性都是给父元素添加的

# 五、animation(动画)

过渡 只能看到一次变化过程 如 **宽度  1000px  变化到  100px** 
**动画 可以设置变化的次数 甚至是无数次** 。

## 5.1 初步使用
第一步：在css中定义动画函数     
第二步：给目标元素调用动画函数

示例如下：
```css
    /* 1 声明动画函数 */

    @keyframes ani_div {
      0%{
        width: 100px;
        background-color: red;
      }
      50%{
        width: 150px;
        background-color: green;
      }
      100%{
        width: 300px;
        height: 300px;
        background-color: yellow;
      }
    }

    div {
      width: 200px;
      height: 200px;
      background-color: aqua;
      margin: 100px auto;
      /* 2 调用动画 */
      animation-name: ani_div;
      /* 持续时间 */
      animation-duration: 2s;
    }
```

## 5.2 语法

1. 动画名

   设置要使用的动画名 `animation-name:xxx;`

2. 持续时间

   设置动画播放的持续时间  `animation-duration:3s`

3. 速度曲线

   和设置过渡的速度曲线一样 `animation-timing-function:linear;`

   - linear： 匀速
   - ease： 慢-快-慢  默认值
   - ease-in： 慢-快。
   - ease-out： 快-慢。
   - ease-in-out： 慢-快-慢。

4. 延迟时间

   `animation-delay: 0s;`

5. 循环次数

   设置动画播放的循环次数  `animation-iteration-count: 2;`  **infinite** 为无限循环

6. 循环方向

   `animation-direction`

   如在动画中定义了  **0%：红色**  **100%：黑色** 那么 当属性值为 

   1. **normal**  默认值  **红 -> 黑**
   2. **reverse** 反向运行    **黑 -> 红**
   3. **alternate**  正-反-正...  **红 -> 黑 -> 红...**  
   4. **alternate-reverse**  反-正-反..   **黑 -> 红 -> 黑 ...** 
   5. 以上与循环次数有关

7. 动画等待或者结束的状态

   `animation-fill-mode` 设置动画在等待或者结束的时候的状态

   - **forwards**：动画结束后，元素样式停留在 100% 的样式
   - **backwards**： 在延迟等待的时间内，元素样式停留在 0% 的样式
   - **both**： 同时设置了 forwards和backwards两个属性值

8. 暂停和播放

   `animation-play-state`  控制 **播放** 还是 **暂停** 

   `running` 播放   `paused` 暂停

## 5.3 animationend(动画结束事件)

元素在动画结束之后，会自动触发的事件 **animationend**   

```javascript
    var div = document.querySelector("div");
    div.addEventListener("animationend", function () {
      console.log("div的动画结束之后，触发");
    })
```
# 六、CSS动画库

封装了常见的有意思的小动画  **发疯似的建议看官网来学习使用**

[官网](https://daneden.github.io/animate.css/)

[中文](https://www.awesomes.cn/repo/daneden/animate-css)

## 6.1. 使用步骤

1. 引入css文件

   ```html
   <head>
     <link rel="stylesheet" href="animate.min.css">
   </head>
   ```

2. 给元素添加对应的class

   ```html
   <h1 class="animated infinite bounce">快来看看我</h1>
   ```

   简单解读：

   `animated`  必须添加的class 

   `infinite` 无限播放 

   `bounce` 弹跳动画的效果，可以查官网自己选择喜欢的

## 6.2 自己封装动画库

```css
  <style>
    .infinite {
      animation-iteration-count: infinite;
    }

    .flash {
      animation-name: ani_flash;
      animation-duration: 2s;
      animation-play-state: paused;
    }

    .animate {
      animation-play-state: running;
    }

    @keyframes ani_flash {
      0% {
        opacity: 0;
      }
      20% {
        opacity: 1;
      }
      40% {
        opacity: 0;
      }
      60% {
        opacity: 1;
      }
      80% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  </style>

//使用
<h1 class="flash infinite animate">hello</h1>
```



# 七、3D轮播图

案例。src目录中。

<全文结束>