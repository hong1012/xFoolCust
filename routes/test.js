var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send({code: 200, data: {name: '宏哥的nodejs'}});

});

module.exports = router;
