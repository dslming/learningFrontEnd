# 一、rem概览

## 1.1 为什么需要rem

传统使用px单位设置字体时，会遇到下面问题：

- **改变浏览器的大小，字体大小不会改变,意味着字体可能会影响布局。**

解决这个问题，出现了em单位，以font-size为相对单位。但字体大小具有继承性，可变性太大不好控制。于是出现了rem单位。

rem单位的出现主要是想实现这样一个功能：

![rem作用](G:\chuanzhiboke\前端课程(5)--移动端开发\day12-mobile06\自己总结-rem布局\img\rem作用.png)

**当屏幕宽度从640变为320时，里面的内容字体大小也减少一半。**这样就解决了px绝对单位带来的布局影响和视觉体验差。这也被称为屏幕适配和rem布局。

## 1.2相对长度
rem也是一个相对单位，相对长度单位的大小是会相对于某一个值而改变的，类似的还有：

- % 百分比  一般都是相对于父元素
- em 相对于自身的font-size 
- rem 相对于 根元素 html标签的fontsize

# 二、rem布局的具体方法

## 2.1 需求分析

在进行rem布局前，需要拿到一张某个屏幕参数的设计稿，被称为设计图，如下图所示：

![设计图样稿](G:\chuanzhiboke\前端课程(5)--移动端开发\day12-mobile06\自己总结-rem布局\img\设计图样稿.png)

给出了在640px屏幕宽度下的设计，全部用px标注所有具体的单位,包括字体大小，padding，margin等。

需要使用rem布局，使其适应不同的屏幕。让其保持相对的大小。

## 2.2 rem原理
步骤：
- 使用媒体标签设置根标签html的字体大小。
- 使用rem进行单位设置。

**例子：**

**1)设置基础值** 

将设计图640宽度的字体设置为100px,那么baseWidth=640px,baseFontsize=100px

```css
 @media screen and (width:640px){
    html{
      font-size: 100px;
    }
  }

```

**2)其他屏幕按比例缩放**
存在比例关系：
**otherFontsize : otherWidth = baseFontsize : baseWidth**


有：
otherFontsize：其他尺寸下的字体大小,=100/640*320=50px
otherWidth：其他尺寸的屏幕宽度,这里=320px。

```css
 @media screen and (width:320px){
    html{
      font-size:50px;
    }
  }

```

**3)使用相对单位**
- 那么在设计图中，1rem=100px，宽度为100px的盒子为：
```css
div{
    width=1rem;
}
```
- 在其他屏幕下1rem=50px,此时盒子的宽度就变为了50px：
```css
div{
    width=1rem;
}
```

## 2.3 总结

目前主流的适配移动端屏幕的解决方案 是使用 **rem + 媒体查询实现**

<全文结束>