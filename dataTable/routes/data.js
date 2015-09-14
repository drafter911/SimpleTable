var express = require('express');
var router = express.Router();

var data = require('../data/data.json');

router.get('/data', function (req, res, next) {
    res.send(JSON.stringify(data));
});

router.post('/data', function (req, res, next) {
    var dataElem = req.body;
    data.push(dataElem);
    dataElem._id = data.length;
    res.send(dataElem);
});

module.exports = router;
