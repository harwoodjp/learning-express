var express = require('express');
var router = express.Router();
var db_calls = require('../db.js');

var connection = db_calls.connect();
connection.connect(function(err) { /*error?*/ });

var result;

var query = connection.query("select * from 332project.blog order by id desc", function(err, rows, fields) {
	connection.end();
	if (!err) {
		result = rows;
	}
});

router.get('/', function(req, res, next) {
	res.render('mysql_test', { 
		result: result
	});
});
module.exports = router;

