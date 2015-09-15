var express = require('express');
var router = express.Router();

var data = require('../data/data.json');

router.get('/data', function (req, res, next) {
    var parameters = req.query;
    if (parameters.hasOwnProperty('limit') === false) {
        parameters.limit = 10;
    }
    if (parameters.hasOwnProperty('offset') === false) {
        parameters.offset = 0;
    }
    if (parameters.hasOwnProperty('page') == false) {
        req.params.page = parameters.offset / 10;
    }
    var pagedData = [];
    for (var i = parameters.offset; i < (+parameters.limit + +parameters.offset); i++) {
        pagedData.push(data[i]);
    }
    var page = (+parameters.offset / 10) + 1;
    //res.send(JSON.stringify(data));
    //res.send(JSON.stringify(pagedData));
    res.send({table: pagedData, page: page, count: data.length});
});

router.post('/data', function (req, res, next) {
    var dataElem = req.body;
    data.push(dataElem);
    dataElem._id = data.length;
    res.send(dataElem);
});

module.exports = router;
