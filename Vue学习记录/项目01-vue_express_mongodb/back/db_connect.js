var mongoose = require("mongoose");

// 连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/local");
mongoose.connection.on("connected", function () {
    console.log("数据库连接成功...");
});

// 导出模块
module.exports = mongoose;