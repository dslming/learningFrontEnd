var mongo = require("./db_sql.js");
var fs = require("fs");
var uurl = require("url");//解析url

// 主页
let getIndex = function (req, res) {
    try {
        fs.readFile("./views/index.html", function (err, data) {
            if(err)throw ("err");
            res.end(data);
        });
    } catch (err) {
        console.log(err);
    }
}

// 查
let listById = function (req, res) {
    let run = async () => {
        var result = await mongo.listById();
        var resObj = {
            statu: 200,
            msg: "成功",
            dataList: result,
        };
        res.send(resObj);
    };
    run();
}

// 删
let deleteById = function (req, res) {
    var url = req.url;
    var id = uurl.parse(url, true).query.userid;

    let run = async () => {
        mongo.deleteById(id)
        var obj = {
            statu: 200,
            msg: "删除成功"
        };
        res.send(obj);
    };
    run();
}

// 增
let insertByName = function (req, res) {
    var url = req.url;
    var id = uurl.parse(url, true).query.userid;
    
    let run = async () => {
        mongo.insertByName(req.body.username, id);
        var obj = {
            statu: 200,
            msg: "添加成功"
        };
        res.send(obj);
    };
    run();
}

/**
 * @function 更新数据
 * @param {*} req 请求响应
 * @param {*} res 应答响应
 */
let update = function (req, res) {
    let run = async () => {
        mongo.update({
            username: req.body.username,
            userid: req.body.userid,
        });
        var obj = {
            statu: 200,
            msg: "修改成功"
        };
        res.send(obj);
    };
    run();
}


module.exports = {
    getIndex,getIndex,
    insertByName: insertByName,
    listById: listById,
    deleteById: deleteById,
    update:update,
}

// end