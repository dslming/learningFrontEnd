1) 数据是数组

2)使用nextTick

```js
handleSave() {
      this.$nextTick(() => {
        this.isShow = false
      })
    }
```

如果isShow改变多次，需要提交到队列中执行。nextTick就会清空队列。重新给其赋值。

原因：

<img src="./img/nextTick.png">