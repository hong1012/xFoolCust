var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: '上传图片' });
    res.render('index', { title: 'xFoolCust'
        ,users:[{username: 'Wilson'},
            {username: 'Wilson Zhong'},
            {username: 'Zhong Wei'}]
    });

});

module.exports = router;

