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
//查询语句
var str = "SELECT * FROM person"
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