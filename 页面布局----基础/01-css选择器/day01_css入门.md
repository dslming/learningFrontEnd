# 一、 CSS的书写位置
>CSS(Cascading Style Sheets) 层叠样式表,主要用于设置 HTML页面中的文本内容（字体、大小、对齐方式等）、图片的外形（宽高、边框样式、边距等）以及版面的布局等外观显示样式。

作用：美化html

过程：选择标签 --> 应用样式

## 1.1 行内样式
格式：
```html
<标签名 style="属性1:属性值1; 属性2:属性值2; 属性3:属性值3;"> 内容 </标签名>
```
示例：
```css
<div style="color: red; font-size: 12px;">我爱我的祖国</div>
```

**注意：**

*  style其实就是标签的属性
*  属性和值中间是冒号。
*  多组属性值之间用分号隔开。
## 1.2 内部样式
格式：
```html
<head>
<style type="text/CSS">
    选择器 { 
      属性1:属性值1;
      属性2:属性值2; 
      属性3:属性值3;
    }
</style>
</head>
```
示例：
```css
<style>
	 div {
	 	color: red;
	 	font-size: 12px;
	 }
</style>
```
**注意**
* style标签一般位于head标签中title标签之后，也可以把他放在HTML文档的任何地方。
* type="text/css"  在html5中可以省略。
* ​
## 1.3 外部样式
链入式是将所有的样式放在一个或多个以.CSS为扩展名的外部样式表文件中，通过link标签将外部样式表文件链接到HTML文档中，**实现了结构与样式文件相分离**。其基本语法格式如下：

```html
<head>
  <link href="CSS文件的路径"  rel="stylesheet" />
</head>
```

该语法中，link标签需要放在head头部标签中，并且必须指定link标签的三个属性，具体如下：

* href：定义所链接外部样式表文件的URL，可以是相对路径，也可以是绝对路径。
* type：定义所链接文档的类型，在这里需要指定为“text/CSS”，表示链接的外部文件为CSS样式表。我们都可以省略
* rel：定义当前文档与被链接文档之间的关系，在这里需要指定为“stylesheet”，表示被链接的文档是一个样式表文件。

# 二、CSS选择器的种类
css的语法如下：
```
选择器 {
	属性名1: 值1;
	属性名2: 值2;
	...
	}
```
**选择器的作用：**
CSS确定修饰的标签(元素)。
**选择器的种类：**
这里选择器可以是标签名、ID、类名、通配符,下面分别介绍。

## 2.1 标签选择器
标签名,选中要修饰的内容。
语法：
```
标签名{属性1:属性值1; 属性2:属性值2; 属性3:属性值3; }
```

示例：
```css
<style>
	/* 给段落的字体设置为红色 */
    p {
      color: red;
    }
</style>
```

## 2.2 类选择器
“.”+类名，选中要修饰的类。
**示例1 单类名:**
```css
<style>
	/* 给class="red"的类设置为红色 */
    .red {
      color: red;
    }
</style>
...
<p class="red">我爱祖国</p>
```
**示例2 多类名:**
```css
<style>
	/* 给class="red"的类设置为红色 */
    .red {
      color: red;
    }
    /* 给class="center"的类设置为居中 */
    .center {
      text-align: center;
    }
</style>
...
<p class="red center">我爱祖国</p>
```

## 2.3 ID选择器
“#” + id,选中修饰的id,间接选中标签。
示例：
```css
<style>
	/* 给id="123"的id设置为红色 */
    #123 {
      color: red;
    }
</style>
...
<p id="123">我爱祖国</p>
```
**注意:** 
- 类名相当于身份证的名字,可以出现重名。
- id相当于身份证号的身份证号,全局唯一。

## 2.4 通配符选择器
"*"符号应用于所有标签。
示例：
```
* {
  margin: 0;                    /* 定义外边距*/
  padding: 0;                   /* 定义内边距*/
}
```
**总结**:
| 选择器    | 作用                | 缺点           | 使用情况  | 用法                   |
| ------ | ----------------- | ------------ | ----- | -------------------- |
| 标签选择器  | 可以选出所有相同的标签，比如div | 不能差异化选择      | 较多    | div { color：red;}    |
| 类选择器   | 可以选出1个或者多个标签      | 可以根据需求选择     | 非常多   | .nav { color: red; } |
| id选择器  | 一次只能选择器1个标签       | 只能使用一次       | 不推荐使用 | #nav {color: red;}   |
| 通配符选择器 | 选择全部的标签           | 选择的太多，有部分不需要 | 不推荐使用 | * {color: red;}      |


# 三、CSS属性
>详细参考《Cascading Style Sheet 2.0中文手册》

## 3.1 字体属性
这里列举几个常用的字体属性。
| 属性名称            | 属性值                                      | 属性描述     |
| --------------- | ---------------------------------------- | -------- |
| font-size       | px(像素)                                   | 字体大小     |
| font-family     | 微软雅黑                                     | 字体       |
| font-weight     | 400(正常字体粗细)                              | 字体粗细     |
| font-style      | normal(取消斜体)                             | 字体风格(斜体) |
| color           | RGB的十六进制以#开头                             | 字体颜色     |
| line-height     | 像素值                                      | 行间距      |
| text-decoration | none(取消下划线)、underline(设置下划线)、overline、line-through | 线的穿过方式   |

注意：
* font-style(**仅仅是斜体,没有语义加强**)区分与em i的区别
* font-weight与strong b h的区别
* line-height与height区别

属性可以单独设置,也可以统一设置:
```css
/* 字体大小和字体必须要设置 */
{font: font-style  font-weight  font-size/line-height  font-family;}
```
## 3.2 文本属性
| 属性名称        | 属性值        | 属性描述   |
| ----------- | ---------- | ------ |
| text-align  | center(居中) | 水平对齐方式 |
| text-indent | em字符数量     | 首行缩进   |

注意：
*  text-align,盒子里的文本水平居中。

# 四、开发者工具(chrome)
功能：
- 查看标签对应的样式。
- 根据警告信息(有三角形的警告)，查找出错的行位置。
- 在线调试字体大小或者颜色,辅助开发。