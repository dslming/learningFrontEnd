var User = require("./db_user.js");

/**
 * @function 增加数据
 * @param {*} name 名字
 * @param {*} id id,由客户端给出,在拿到所有数据后计算出最后一个id后自加
 */
function insertByName(name, id) {
    var user = new User({
        username: name,
        userid: id,
    });

    return new Promise(function (resolve, reject) {
        user.save(function (err, res) {
            if (err) {
                reject("Error:" + err);
            }
        });
    })
}

// 删
function deleteById(id) {
    return new Promise(function (resolve, reject) {
        var wherestr = { 'userid': id };
        User.remove(wherestr, function (err, res) {
            if (err) {
                reject("Error:" + err);
            }
        })
    })
}

// 改
function update(newObj){
    var wherestr = {'userid' : newObj.userid};
    var updatestr = {'username': newObj.username};

    return new Promise((resolve,reject)=>{
        User.update(wherestr, updatestr, function(err, res){
            if (err) {
                reject("Error:" + err);
            }
            else {
                resolve("updata ok");
            }
        })
    });
}


// 查
function listById(id) {
    return new Promise(function (resolve, reject) {
        User.find(function (err, res) {
            if (err) {
                reject("Error:" + err);
            }
            else {
                resolve(res);
            }
        })
    })
};

module.exports = {
    insertByName: insertByName,
    listById: listById,
    deleteById: deleteById,
    update:update,
}

//end