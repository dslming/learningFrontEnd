js 错误Error对象详解

### 一、概念

error，指程序中的非正常运行状态，在其他编程语言中称为“异常”或“错误”。解释器会为每个错误情形创建并抛出一个Error对象，其中包含错误的描述信息。

ECMAScript定义了六种类型的错误。除此之外，还可以使用Error构造方法创建自定义的Error对象，并使用throw语句抛出该对象。

内置六种错误：
ReferenceError:找不到对象时
TypeError:错误的使用了类型或对象的方法时
RangeError:使用内置对象的方法时，参数超范围
SyntaxError:语法写错了
EvalError:错误的使用了Eval   
URIError:URI错误

### 二、错误处理

即使程序发生错误，也保证不异常中断的机制。

```js
try{
    可能发生错误的代码
}catch(err){
    只有发生错误时才执行的代码
}finally{
    无论是否出错，肯定都要执行的代码
}
```
使用要点：
使用try包裹的代码，即使不出错，效率也比不用try包裹的代码低；
在try中，尽量少的包含可能出错的代码；
无法提前预知错误类型的错误，必须用try catch捕获；

### 三、抛出自定义错误
何时：如果函数的定义者，需要告知调用者使用过程中的错误；

如何：throw new Error("提示文字")；

###  四、应用
```js
function assert (condition, msg) {
  if (!condition) throw new Error(`[vuex] ${msg}`)
}
```
```js
assert(typeof Promise !== 'undefined', `vuex requires a Promise polyfill in this browser.`)
```

<全文结束>