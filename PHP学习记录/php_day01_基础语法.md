# 一、PHP相关依赖
>可以与HTML混编解决JS不能操作数据库的问题。

## 1.1 环境安装
  需要安装Apache（为了让电脑变web服务器）、PHP环境（执行PHP代码）、MySql（数据库）。一个软件叫PHPStudy，我们只要装好这一个软件，就具备了Apache、PHP、MySql。
## 1.2 功能分析
1)Apache作用
把浏览器请求的网页内容找出来，发送回浏览器。只是简单的找到文件，再把文件内容发回给浏览器，不对文件内容做解释。

2)PHP环境作用
在Apache把文件内容发回浏览器之前，对以.php后缀文件内容里的php代码做解释得到结果，再把这个结果通过Apache发回给浏览器。

3)一些注意

- Apache和PHP环境共同组成服务器


- .html文件内的<?php?>标签不做翻译
- .php文件内的非<?php?>标签都会原样输出

#二、PHP基础语法
## 2.1 echo
向浏览器输出一段内容。
```php
//引号里可以是html标签、变量、字符串。
echo "要输出的内容";

//例子：
<?php
    echo '<h1>I am title</h1>';
    $name = "jack";
    echo "i am $name";
?>
// 也可以写在html标签内 
<img src="<?php echo $carList[$i]['path']?>">
```
- 单引号包起来的内容里，如果有变量名，这个变量名只当字符串，不对变量名做解析
- 双引号包起来的内容里，如果有变量名，会把这个变量的值取出来当字符串，会多变量名做解析

## 2.2 数组
>php中有两种类型的数组：索引数组:存放基本数据类型数据、关联数组:类似js对象的复杂数据类型。

### 2.2.1 数组定义
语法：
```php
// 1)索引数组
$数组名 = array(元素列表);
// 2)关联数组
$数组名 = array('key'=>'value');
```
例子:
```php
// 1)索引数组,可以通过索引取出内容
$arr = array(1, 2, 3, 4, 5);       //定义并赋值
var_dump($arr);                    //打印复杂数据类型
$array[0];                         //取出索引为0的元素

// 2)关联数组,必须指定属性名称获取属性的内容
$arr = array('name'=>'jack', 'age'=>16);//定义并赋值,key必须是字符串
$arr['name'];                           //取出key为name的值

//3)数组定义的其他方式
$arr2 = [1, 2, 3, 4, 5];           // PHP 5.4 以后定义的方式可以用 `[]`
```

### 2.2.2 数组遍历

> count(array);    //返回数组的元素数量,数组的长度

**1)索引数组**
```php
<?php
	//声明索引数组
    $arr = array(10,20,30,40);
	//遍历索引数组的元素
    for($i = 0; $i < count($arr); $i++){

        echo $arr[$i].'<br>';
    }
?>
```

**2)关联数组**
```php
<?php
   
   //声明数组
   $arr = array('name'=>'jack', 'age'=>16);

   //遍历数组
   foreach($arr as $key => $value){
        //输出当前元素的key和value
        echo $key . " => " . $value;
        echo '<br/>';
   }

   //foreach($arr as $value){}可以简写只取内容value
?>
```
## 2.3 include

include是PHP中用来导入另一文件内容的指令。可以是变量函数等。被导入的php文件不需要写<?php?>标签

```
 <?php include "./data/data_cars.php"?>
```

## 2.4 与JS对比

**1)字符串的拼接,**

- JS:“hello”+name,用加号
- PHP:“hello”."world",用'.'

**2)字符串单双引号**

- 双引号内的变量,会被解析
- 单引号内的变量,不会被解析

**3)输出语句**

- echo,简单数据
- var_dump,复杂数据

**4)指令式**

指令的‘{’换为':','}'换为'endxxx'。

```
if():
else:
endif;
```



# 三、与HTML混编

>1)PHP代码可以和HTML代码混合在一起编写,必须写在.php文件才行。
>
>2)可以被拆分写多个标签或文件。

## 3.1 PHP创建表格
根据PHP数组数据创建表格。
1) PHP数组为
```php
$books = array(
    array('name'=>'C语言从入门到入土','price'=>9.9),
    array('name'=>'MySql：从删库到跑路','price'=>11.9),
    array('name'=>'前端开发：土豪之路','price'=>99.99),
    array('name'=>'颈椎病治疗指南','price'=>8.4)
);
```
2) 核心代码为
```php
<tbody>
  <!-- tbody里面的内容由PHP代码生成 -->
<?php
   
//遍历数组
for($i = 0; $i < count($books); $i++){
    
    //数组中每个元素是一行
    echo "<tr>";
    
    //元素内的每个属性值是每一列
    echo "<td>". $books[$i]['name'] ."</td>";
    echo "<td>". $books[$i]['price']."</td>";
    
    echo "</tr>";
}
?>
</tbody>
```
缺点：每个标签都需要通过字符串拼接的方式输出。

3)改进后为
```php
 <tbody>
            <?php
                for($i = 0; $i < count($books); $i++){
            ?>    //1）先将php代码段结束
            <tr>  //2) 直接写html标签,因为可以原样输出 
                    <?php
                         foreach($books[$i] as $key => $value){
                    ?>
                    <td>
                            <?php
                                echo "$value";
                             ?>
                    </td>

                    <?php
                        }
                    ?>
            </tr>
            
            <?php
                } 
            ?>
</tbody>
```
缺点：for的{}花括号配对比较难找。

4)改进后：

```php
 <tbody>
            <?php
                for($i = 0; $i < count($books); $i++): //1) 将'{'改为':'
            ?>
            <tr>
                    <?php
                         foreach($books[$i] as $key => $value):
                    ?>
                    <td>
                            <?php
                                echo "$value"; 
                             ?>
                    </td>

                    <?php
                        endforeach; // 2)将'}'改为'endforeach;'
                    ?>
            </tr>
            
            <?php
                endfor;
            ?>
        </tbody>
```

# 四、解决PHP输出中文乱码
## 4.1 html中指定编码集
包在HTML代码里，用HTML标签指定字符集编码。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- html这里有指定编码 -->
    <meta charset="UTF-8">
</head>
<body>

<?php
    echo "大家好，我在黑马学前端";
?>

</body>
</html>
```
## 4.2 header()指定

PHP中告诉浏览器，用UTF-8编码

```
<?php
    header('content-type:text/html;charset=utf-8');
    echo "大家好，我在黑马学前端";
?>
```

<全文结束>