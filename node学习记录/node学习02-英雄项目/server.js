var http = require("http");
var router = require("./router.js");

var server = new http.createServer();
server.on("request",function(req, res){
    router(req, res);
});

server.listen("3000","127.0.0.1",function(){
    console.log("runing");
});