var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/get', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");

    /*    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
     res.header("Access-Control-Allow-Headers", "X-Requested-With");
     res.header('Access-Control-Allow-Headers', 'Content-Type');*/

    res.send({code: 200, data: {
        name: '宏哥的nodejs get',
        query: req.query.id + '***' + req.query.name
    }});

});

router.post('/post', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "http://172.20.131.202");
    //res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    //res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //res.header("Access-Control-Allow-Credentials", "true");
    //res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.send({code: 200, data: {
        name: '宏哥的nodejs888888post',
        query: req.query.id + '***' + req.query.name
    }});
    res.end();


});

module.exports = router;
