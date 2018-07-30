# 一、盒子模型组成

盒子模型的组成有4部分组成：元素(内容)、内边距、外边距、边框。

<img src="media/box.gif"  width="700" />

下面分别介绍这4部分。

## 1.1 边框(border)

语法：
```html
border (宽度, 线类型(虚线/实线) 边框颜色);
```
举例：
```css
/* 设置底部边框：1像素粗度,实线,灰色 */
border-bottom: 1px solid #ccc;
```

1)border类型：
- border-top(上边框)
- boder-bottom(下边框)
- boder-left(左边框)
- boder-right(右边框)


2)线类型
- solid(实线)
- dashed(虚线)
- dotted(点线)

## 1.2 内边距(padding)

语法：
```css
    padding 像素值;
```

示例：
```css
/* 设置内边距15px */
padding: 15px;
```
padding类型
- padding-top
- padding-bottom
- padding-left
- padding-right

**注意:**
- 增加内边距会撑大盒子,使盒子的总高(宽)度增加。
- 如果不指定盒子的宽度,那么增加内边距,不会影响盒子的总宽度。如果要在宽度上增加内边距,如果不指定盒子宽度,则盒子的宽度将不会改变。

## 1.3 外边距(margin)
语法：
```css
margin 像素值;
```

示例：
```css
margin: 15px;
```
margin类型
- margin-top
- margin-bottom
- margin-left
- margin-right

**注意:**
- 让块级盒子水平居中对齐,必须满足块级、有宽度,设置左右margin 左右auto即可。

# 二、盒子的特性

## 2.1 盒子的高度

高度(宏观上看这个盒子) = 内容的高度 + 内边距(下) + 内边距(上) + 边框(下) + 边框(上) 。

## 2.2 盒子的宽度
宽度(宏观上看这个盒子) = 内容的宽度 + 内边距(左) + 内边距(右) + 边框(左) + 边框(右) 。

## 2.3 盒子居中
### 2.3.1 盒子内容水平居中
**1)文本文字**
text-align: center。

**2)盒子**
设置子盒子的左右外边框(margin)为auto。
### 2.3.2 盒子内容垂直居中
**1) 文本文字**
让文字的行高等于盒子高即可。

**2)背景图片**
设置背景图片的位置属性,Y轴上center。



## 2.4 外边距塌陷和合并
### 2.4.1 外边距塌陷

<img src="media/www.png" />

目标：
A和B150px。

做法：
两个div垂直盒子布局,上面的盒子A和下面的盒子B。如果设置,A的margin-bottom=100px;
B的margin-top=50px。那么A和B的实际距离等于100px。原则即为取两个盒子外边距距离最大的为最后结果。

解决：
尽量避免。设置A的margin-bottom 150px。或者 B的margin-top=150px

### 2.4.2 外边框合并
<img src="media/n.png" />

对于两个嵌套盒子。如果父元素没有上内边距及边框，则父元素的上外边距会与子元素的上外边距发生合并，合并后的外边距为两者中的较大者，即使父元素的上外边距为0，也会发生合并。
解决方案：

1. 可以为父元素定义1像素的上边框或上内边距。
2. 可以为父元素添加overflow:hidden。

# 三、CSS3盒子属性
1)盒子圆角
2)盒子阴影











