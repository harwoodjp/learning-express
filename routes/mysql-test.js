var express = require('express');
var router = express.Router();
var db_funcs = require('../db.js');

var mysql = require('mysql');


var connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS
});
connection.connect(function(err) {
	// connected! (unless `err` is set)
});

var result;

var query = connection.query("select * from 332project.blog order by id desc", function(err, rows, fields) {
	connection.end();
	if (!err) {
		result = rows;
	}
});

var title = 'node+express+jade';
/* GET home page. */
router.get('/', function(req, res, next) {

	res.render('mysql_test', { 
		title: title,
		result: result
	});
});
module.exports = router;
