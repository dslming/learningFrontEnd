# 一、表单组成
## 1.1 表单属性
action:表单数据提交到哪。例：action="./result.php"  即把表单提交到同目录下的 result.php 文件
method:提交方法：

- get:在网址上有体现,不适合提交复杂数据,更适合获取。
- post：不会在网址体现。

submit:默认的表单提交按钮

只有加了name属性的表单控件才会被提交。

```html
 <!-- action填的是地址，代表提交到哪个服务器页面 -->
<form action="./result.php">
     <!-- 此文本框加了name属性，不加name属性无法把它的数据提交到服务器 -->
     <input type="text" name="star" placeholder="请输入你喜欢的明星！">
     <input type="submit">
</form>
```



# 二、表单处理

## 2.1表单数据的获取
在处理表单文件的中,存在`_GET`和`_POST`的超全局变量，就是一个默认存在的变量，类似于JS中的window。不需要声明，直接可以用。是一个关联型数组，key为提交表单的name属性名。value为name属性的值。

_GET对应get方法,_POST对应post方法。_REQUST可以拿到get和post。
```php
$_GET['star']; //拿到表单提交过来的数据中name为star元素的值
```

## 2.2数据存在性检查

isset()函数可以用来判断是否存在某个值。

```php
isset($_GET['star']);   //判断$_GET中是否有以star为key的值，如果有返回true,如果没有返回false
```

## 2.3 综合案例

英雄查询。

# 三、表单提交的特点
在点击submit提交按钮时,url地址栏会显示: 192.168.1.1/index.php?name="pwd"$value="12356"。
那么就可以利用这个特性,在a标签跳转时模拟这个数据:实现数据提交：
```php
 <a href="list.php?hero=<?php echo $hero['champion_name']; ?>" </a>
```

# 四、文件操作
## 4.1 表单元素

上传文件必须要增加一个属性：enctype='multipart/form-data'。

```html
<input type="file">
```
例子：
```html
<!-- 表单里仅仅一个文件上传元素，提交到file.php -->
<form action="file.php" method='post' enctype='multipart/form-data'>
    <input type="file" name='icon'>
    <input type="submit">
</form>
```

## 4.2 文件处理
使用`$_FILES`全局变量,该变量包括一些文件属性信息,$_FILES  也是一个关联型数组，
>
>  1.name：保存的是文件名
>  2.type：保存的是文件类型
>  3.tmp_name：保存的是客户端上传来的文件临时保存的路径
>  4.error：错误信息代码
>  5.size：文件大小

`tmp_name` 这个键里保存的临时目录，客户端上传文件提交到服务器后，是上传到服务器的**临时文件夹**，如果服务器不做任何处理，那么这个上传的文件会很快被系统**自动删掉**。如果我们要正确接收到客户端上传的文件，还必须想办法把这个文件移出临时文件夹！



## 4.3 文件移动
因为上传的文件是临时存储,所以需要移动到指定的路径下。

用法：

```php
move_uploaded_file(文件原路径+文件名、目标路径+文件名);
//参数1：代表要找到被移动的文件
//参数2：代表把这个文件移动到哪
//如果移动成功，返回值会为true，如果移动失败，返回值会为false
```
例子：
```php
<?php
         var_dump($_FILES);
		//参数1：移动哪个文件
		//参数2：移动到哪
         $success = move_uploaded_file($_FILES['icon']['tmp_name'],'./upload/'.$_FILES['icon']['name']);

         if($success):
            echo '上传成功！';
         else:
            echo '上传失败';
         endif;
?>
```

## 4.4 写入文件
用法：
```php
file_put_contents(要写入的文件,写入的内容);
```
例子：
```php
//写到当前目录的1.txt文件
file_put_contents('1.txt',"abcd");
```

## 4.5 文件读取
用法：
```php
//会把这个文件里的内容读取出来以返回值形式返回。
file_get_contents(文件名);
```
例子：
```php
//代表读取出1.txt中的内容，存到$content变量里
$content = file_get_contents('c:\123\1.txt');
```

## 4.6 存在判断
语法：
```php
//如果文件存在，则返回true,否则返回false
file_exists(文件名);
```



## 4.7 综合案例

用文件模拟登陆的用户信息,注册和登陆。

<全文结束>

## 4.8 文件编码


