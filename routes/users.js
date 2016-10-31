var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('啊啊啊啊  你在干什么啊 ？？？？');
 res.render('test', { title: '上传图片2' });
});

module.exports = router;
