//引入mysql第三方包
var mysql      = require('mysql');
//连接数据库
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'itcast'
});
//开启连接
connection.connect();


// 查：
//      error: 错误信息
//      results: 查询出来的数组结果
//      fields: 数据表中每个字段的详细信息
// 增：
//      error: 错误信息
//      results: 操作完成以后返回的对象
//          affectedRows：受影响的行数
//      fields: undefined
// 删：
//      error: 错误信息
//      results: 操作完成以后返回的对象
//          affectedRows：受影响的行数
//      fields: undefined
// 改：
//      error: 错误信息
//      results: 操作完成以后返回的对象
//          affectedRows：受影响的行数
//      fields: undefined



//新增语句
// var str = "INSERT INTO person (name, age, gender) VALUES ('关羽', 78, '男')";
//删除语句：
// var str = "DELETE FROM person WHERE id = 6"
//修改语句：
var str = "UPDATE person SET name='关公' WHERE id=7";
//执行SQL语句
//  error: 错误信息
//  results: 查询出来的数组结果
//  fields: 数据表中每个字段的详细信息
connection.query(str, function (error, results, fields) {
   if(error) {
       return console.log("error");
   } 
   console.log(results);
   console.log("------------------------------------------");
   console.log(fields);
});
//关闭数据库
connection.end();