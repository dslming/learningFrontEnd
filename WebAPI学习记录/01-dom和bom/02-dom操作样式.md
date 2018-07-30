# 一、表单的常用属性
## 1.1 常用属性
1) type,可以获取input标签的类型(输入框或复选框等)
2) value,用于大部分表单元素的内容获取(option除外)
3) disabled,禁用属性
4) selected,下拉菜单选中属性
5) checkbox,复选框选中属性

## 1.2 用法
**1)按钮只能点击一次,disabled**
```js
//html
<input type="button" value="点我">
//js
<script>
  inp = document.getElementsByTagName('input')[0];
  inp.onclick = function () {
  	this.disabled = true;
  }
</script>
```
**2)点击按钮随机选择,selected**
```js
//html
<button id="btn">点我</button>
<select name="" id="sel">
    <option value="">随机选择</option>
    <option value="">泡面</option>
    <option value="">食堂</option>
    <option value="">不吃了</option>
</select>
//js
<script>
// 生成一个随机数,包含最小值和最大值
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
//获取元素
var btn = document.getElementById('btn');
var sel = document.getElementById('sel');
var opts = document.getElementsByTagName('option');
//点击切换
btn.onclick = function () {
    var num = getRandomIntInclusive(1,opts.length-1);
    opts[num].selected = true;
}
</script>
```
**3)点击按钮，复选框全部选中,checkbox**
```js
//html
<button id="btn">全部已读</button><br>
已经阅读1<input type="checkbox"><br>
已经阅读2<input type="checkbox"><br>
已经阅读3<input type="checkbox"><br>
//js
<script>
var checkBox = document.querySelectorAll('input[type="checkbox"]');
var btn = document.getElementById('btn');

btn.onclick = function () {
    for(i in checkBox){
    	checkBox[i].checked = true;
    }
}
</script>
```

综合案例<全选反选>

# 二、DOM操作样式
- 通过元素的style属性
- 通过元素的className属性

## 2.1 style属性
通过style属性
```js
//html
 <div></div>
//js
 var div = document.getElementsByTagName('div')[0];
 div.style.width = '100px';
 div.style.height = '100px';
 div.style.border = '10px solid green';
```
## 2.2 className属性
通过增加类名
```js
//html
 <div></div>
//css
.one {
  background-color: red;
}
//js
div.className = 'one';
```
## 2.3小结:

- 通过style属性操作样式,相当于给标签添加了行内样式
- 通过className属性操作样式,相当于给标签添加了类名