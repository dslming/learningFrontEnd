//添加一个中间件，加入自己的逻辑代码
//通过express来创建一个服务器
var express = require("express");
var app = express();

//需求：希望将来大伙在访问我的网站时，每个页面都能输出一句话：欢迎来到我的网站
//可以使用中间件来完成：
//中间件：
//  req:请求对象
//  res:响应对象
//  next:函数，如果在代码中调用了这个函数，那么代码会继续向下执行，如果没有调用，就执行这个中间件的代码之后结束
app.use((req,res,next)=> {
    console.log("欢迎来到我的网站");
    next();
});

//body-parser
//cookie-session

//添加路由
app.get("/",(req,res)=> {
    console.log("000000");
})
app.get("/a",(req,res)=> {
    console.log("111111");
})
app.get("/b",(req,res)=> {
    console.log("2222222");
})

app.listen(3000, ()=>{
    console.log("running");
});