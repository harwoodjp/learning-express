var express = require('express');
var router = express.Router();

var title = 'node+express+jade';
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('jade', { 
		title: title 
	});
});
module.exports = router;
