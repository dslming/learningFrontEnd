var fs = require("fs");
var handles = require("./handle.js");

function router(req, res) {
    var url = req.url;
    // 请求主页
    if (url === "/" || url === "/index" || url === "/index.html") {
        handles.getIndex(req, res);
    }

    // 静态文件
    else if ( url.indexOf("node_modules") != -1 || url.indexOf("/imgs") != -1) {
        handles.getStatic(req, res);
    }

    // 添加页面
    else if (url === "/add") {
        handles.getAdd(req, res);
    }

    // 添加请求
    else if (url === "/postAdd") {
        handles.postAdd(req, res);
    }

    // 编辑页面
    else if (url.indexOf("edit") != -1) {
        handles.getEdit(req, res);
    }

    // 编辑请求
    else if (url === "/postEdit") {
        handles.postEdit(req, res);
    }

    // 删除
    else if (url.indexOf("/del") != -1) {
        handles.del(req, res);
    }

    // 图片预览
    else if(url == "/upload"){
        handles.upload(req, res);
    }
}

module.exports = router;