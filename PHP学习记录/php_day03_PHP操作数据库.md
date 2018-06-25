# 一、数据库常识
## 1.1 建立数据库
   使用mySQL数据库软件,在phpStudy的“MySQL管理器” ->“MySQL-Front”,“locallhost”是所有数据的集合,在localhost新建一个数据库即可。然后,新建表格和字段即可。像  `Id`  这样用来区分不同数据的字段，叫  `主键`，或者叫  `主索引`。

## 1.2 SQL语句
### 1.2.1 增加数据insert
```php
//用法
insert into 表名(字段名) values(值);
//示例
insert into user(name,age,desc) values('andy',20,'打酱油的');
```
### 1.2.2 删除数据
1)删除表格
```php
delete from 表名;
```
2)删除数据
```php
//用法
delete from 表名 where 字段 = 某个值;
//示例
delete from user where id = 2;
delete from user where id <= 3;
```
### 1.2.3 查询语句
```php
//用法
select 字段 from 表名;//按字段查询
select * from 表名;//所有数据
//示例
select name,age from user;、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、
select * from user;
select * from user where id < 10;//按条件查询
```

### 1.2.4 修改语句
```php
//用法
update 表名 set 字段 = 新值;
//示例
update user set name = '黑马一哥';//所有字段
update user set name = '黑马一哥' where id = 3;//按条件
```

# 二、PHP操作数据库

## 2.1 建立连接

```php
//用法
mysqli_connect('数据库地址','账号','密码','数据库名');
//参数1：数据库的ip地址
//参数2：数据库管理的账号
//参数3：数据库管理的密码
//参数4：数据库名，因为一个数据库服务器里可能有很多数据库，你需要告诉它连接哪个数据库的

//示例
$link = mysqli_connect('127.0.0.1','root','root','manage');
//这个返回值我们一般叫  连接通道，这个  连接通道  里面的内容是什么我们不需要关心，
//只需要知道，连接通道里包含了本次连接的各种信息，只要不是false就代表数据库连接成功。
```
## 2.2 执行SQL语句

```php
//用法
mysqli_query(连接通道，SQL语句);

//示例
$sql = "insert into customer(cName,cAge) values('廉明',25)";
$ret = mysqli_query($link, $sql);
```

## 2.3 显示查询结果

对于查询的SQL语句,那么mysqli_query()返回值不能够直接使用,需要解析，函数为:mysqli_fetch_all。
```php
//用法
mysqli_fetch_all(查询结果,MYSQLI_ASSOC);//MYSQLI_ASSOC值=1
//示例
$link = mysqli_connect('127.0.0.1','root','root','manage');
$sql = 'select * from user';
$ret = mysqli_query($link, $sql);
$users = mysqli_fetch_all($result,MYSQLI_ASSOC);
```
## 2.4 获取执行结果

对于增、删、改的SQL语句,需要用mysqli_affected_rows解析。返回作用的语句数量。

```php
//用法
$rowNum = mysqli_affected_rows($link);

//示例
mysqli_query($link, $sql);            // 执行sql语句
$rowNum = mysqli_affected_rows($link);// 获取受影响的行数
```

## 2.5 关闭连接

```php
mysqli_close($link);//请记得一定要关闭数据库连接，否则会占用服务器资源。
```



# 三、数据库操作的封装

## 3.1 查询数据库内容
封装：
```php
function my_Query($sql){
    
        // 连接数据库
        $link = mysqli_connect('127.0.0.1', 'root', 'root', 'manage');
    
        // 执行sql语句
        $result = mysqli_query($link, $sql);
    
        // 解析数据
        $data = mysqli_fetch_all($result);
    
        // 关闭连接
        mysqli_close($link);
    
        // 返回行数
        return $data;
    }
```
示例：
```php
$sql = 'select * from customer';
$data = my_Query($sql);//$data是一个索引型的数组
```
## 3.2 增删改操作
封装：
```php
function my_Excute($sql){
    
        // 连接数据库
        $link = mysqli_connect('127.0.0.1', 'root', 'root', 'manage');
    
        // 执行sql语句
        mysqli_query($link, $sql);
    
        // 获取受影响的行数
        $rowNum = mysqli_affected_rows($link);
    
        // 关闭连接
        mysqli_close($link);
    
        // 返回行数
        return $rowNum;
    }
```

示例:
```php
$sql = "insert into customer(cName,cAge) values('廉明2',25)";
my_Excute($sql);
```
# 四、综合案例-人员管理系统

略。



<全文结束>