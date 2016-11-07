var express = require('express');
var router = express.Router();


var http = require('http');


var querystring = require('querystring');



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


router.get('/get2', function (req, res, next) {

    var contents = querystring.stringify({
        eid: '4016572',
        startdate: '2016-11-01',
        enddate: '2016-11-08',
        operateid: 1
    });

    var options = {
        host: 'mob.cmcloud.cn',
        path: '/serverCloud/DataReport/GetVisitDataTotal',
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length' : contents.length
        }
    };

    var req2 = http.request(options, function(res2) {
        res2.setEncoding('utf8');
        res2.on('data', function (data) {
            console.log(data);
            res.send(data);
            res.end();
        });
    });
    req2.write(contents);
    req2.end();

});

router.get('/post2', function (req, res, next) {

    var contents = querystring.stringify({
        eid: '3975354',
        appid: '791392829494',
        secret: 'f6026839',
        startDate: '2016-06-01',
        endDate: '2016-11-08',
        type: 0
    });

    var options = {
        host: 'ebx.youshang.com',
        path: '/thirdapi/doc/list',
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length' : contents.length
        }
    };

    var req2 = http.request(options, function(res2) {
        res2.setEncoding('utf8');
        res2.on('data', function (data) {
            console.log(data);
            res.send(data);
            res.end();
        });
    });
    req2.write(contents);
    req2.end();

});

module.exports = router;
