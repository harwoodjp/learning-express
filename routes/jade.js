var express = require('express');
var router = express.Router();

var title = 'node+express+jade';
var tech_stack = ['node', 'express', 'jade'];
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('jade', { 
		title: title,
		tech_stack: tech_stack
	});
});
module.exports = router;
