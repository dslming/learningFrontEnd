var express = require("express");
var router = express.Router();
var handles = require("./handle.js");

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router
     .get('/', handles.getIndex)
     .get('/listById.php', handles.listById)
     .get('/deleteById.php', handles.deleteById)
     .post('/insertByName.php', urlencodedParser, handles.insertByName)
     .post('/updata.php', urlencodedParser, handles.update);

     
module.exports = router;

