>使用jQuery的$.ajax()方式实现ajax。


## 1.1 $.ajax()
```js
//传入一个对象
$.ajax({
    
  //请求网址
  url: './data.php',
  //请求类型
  type: 'post',
  //服务器响应数据类型，如果是跨域，可以改成jsonp
  dataType: 'json',
  //发送给服务器的数据（请求体）,如果是get请求数据写在url,如果是post才写data属性
  data: { id: 1 },
  //回调函数：响应回来调用的函数
  success: function (data) {
    console.log(data)
  },
  //请求失败触发
  error: function (err) {
    console.log(err)
  }
})
```
常用选项参数介绍：

- url：请求地址
- type：请求方法，默认为 get
- dataType：服务端响应数据类型，一般只是在跨域时写jsonp，其他时候可以不写，自动根据响应头判断返回数据
- data：需要传递到服务端的数据，如果 GET 则通过 URL 传递，如果 POST 则通过请求体传递
- timeout：请求超时时间
- success：请求成功之后触发
- error：请求失败触发
- async:false,

## 1.2 参数说明补充

- dataType:是浏览器对服务器数据的解析方式,在服务器的响应头中会通过content-type指定响应格式。

<全文结束>