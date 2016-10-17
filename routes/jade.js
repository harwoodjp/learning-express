var express = require('express');
var router = express.Router();

var title = 'node+express+jade';
var tech_stack = ['node', 'express', 'jade'];
var f_name=''; var l_name=''; var color='';
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('jade', { 
		title: title,
		tech_stack: tech_stack,
		f_name: f_name,
		l_name: l_name,
		color: color
	});
});
router.get('/form', function(req, res, next) {

	if (req.param("f_name") != null) {f_name = req.param("f_name")} else {f_name = '';}
	if (req.param("l_name") != null) {l_name = req.param("l_name")} else {l_name = '';}
	if (req.param("color") != null) {color = req.param("color")} else {color = '';}

	res.render('jade', { 
		title: title,
		tech_stack: tech_stack,		
		f_name: f_name,
		l_name: l_name,
		color: color,
	});
});
module.exports = router;
