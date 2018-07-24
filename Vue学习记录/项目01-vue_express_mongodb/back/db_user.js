var mongoose = require('./db_connect');
var Schema = mongoose.Schema;

// 定义一个Schema
var UserSchema = new Schema({
    userid: { type:  Number},    
    username: { type: String },                                      
});

// 导出model
module.exports = mongoose.model('User',UserSchema);