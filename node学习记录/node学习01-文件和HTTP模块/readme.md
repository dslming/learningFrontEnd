
>详细参考NODE API
>
# 一、HTTP模块

## 1.1 创建server对象

语法：
```js
http.createServer([options][, requestListener])
```
Returns a new instance of http.Server.

示例：
```js
var server = new http.Server();
```
## 1.2 注册请求事件

![server](.\img\server.png)

语法：

```
request <http.IncomingMessage>
response <http.ServerResponse>
```

示例：

```js
server.on("request",function(req,res){
    console.log("请求");
});
```

## 1.3 开启监听

语法：

```js
server.listen(options[, callback])
```

示例：

```js
server.listen("3000","127.0.0.1");
```

## 1.4 获取请求内容

请求体的req对象有ulr字段，保存了请求的信息

例子：

浏览器：http://localhost:3000/index
服务器：console.log(req.url);// url: '/index',
> url拿到的是网站后面的路径

## 1.5 统一处理请求资源

为了方便处理，将所有静态文件都放在一个文件夹中，直接根据url去文件夹中拿取，然后响应浏览器。目录结构如下：

![public](.\img\public.png)


1)html中：

```js
 <img src="./public/01.jpg" alt="">
 // 浏览器发送请求时的URL为： /public/01.jpg
```

2)服务器中：

```js
if(url.indexOf("/public") !=-1){
        fs.readFile('.'+url,function(err,fileData){
            if(err)return console.log(err);
            else{
                res.end(fileData);
            }
        });
 }
```

app.js 与 public同一目录。


**补充说明：**

html中的请求路径仅仅是一段字符串，不一定是实际的资源路径。例如，src="./a/a/a/a/01.jpg"。
那么服务器解析url等于"/a/a/a/a/01.jpg",那么服务器可以从实际路径中取出,做出相应。

# 二、文件模块

## 2.1 读文件

示例：

```js
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

## 2.2 写文件

示例：

```js
fs.writeFile('message.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
```



<全文结束>





