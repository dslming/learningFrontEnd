> 写作参考：https://css-tricks.com/snippets/css/a-guide-to-flexbox/
> ​                   http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
# 一、flex布局概览

flex布局，翻译为弹性布局,最适合应用程序的组件和小型布局，而网格布局适用于大型布局。

## 1.1 基本概念
一些基本概念和术语。
![flex](G:\chuanzhiboke\前端课程(5)--移动端开发\day04-css304\自己总结\img\flex.png)

- flex container:父项
- flex item:子项
  ![flexbox](G:\chuanzhiboke\前端课程(5)--移动端开发\day04-css304\自己总结\img\flexbox.png)
- main axis:主轴
- cross axis:垂直于主轴，称为侧轴(或者交叉轴)
- main start/end:子项放置的起始位置和结束位置


## 1.2 设置flex布局
通过给父盒子设置display:flex属性，使其成为一个弹性盒子。
```css
.container {
  display: flex; /* or inline-flex */
}
```
 当把一个元素变成伸缩盒子之后, 子项 :
 1. 不用再去理会 block inline-block inline 
 2. 可以直接设置宽度和高度。 
 3. 子项对浮动没有效果了。 
 4. 可以使用定位，但是一般不使用。
 5. **宽度由内容撑开**，高度默认和父元素一样的。
# 二、父项的属性


## 2.1 flex-direction(主轴方向)

![flex_direction](G:\chuanzhiboke\前端课程(5)--移动端开发\day04-css304\自己总结\img\flex_direction.png)
将建立父项的主轴坐标轴,从而定义子项在父项中放置的主轴方向。(**子项在父项中的位置由主轴和侧轴两个参数决定**)。子项在父项中的布局主要是水平布局或者垂直布局。
```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
- `row`（默认值）：主轴为水平方向，起点在左端。
- `row-reverse`：主轴为水平方向，起点在右端。
- `column`：主轴为垂直方向，起点在上沿。
- `column-reverse`：主轴为垂直方向，起点在下沿。

## 2.2  justify-content(主轴对齐)

![justify-content](G:\chuanzhiboke\前端课程(5)--移动端开发\day04-css304\自己总结\img\justify-content.png)
定义了子项沿主轴放置的对齐方式。
```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```
它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。

- `flex-start`(默认值)：左对齐
- `flex-end`：右对齐
- `center`： 居中
- `space-between`：两端对齐，项目之间的间隔都相等。
- `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

## 2.3  flex-wrap(主轴超出换行)
![flex_wrap](G:\chuanzhiboke\前端课程(5)--移动端开发\day04-css304\自己总结\img\flex_wrap.png)
子项超出父项宽度时是否换行。
```css
flex-wrap: nowrap | wrap | wrap-reverse
```
- `nowrap`：当子元素溢出父容器时不换行。(默认)
- `wrap`：当子元素溢出父容器时自动换行。

**注意：**默认情况下, flex 项目都将尝试调整到一行。可以更改该属性, 并允许这些项根据需要进行换行。

## 2.4 align-items(侧轴对齐-单行) 

![align_items](G:\chuanzhiboke\前端课程(5)--移动端开发\day04-css304\自己总结\img\align_items.png)
定义子项在交叉轴上如何对齐。
```css
.box {
  align-items: flex-start | flex-end | center | stretch;
}
```
它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。

- `flex-start`：交叉轴的起点对齐。
- `flex-end`：交叉轴的终点对齐。
- `center`：交叉轴的中点对齐。
- `stretch`（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

## 2.5 align-content(侧轴对齐-多行)

![align-content](G:\chuanzhiboke\前端课程(5)--移动端开发\day04-css304\自己总结\img\align-content.png)
定义子项在交叉轴上如何对齐。单行子项不起作用。
```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```
- flex-start：与交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
stretch（默认值）：轴线占满整个交叉轴。

## 2.6 items和content区别

1. align-items可以用于单行和多行，但是设置多行的参数没有align-content多
2. align-content只能用于多行，不能用于单行。

# 三、子项的属性

## 3.1 align-self(子项侧轴对齐)

![align-self](G:\chuanzhiboke\前端课程(5)--移动端开发\day04-css304\自己总结\img\align-self.png)
允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。
```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```
该属性可能取6个值，除了auto，其他都与align-items属性完全一致。

## 3.2 order (子项排列顺序)

![order](G:\chuanzhiboke\前端课程(5)--移动端开发\day04-css304\自己总结\img\order.png)

定义项目的排列顺序。数值越小，排列越靠前，默认为0。
````css
 order: <integer>; /* default is 0 */
````

## 3.3 flex (子项宽度)
![flex_width](G:\chuanzhiboke\前端课程(5)--移动端开发\day04-css304\自己总结\img\flex_width.png)

子项占父元素宽度的比例，当子项指定了**width**时无效。
```css
flex: <integer>;
```

什么时候用width:百分比。什么时候用flex?

百分比是父盒子的百分比，不考虑边框。

flex则是要算上border。

# 四、案例练习

## 4.1 携程旅游
略。
## 4.2 阮一峰
http://www.ruanyifeng.com/blog/2015/07/flex-examples.html


<全文结束>