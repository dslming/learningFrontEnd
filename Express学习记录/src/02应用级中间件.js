//添加一个中间件，加入自己的逻辑代码
//通过express来创建一个服务器
var express = require("express");
var app = express();

//应用级中间件：
//1.0影响所有的请求
// app.use((req,res,next)=> {
//     console.log("欢迎来到我的网站");
//     next();
// });
//2.0只影响某一个请求
// app.use("/a", (req,res,next)=> {
//     console.log("////");
//     next();
// });
//3.0 影响get，post
app.get("/a", (req,res,next)=>{
    console.log("/////aaaaa");
    next();
});

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