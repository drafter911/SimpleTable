var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  //res.render('index', { title: 'Express' });
//  res.render('index', { title: 'DataTable by drafter911@gmail.com' });
//});

router.get('/states', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log(res);
  //res.json('/states_titlecase.json');
  //res.sendFile('/states_titlecase.json');
  res.render('index', { title: 'DataTable by drafter911@gmail.com' });
});

module.exports = router;
