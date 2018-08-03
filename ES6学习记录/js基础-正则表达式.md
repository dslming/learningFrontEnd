![正则](.\img\正则.bmp)

实现一个字符串：

```js
/pages/goods_detail/?goods_id=55578
```

将goods_detail提取出来。

```js
var url = "/pages/goods_detail/?goods_id=55578";
// 1) ()是将正则表达式分组，提起出分组内容。
// 2) / 正则内容被两个反斜线包含 /
// 3) .+ 通配符
// 4) exec会得到一个数组。
var dist = /\/.+\/(.+)\/.+/.exec(url)[1];
console.log(dist);// goods_detail
```

工具使用：

![正则工具使用](.\img\正则工具使用.bmp)

<全文结束>