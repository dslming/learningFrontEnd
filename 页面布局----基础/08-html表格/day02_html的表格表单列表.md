>会涉及关于表格、表单、列表的讲解
>表格：显示数据
>表单：获取用户数据
>列表：控制布局
#  一、表格
>主要用于数据展示
## 1.1 创建表格
```html
<--! 定义一个1行2列的表格 -->
<table>
 <tr>
  <td>我是单元格1</td>
  <td>我是单元格2</td>
 </tr>
</table>
```
table、tr、td，他们是创建表格的最基本标签，具体地解释：
- table用于定义一个表格。
- tr 定义表格中的一行，必须嵌套在 table标签中，在 table中包含几对 tr，就有几行表格。
- td 定义表格中的单元格，必须嵌套在<tr></tr>标签中，一对 <tr> </tr>中包含几对<td></td>，就表示该行中有多少列（或多少个单元格）。

**注意:**
- <tr></tr>中只能嵌套<td></td> 类的单元格
- <td></td>标签，他就像一个容器，可以容纳所有的元素

## 1.2常用属性
| 属性名称        | 含义          | 值                 |
| ----------- | ----------- | ----------------- |
| border      | 表格边框        | 像素                |
| cellspacing | 单元格之间的间隔    | 像素                |
| cellpadding | 单元格边框与内容的间隔 | 像素                |
| width       | 表格宽度        | 像素                |
| height      | 表格高度        | 像素                |
| align       | 表格的居中方式     | left、center、right |
| rowspan     | 跨行合并        | 单元格数量             |
| colspan     | 跨列合并        | 单元格数量             |
## 1.3所有标签
<table> 定义表格 
<caption> 定义表格标题。 
<th> 定义表格的**表头单元格**。 
<tr> 定义表格的行。 
<td> 定义表**普通格单元**。 
<thead> 定义表格的页眉。 
<tbody> 定义表格的主体。 
<tfoot> 定义表格的页脚。 
<col> 定义用于表格列的属性。 
<colgroup> 定义表格列的组。

## 1.4单元格合并
**1. 确定目标单元格位置**
   目标单元格的位置，原则为上边的单元格优先级大于下边的单元格优先级,左边的单元格优先级大于右边的优先级。
**2. 确定合并方式**
   根据合并方向，在目标单元格确定合并方式为跨行或者跨列。
**3. 删除多余的单元个**
   删除数量=合并数量-1
## 1.5 表格注意
- 表格一般用于数据展示，布局不是一个好的方案。
- 表格中没有列元素,列的数量取决于单元格的数量。

#二、列表
>主要用于页面布局，与表格类似但更加灵活，自由度更高。
>可以测试在小米网站中找到很多应用。
## 2.1 无序列表ul
语法：
```
<ul>
  <li>列表项1</li>
  <li>列表项2</li>
  <li>列表项3</li>
</ul>
```
注意：
-  <ul></ul>中只支持<li></li>
-  <li>与</li>之间相当于一个容器，可以容纳所有元素

## 2.2 有序列表ol
语法：
```html
<ol>
  <li>列表项1</li>
  <li>列表项2</li>
  <li>列表项3</li>
  ......
</ol>
```

## 2.3自定义列表
语法：
```html
<dl>
  <dt>联系我</dt>
  <dd>手机</dd>
  <dd>电话</dd>
</dl>
```
dl：自定义列表标签
dt：自定义列表的主要对象
dd：对主要描述的对象进行说明。
# 三、表单
>HTML 表单用于搜集不同类型的用户输入。
## 3.1 表单的构成
表单一般由三部分构成：表单控件(input等)、表单域(form)、提示信息。

## 3.2 表单控件
常用的表單控件包括4種，input系列、laber、textarea、select。

###1)input系列控件

input标签中通过type属性实现不同的控件。
控件如下：

| type属性值  | 描述    |
| -------- | ----- |
| text     | 单行文本框 |
| password | 密码输入框 |
| radio    | 单选按钮  |
| checkbox | 复选框   |
| button   | 普通按钮  |
| submit   | 提交按钮  |
| reset    | 重置按钮  |
| image    | 图片按钮  |
| file     | 文件按钮  |

注意：
- 如果想实现单选框效果,必须要设置名称且相同。

**input标签的属性如下：**
| 属性名称      | 属性值                                      | 属性描述        |
| --------- | ---------------------------------------- | ----------- |
| type      | text/password/radio/checkbox/button/submit/reset/image/file | 选择控件类型      |
| name      | 自定义,表单/标签                                | 控件名称        |
| value     | 自定义,标签值                                  | 默认文本值       |
| size      | 正整数                                      | 控件的显示宽度     |
| checked   | checked,默认选中项                            | 控件的默认选中项目   |
| maxlength | 正整数                                      | 控件允许输入的最大字数 |

**1)type属性**
```html
用户名: <input type="text" /> 
密  码：<input type="password“ />
```

**2)value属性**
```html
用户名:<input type="text"  name="username" value="请输入用户名"> 
```

**3)name属性**
```html
用户名:<input type="text"  name=“username” />   
```

```html
<input type="radio" name="sex"  />男
<input type="radio" name="sex" />女
```
**4)checked属性**
```html
性    别:
<input type="radio" name="sex" value="男" checked="checked" />男
<input type="radio" name="sex" value="女" />女 
```

###2)textarea控件
用于留言的多行文本输入。
语法：
```html
<textarea cols="每行中的字符数" rows="显示的行数">
  文本内容
</textarea>
```
### 3)laber控件
用于绑定一个表单元素, 当点击label标签的时候, 被绑定的表单元素就会获得输入焦点。
表现为：在一些输入如：单选框、文本框等,点击控件前的文本就可以获得焦点。
- 用法一：全局使用
```html
<!-- 点击mele文本,其后的单选框就可以被选中 -->
<label> male <input type="radio" name="sex" value="male">   </label>
```
- 用法二：分开绑定
```html
<label for="male">Male</label>
<input type="radio" name="sex"  id="male">
```
### 4)select控件
下拉控件,多个选项让用户选择，为了节约空间，可以使用select控件定义下拉菜单.
```html
<select>
  <option>选项1</option>
  <option>选项2</option>
  <option>选项3</option>
</select>
```
选择默认属性：
```
...
<option selected =" selected ">选项1</option>
...
```

## 3.3 input标签属性




##  3.4 表单域
>在HTML中，form标签被用于定义表单域，即创建一个表单，以实现用户信息的收集和传递，form中的所有内容都会被提交给服务器。

```html
<form action="url地址" method="提交方式" name="表单名称">
  各种表单控件
</for
```
**常用属性**
- action：用于指定接收并处理表单数据的服务器程序的url地址。
- method：用于设置表单数据的提交方式，其取值为get或post。
- name：用于指定表单的名称，以区分同一个页面中的多个表单。

# 四、资料
W3C :  http://www.w3school.com.cn/

MDN: https://developer.mozilla.org/zh-CN/

[源码点我](https://github.com/1097364388/html/blob/master/day2_index.html)

<end>