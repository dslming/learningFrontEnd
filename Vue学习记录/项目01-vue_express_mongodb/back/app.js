var express = require("express");
var router = require("./router.js");
var cors = require('cors')


var app = express();
app.use(cors());
app.use("/views", express.static("views"));
app.use(router);

app.listen(3000,function(){
    console.log("runing");
});