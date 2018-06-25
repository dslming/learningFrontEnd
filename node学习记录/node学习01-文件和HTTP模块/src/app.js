

var http = require("http");
var fs = require("fs");


var server = new http.Server();

server.on("request",function(req,res){
    var url = req.url;
    console.log(url);


    // 主页可以省略后缀名
    if(url==='/index'  || url==='/index.html' || url==='/'){
        fs.readFile("./public/index.html",function(err,fileData){
            if(err)return console.log(err);
            else{
                res.end(fileData);
            }
        });
    }
    // 请求其他资源
    else if(url.indexOf("/public") !=-1){
        fs.readFile('.'+url,function(err,fileData){
            if(err)return console.log(err);
            else{
                res.end(fileData);
            }
        });
    }
    
    // 请求资源失败
    else{
        fs.readFile("./public/404.html",function(err,fileData){
            if(err)return console.log(err);
            else{
                res.end(fileData);
            }
        });
    }
});

server.listen("3000","127.0.0.1",function(){
    console.log("runing");
});

