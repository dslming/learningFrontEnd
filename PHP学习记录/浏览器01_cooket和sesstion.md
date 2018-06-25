# 一、Cookie
## 1.1 cookie原理
1)可以通过setcookie()函数将例如：用户名、密码等信息存储在浏览器的本地文件中,文件的名字叫做cookie。
2)cookie的读取通过全局变量$_COOKIE数组中存储。
3)cookie的删除通过setcookie函数的时间设置为过去式即可。

## 1.2cookie使用

### 1.2.1 示例1-广告关闭

一个广告的应用,点击关闭广告后一个星期后重新显示。

**index.php文件内容：**

```html
<body>
    <?php
    /*
      思路：关闭广告就写入一条cookie记录这个浏览器有关广告
            所以在访问首页时判断有没有cookie，没cookie证明没关过广告，所以要显示广告div
    */
      //判断有没有cookie,如果有返回true,没有返回false
      $result = isset($_COOKIE['closeAD']);
      //如果没有cookie就显示下面那段div，取反就代表没cookie
      if(!$result):
    ?>
    <!-- 没有cookie才显示下面的div -->
    <div class="ad">
        <a href="closeAd.php">x</a>
        <strong>屠龙宝刀，点击就送</strong>
        <div>关掉我就再也不出现了</div>
    </div>
    <?php endif; ?>
    <h1>我是网站主要内容</h1>
</body>
```
**closeAd.php文件内容：**

```php
<?php
    setcookie('closeAD','ok',time()+60*60*24*7);
    header('location:index.php');
?>
```

### 1.2.2 示例2-登录保持(1)

登录成功后,记住用户名和密码。

**index.php文件内容：**

```php
<body>
    <?php
  		//存在登录信息则直接读取
        $name = "";
        $pwd ="";
        if(isset($_COOKIE['user'])){
            $name = $_COOKIE['user'];
        }

        if(isset($_COOKIE['pwd'])){
            $pwd = $_COOKIE['pwd'];
        }
    ?>

    <form action="login.php" method="POST">
        <input type="text" name="user" value="<?php echo $name; ?>" placeholder="请输入账号">
        <br>
        <input type="password" name="pwd" value="<?php echo $pwd; ?>" placeholder="请输入密码">
        <br>
        <input type="submit" value="登录">
    </form>
</body>
```

**login.php文件内容：**

```php
<?php
    include "doSQL.php";
    $user = $_POST['user'];
    $pwd = $_POST['pwd'];
    //在数据库中查询
    $sql = "select * from userpwd where user='$user' and password='$pwd'";
    $ret = my_Query($sql);
    //查询信息匹配增加cookie信息
    if(count($ret) > 0){
    setcookie('user',$user,time()+60);
    setcookie('pwd',$pwd,time()+60);
    echo "ok";
    }else {
        echo "fail";
    }
?>
```

## 1.3 注意事项

**1)删除cookie**
- 服务器将时间设置为过去时
```php
setcookie('pwd',$pwd,time()-60);//time(),1970年1月1日00:00:00到目前时间的秒数
```
- 浏览器通过F12手动清除


**2)cookie机制**

如果相同文件下路径下存在cookie,那么所有的GET请求的请求头中都会存在cookie字段如：Cookie:

user=jack; pwd=123。这样服务器的php文件就可以通过全局变量$_COOKIE访问了。

#二、SESSION

## 2.1 session原理

>cookie保存在本地可以被伪造和修改,存在很大风险,于是session应运而生。

session原理为：

对于浏览器POST提交的表单信息如用户名或者密码等信息将在服务器保存,保险柜。
浏览器仅保存放在服务器上保险柜的钥匙session-id。那么每次的数据读写均是对服务器的数据进行操作,就会保证数据的安全性了。

## 2.2 session使用

用法与cookie相同。不过session可以存放复杂数据类型。

```php
session_start();//开启session
unset($_SESSION['name']);//删除session
$_SESSION['name']//读写
```

### 2.2.1 使用示例1-登录保持

**index.php文件：**

```php
<body>
    <?php
        $name = "";
        $pwd ="";
        session_start();
        if(isset($_SESSION['user'])){
            $name = $_SESSION['user'];
        }else{
            echo "name 不存在";
        }

        if(isset($_SESSION['pwd'])){
            $pwd = $_SESSION['pwd'];
        }else{
            echo "pwd 不存在";
        }
    ?>

    <form action="logon.php" method="POST">
        <input type="text" name="user" value="<?php echo $name; ?>" placeholder="请输入账号">
        <br>
        <input type="password" name="pwd" value="<?php echo $pwd; ?>" placeholder="请输入密码">
        <br>
        <input type="submit" value="登录">
    </form>
</body>
```

**login.php文件：**

```php
<?php
    include "doSQL.php";
    // 获取输入的数据
    $user = $_POST['user'];
    $pwd = $_POST['pwd'];
    // 根据用户输入在数据库中搜索
    $sql = "select * from userpwd where user='$user' and password='$pwd'";
    $ret = my_Query($sql);

    // 查询到结果
    if(count($ret) > 0){
        // 通过session写入
        session_start();
        $_SESSION['user'] = $user;
        $_SESSION['pwd'] = $pwd;
        var_dump($_SESSION);
    }else{
        echo "fail";
    }
?>
```

# 三、HTTP协议

## 3.1 请求报文

**请求行**：指明本次请求是`get`请求还是`post`请求（也有其他请求，例如put、delete、trace等，但不常用，常用的主要为get何post），以及指明本次请求遵守的协议版本

**`请求头`**：本部分的格式以`键值对`的形式组成，每行一对。本部分大概的内容有：请求目的地域名、连接状态、缓存状态、发起请求的浏览器信息、字符编码等。请求头后面会有一个空行，作为请求头部分结束的标记。

**`请求正文`**：本次请求发送给服务器的附加信息。一般`get请求`的请求正文为空

> 在get请求中，一般没有请求体，post才有



## 3.2 响应报文

`状态行`：（HTTP/1.1）协议版本、（200）状态码、（OK）状态消息

`响应头`：包含响应时间、服务器环境、响应体的格式等，响应头后面会有一个空行代表结尾。

`响应体`：就是服务器发回的文件内容。例如浏览器请求index.html界面，那么服务器会把index.html里的内容当做响应体发回给浏览器，然后浏览器自己再解析。



