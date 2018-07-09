# 一、节点引入
## 1.1 文档对象模型
DOM（Document Object Model——文档对象模型）是用来呈现以及与任意 HTML 或 XML 交互的API文档。DOM 是载入到浏览器中的文档模型，它用节点树的形式来表现文档，每个节点代表文档的构成部分（例如： element——页面元素、字符串或注释等等）。

DOM 是Web——万维网上使用最为广泛的API之一，因为它允许运行在浏览器中的代码访问文件中的节点并与之交互。节点可以被创建，移动或修改。事件监听器可以被添加到节点上并在给定事件发生时触发。

DOM 并不是天生就被规范好了的，它是浏览器开始实现JavaScript时才出现的。这个传统的 DOM 有时会被称为 DOM 0。现在， WHATWG维护DOM生活标准。

## 1.2 节点定义
根据 W3C 的 HTML DOM 标准，HTML 文档中的所有内容都是节点(文档,标签,文本,属性,注释)
- 整个文档是一个文档节点
- 每个HTML标签是一个标签节点/元素节点
- HTML 标签内的文本是文本节点
- 每个HTML标签的属性是属性节点
- 注释是注释节点

## 1.3 节点组织
当浏览器加载文档的时候,会将文档中每一个节点,以树状的结构组织起来,我们将这种结构称为之节点树或DOM树。


# 二、节点属性
**1)节点、元素、标签的区别：**
节点：HTML文档的所有内容都会被抽象为一个js节点，例如属性节点、注释节点、文本节点等。
元素：专指HTML中的标签节点。
标签：HTML中的标签,例如<p>、<div>等。

**2)节点和元素的关系**
元素所有属性继承至它的祖先接口 Node。
元素详细参考：
https://developer.mozilla.org/zh-CN/docs/Web/API/Element
节点详细参考：
https://developer.mozilla.org/zh-CN/docs/Web/API/Node

**3)常用属性**
- 节点类型属性
- 节点层级属性

## 2.1 节点类型属性
### 2.1.1 Node.nodeName
- 返回一个包含该节点名字的DOMString。
- 节点名称取决于节点的类型,文本类型名称为`#text`,元素类型名为`标签名大写`,注释`#comment`。

### 2.1.2 Node.nodeType
- 返回一个与该节点类型对应的无符号短整型的值。
- 常用的节点类型：
| Name               | Value | 备注      |
| ------------------ | ----- | ------- |
| ELEMENT_NODE(元素节点) | 1     | 元素      |
| TEXT_NODE(文本节点)    | 3     | 元素的文本内容 |
| COMMENT_NODE(注释节点) | 8     | 注释      |

### 2.1.3 Node.nodeValue
- node.nodeValue 属性返回或设置当前节点的值。
  | 节点类型 | 节点名称 |
  | ---- | ---- |
  | 属性节点 | 属性值  |
  | 文本节点 | 文本内容 |
  | 元素节点 | null |


### 2.1.4 综合示例
```js
//html
<div> 
  123
  <!-- 789 -->
</div>
  
//js
var div = document.getElementsByTagName('div')[0];
var div_childs = div.childNodes;

//节点类型
console.dir(div.nodeType);//元素的类型=1
console.dir(div_childs[0].nodeType);//123的类型=3
console.dir(div_childs[1].nodeType);//注释的类型=8

//节点名称
console.log(div.nodeName);       //元素的名称=DIV
console.log(div_childs[0].nodeName);//123的名称=#text
console.log(div_childs[1].nodeName);//456的名称=#comment

//节点值
console.log(div.nodeValue);//元素的节点值永远=null
console.log(div_childs[0].nodeValue);//123的值=空格换行+123+空格换行
console.log(div_childs[1].nodeValue);//注释的值=789
```

## 2.2 节点层级属性
**常用属性包括：**
- 找儿子的属性:
  - children  返回包含所有子元素的伪数组
  - childNodes 返回包含所有的子节点的伪数组
- 找父亲的属性:
  - parentNode 返回父节点,节点一定是元素
- 找兄弟
  - nextSibling 返回下一个兄弟节点
  - previousSibling 返回上一个兄弟节点

**使用示例：**

​    需求：

​        1) 通过document找到span，给span注册点击事件,

​        2)在点击事件修改div的背景颜色
```js
//html
    <div>
        文本
        <p></p>
        <p></p>
        <span>123</span>
    </div>
    
//js
 <script>
        var body = document.body;
        var body_childs = body.children;
        var div = null;
        var div_childs = null;
        var span = null;
		//寻找DIV元素
        for(var i = 0; i < body_childs.length; i++){
            if(body_childs[i].nodeName == 'DIV'){
                  div = body_childs[i];
            }
        }
		//寻找SPAN元素
        div_childs = div.children;
        for(var i = 0; i < div_childs.length; i++){
            if(div_childs[i].nodeName == 'SPAN'){
                span = div_childs[i];
            }
        }
        //添加SPANS点击事件
        span.onclick = function () {
            console.log("xixi");
            this.parentNode.style.backgroundColor = 'yellow';
        }
    </script>
```

# 三、节点方法
**1) 有剪切效果的方法:**
appendChild()
insertBefore()
replaceChild()

**2) 移除方法**
removeChild() 

**3) 克隆方法**
cloneChild()

## 3.1 方法概览
| 方法名称          | 方法描述                  |
| ------------- | --------------------- |
| appendChild() | 将一个节点添加到指定父节点的子节点列表末尾 |

## 3.3 详细介绍
### 3.3.1 appendChild()
1)概述
Node.appendChild() 方法将一个节点添加到指定父节点的子节点列表末尾。
2)语法
```js
var child = node.appendChild(child);
//node 是要插入子节点的父节点.
//child 即是参数又是这个方法的返回值.
```
3)示例
```js
// 创建一个新的段落p元素,然后添加到body的最尾部
var p = document.createElement("p");
document.body.appendChild(p);
```

4)附加
- 如果被插入的节点已经存在于当前文档的文档树中,则那个节点会首先从原先的位置移除,然后再插入到新的位置.
- 如果你需要保留这个子节点在原先位置的显示,则你需要先用Node.cloneNode方法复制出一个节点的副本,然后在插入到新位置.
- 这个方法只能将某个子节点插入到同一个文档的其他位置,如果你想跨文档插入,你需要先调用document.importNode方法.

### 3.2.2 insertBefore()

1)概览
Node.insertBefore() 方法在参考节点之前插入一个节点作为一个指定父节点的子节点。
2)语法
```js
var insertedElement = parentElement.insertBefore(newElement, referenceElement);
//insertedElement 是被插入的节点，即 newElement
//parentElement  是新插入节点的父节点
//newElement 是被插入的节点
//referenceElement 在插入newElement之前的那个节点
```

如果`referenceElement`为`null`则`newElement`将被插入到子节点的末尾*。*如果`newElement`已经在DOM树中，`newElement`首先会从DOM树中移除。
3)示例
```js
   //html
    <div id="far">
        <div id="one"></div>
    </div>
    <div id="two"></div>

    //js
    var far = document.getElementById('far');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    far.insertBefore(two,one)

    //js执行之后的效果
    <div id="far">
        <div id="two"></div>
        <div id="one"></div>
    </div>
    //insertBefore是插入到参考节点之前,也有剪切的效果
```
### 3.2.3 removeChild()
1)概览
Node.removeChild() 方法从DOM中删除一个子节点。返回删除的节点。
2)用法
```js
let oldChild = node.removeChild(child);
//child 是要移除的那个子节点.
//node 是child的父节点.
//oldChild保存对删除的子节点的引用. oldChild === child.

//OR
element.removeChild(child);
```

- 被移除的这个子节点仍然存在于内存中,只是没有添加到当前文档的DOM树中,因此,你还可以把这个节点重新添加回文档中,当然,实现要用另外一个变量比如`上例中的oldChild`来保存这个节点的引用. 
- 如果使用上述语法中的第二种方法, 即没有使用 oldChild 来保存对这个节点的引用, 则认为被移除的节点已经是无用的, 在短时间内将会被内存管理回收.
- 如果传入参数的不是子节点,那么会报错。

3)示例
```javascript
  //html
  <div id="far">
      <div id="son"></div>
  </div>

  //js
  var far = document.getElementById('far');
  var son = document.getElementById('son');
  var result = far.removeChild(son);
  console.log(result);  //<div id="son"></div>

  //js执行之后的效果
  <div id="far">
  </div>
```

### 3.2.4 replaceChild()
1)概览
用指定的节点替换当前节点的一个子节点，并返回被替换掉的节点。有剪切效果。
2)用法
```js
replacedNode = parentNode.replaceChild(newChild, oldChild);
//newChild 用来替换 oldChild 的新节点。如果该节点已经存在于DOM树中，则它会被从原始位置删除。
//oldChild  被替换掉的原始节点。
//replacedNode 和oldChild相等。
```

3)用法
```javascript
  //html
  <div id="far">
      <div id="one"></div>
  </div>
  <div id="two"></div>

  //js
  var far = document.getElementById('far');
  var one = document.getElementById('one');
  var two = document.getElementById('two');
  far.replaceChild(two,one);

  //js执行之后的效果
  <div id="far">
      <div id="two"></div>
  </div>
  //也有剪切的效果
```
### 3.2.5 cloneNode()
1)概览
Node.cloneNode() 方法返回调用该方法的节点的一个副本.
2)用法
```js
var dupNode = node.cloneNode(deep);
//node 将要被克隆的节点
//dupNode 克隆生成的副本节点
//deep 可选,是否采用深度克隆,如果为true,则该节点的所有后代节点也都会被克隆,如果为false,则只克隆该节点本身.
```
3)示例
```javascript
  //html
  <div id="box">
      div里面的内容
  	<p>p元素</p>
  </div>

  //js
  var box = document.getElementById('box');
  console.log(box.cloneNode()); //<div id="box"></div>

  console.log(box.cloneNode(true)) //<div id="box">  div里面的内容 <p>p元素</p> </div>
```



# 四、综合案例1-----水果选择

```js
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <style>
    select {
      width: 200px;
      height: 200px;
      background-color: #33cccc;
      font-size: 20px;
    }
  </style>
</head>

<body>
  <!-- 左侧选择 -->
  <!-- all->document -->
  <select id="all" multiple="multiple">
    <option>苹果</option>
    <option>橘子</option>
    <option>梨</option>
    <option>西瓜</option>
    <option>水蜜桃</option>
  </select>

  <!-- 右侧选择 -->
  <select id="select" multiple="multiple">
  </select>

  <!-- 底部按钮 -->
  <input type="button" value=">>" id="btn1">
  <input type="button" value="<<" id="btn2">
  <input type="button" value=">" id="btn3">
  <input type="button" value="<" id="btn4">
  
  <script>
    //获取元素
    var all = document.getElementById('all'); // 左边的下拉框
    var select = document.getElementById('select'); //  右边的下拉框
    var btn1 = document.getElementById('btn1') // 全部从左到有的按钮
    var btn2 = document.getElementById('btn2');// 全部从右到左的按钮
    var btn3 = document.getElementById('btn3') //选中的从左到右
    var btn4 = document.getElementById('btn4') //选中的从右到左
    var options = all.getElementsByTagName('option'); //左边的option,动态改变
    var options2 = select.getElementsByTagName('option');//右边的option,动态改变

    //全部从左到右
    btn1.onclick = function () {
        var i = 0;
        var len = options.length
        for(i = 0; i < len; i++){
            select.appendChild(options[0]);
        }
    }

    //全部从右到左
    btn2.onclick = function () {
        var i = 0;
        var len = options2.length
        for(i = 0; i < len; i++){
            all.appendChild(options2[0]);
        }
    }

    //选中的从左到右
    btn3.onclick = function (){
        for(var i = 0;i<options.length;i++){
            if(options[i].selected == true){
                select.appendChild(options[i]);
                i--;
            }
        }
        
        // 移动过去后的内容取消选中状态
        for(var i = 0;i<options2.length;i++){
            options2[i].selected = false;
        }
    }

    //选中的从右到左
    btn4.onclick = function (){
        for(var i = 0;i<options2.length;i++){
            if(options2[i].selected == true){
                all.appendChild(options2[i]);
                i--;
            }
        }

        // 移动过去后的内容取消选中状态
        for(var i = 0;i<options.length;i++){
            options[i].selected = false;
        }
    }
  </script>
</body>

</html>
```