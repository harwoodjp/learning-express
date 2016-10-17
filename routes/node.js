var express = require('express');
var router = express.Router();

var title = 'node+express+jade';
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('node', { 
		title: title ,
		node_details : 'a server side javascript environment'
	});
});
module.exports = router;
