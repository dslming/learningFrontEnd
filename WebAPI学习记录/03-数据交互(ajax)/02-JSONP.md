## 1.1 为什么要有JSONP
解决浏览器请求的跨域问题。

背景知识：
>**跨域：**
>浏览器的请求网站与GET方法内的字符串出现: 协议版本、域名、端口号不一致，就称为跨域。

>**同源策略:**
>阻止从一个域上加载的脚本获取或操作另一个域上的文档属性。也就是说，受到请求的 URL 的域必须与当前 Web 页面的域相同。这意味着浏览器隔离来自不同源的内容，以防止它们之间的操作。这个浏览器策略很旧，从 Netscape Navigator 2.0 版本开始就存在。简单说同源：浏览器地址和get的请求地址一致

```js
浏览器网址:https://github.com/webmodules/jsonp/blob/master/index.js
get内容：https://github.com/webmodules/jsonp/blob/master/index.js
两者相同,称为同源。
```

## 1.2 JSONP原理
1)利用script标签的src属性可以实现跨域请求。
2)script的请求内容会被当作js代码执行。
3)在请求时指定要执行的函数callback,服务器会将请求内容放在callback中。
4)那么浏览器本地实现一个callback函数,就会寻找该函数执行。

## 1.3 JSONP的实现
客户端：
```js
//定义一个接收函数
 function success(obj){
   console.log('我是success');
   console.log(obj);
 }

//script标签
<script src="http://127.0.0.1/PHP_day09/03-cars/data_jsonp.php?callback=success">
  //解决跨域问题有两种方式,在服务器和JSONP。
  //1)服务器端：
  //  CROS(Cross Origin Resource Share，跨域资源共享)增加一句话,header('Access-Control-Allow-Origin: *');
  //2)使用JSONP技术,利用script标签和服务器代码
</script>
```

服务器：
```php
<?php 

    $arr = array(
        "name"=>"jack",
        "age"=>16,
        "gender"=>true
    );

    //取到传递过来的函数名
    $func = $_GET['callback'];

    $json = json_encode($arr);

    echo "$func($json);";
?>
```