var express = require('express');
var router = express.Router();

var title = 'node+express+jade';
var tech_stack = ['node', 'express', 'jade'];
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { 
		title: title ,
		node_details : 'a server side javascript environment',
		express_details : 'a mvc framework for node',
		jade_details : 'a node template engine'	,
		tech_stack : tech_stack
	});
});
module.exports = router;
