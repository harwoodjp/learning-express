var mysql = require('mysql');

exports.hello = function() {
	return "hello";
}

exports.connect = function() {
	var connection = mysql.createConnection({
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS
	});
	return connection;
}