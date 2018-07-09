var fs = require("fs");
var template = require("art-template");
var uurl = require("url");//解析url
var formidable = require("formidable");

var getIndex = function (req, res) {
    fs.readFile("./views/index.html", (err, indexFile) => {
        if (err) return console.log(err);
        // res.end(indexFile.toString());
        //console.log(dataFile.toString());//拿到html
        fs.readFile("./data.json", (err, dataFile) => {
            if (err) return console.log(err);

            //console.log(dataFile.toString());//拿到数据

            //解析为对象
            var herosObj = JSON.parse(dataFile.toString());

            //进行渲染
            var html = template.render(indexFile.toString(), herosObj);
            res.end(html);
        });
    });
}

var getStatic = function (req, res) {
    var url = req.url;
    fs.readFile("." + url, (err, file) => {
        if (err) return console.log(err);

        res.end(file);
    });
}

var getAdd = function (req, res) {
    fs.readFile("./views/add.html", (err, file) => {
        if (err) return console.log(err);

        res.end(file.toString());
    });
}

var postAdd = function (req, res) {
    var form = formidable.IncomingForm();
    form.parse(req,(err, fields, files)=>{

        fs.readFile("./data.json", function (err, dataJson) {
            if (err) return console.log(err);

            // 所有的英雄数据
            var heros = JSON.parse(dataJson.toString());
            // console.log(heros);
            var lastId = heros.herosArr[heros.herosArr.length - 1].id;
            // 添加id字段
            fields.id = +lastId + 1;

            // 添加该数据到总数据库
            heros.herosArr.push(fields);

            // 数据转为json格式
            var herosStr = JSON.stringify(heros, null, "  ");
            // 写入数据库
            fs.writeFile("./data.json", herosStr, function (err) {
                if (err) return console.log(err);

                //响应数据到浏览器
                var obj = {
                    status:200,
                }
                res.end(JSON.stringify(obj));
            });
        });
    });
 
}

var getEdit = function (req, res) {
    var url = req.url;
    // 拿到id
    var id = uurl.parse(url, true).query.id;

    // 读数据
    fs.readFile("./data.json", function (err, heros) {
        if (err) {
            return res.end("err");
        }

        //将heros转为对象
        var herosObj = JSON.parse(heros.toString());
        //接收id对应的对象
        var dataObj = {};
        //找到id对应的数据
        herosObj.herosArr.forEach(function (item, index) {
            if (item.id == id) {
                //如果数据的id等于传递过来的id，说明这条数据就是要修改的数据
                dataObj = item;
            }
        });
        //将eidt.html中的内容读取出来
        fs.readFile("./views/edit.html", function (err, data) {
            if (err) {
                return res.end("err");
            }
            var strHtml = template.compile(data.toString())(dataObj);
            res.end(strHtml);
        });
    });
}

var postEdit = function (req, res) {

        var form = formidable.IncomingForm();
        form.parse(req,(err,fields,file)=>{
        //将字符串转为一个对象
        var dataObj = fields;

        //根据id得到数据对象
        //根据id找到data.json中对应的数据，并且删除
        //读取data.json中的数据
        fs.readFile("./data.json", function (err, heros) {
            if (err) {
                return res.end("err");
            }
            //将heros转为对象
            var herosObj = JSON.parse(heros.toString());

            //找到id对应的数据
            herosObj.herosArr.forEach(function (item, index) {
                if (item.id == dataObj.id) {
                    // 接收临时的图片
                    let tempIcon = herosObj.herosArr[index].icon;
                    console.log(tempIcon);
                    // 用户没有上传图片
                    if(dataObj.icon==''){
                        herosObj.herosArr[index] = dataObj;
                        herosObj.herosArr[index].icon = tempIcon;
                    }else{
                        herosObj.herosArr[index] = dataObj;
                    }
                  
                }
            });
            //将新的对象写入到data.json中
            fs.writeFile("./data.json", JSON.stringify(herosObj, null, "  "), function (err) {
                if (err) {
                    return res.end("err");
                }
                
                var obj = {
                    status:200
                }

                res.end(JSON.stringify(obj));

            });
        });
    });
}

var del = function (req, res) {
    var url = req.url;
    //由于url中带有id，我们要取得id可以先将url转为一个对象，取出其中query,得到query的id属性就可以
    var id = uurl.parse(url, true).query.id;
    console.log(id);
    //根据id找到data.json中对应的数据，并且删除
    //读取data.json中的数据
    fs.readFile("./data.json", function (err, heros) {
        if (err) {
            return res.end("err");
        }
        //将heros转为对象
        var herosObj = JSON.parse(heros.toString());
        //接收id对应的对象
        var dataObj = {};
        //找到id对应的数据
        herosObj.herosArr.forEach(function (item, index) {
            if (item.id == id) {
                //如果数据的id等于传递过来的id，说明这条数据就是要删除的数据
                dataObj = item;
                //将数据删除
                herosObj.herosArr.splice(index, 1);
            }
        });
        //将从data.json中读取出来的已经删除了id对应数据的对象重新写入到data.json中
        fs.writeFile("./data.json", JSON.stringify(herosObj, null, "  "), function (err) {
            if (err) {
                return res.end("err");
            }
            res.setHeader("content-type", "text/html;charset=utf-8");
            res.end("<script>alert('删除成功');window.location='/'</script>");
        });
    });
}

var upload = function (req, res) {
    // 创建对象
    var form = new formidable.IncomingForm();
    // 设置文件的上传对象
    form.uploadDir = "./imgs";
    // 设置keepExtensions属性让图片保存后缀名
    form.keepExtensions = true;
    // 设置字段编码
    form.encoding='utf-8';

    form.parse(req,(err, fields, file)=>{
        var obj = {
            status:200,
            src:"/"+file.img.path
        };
        res.end(JSON.stringify(obj));
    });
}


module.exports = {
    getIndex: getIndex,
    getStatic: getStatic,
    getAdd: getAdd,
    postAdd: postAdd,
    getEdit: getEdit,
    postEdit: postEdit,
    del: del,
    upload:upload
}