var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var node = require('./routes/node');
var express_r = require('./routes/express');
var jade_r = require('./routes/jade');
var mysql_test = require('./routes/mysql_test');

var mysql = require('mysql');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/node', node);
app.use('/express', express_r);
app.use('/jade', jade_r);
app.use('/mysql_test', mysql_test);

app.post('/mysql_test/add_blog_post', function(req, res) {
  var author = req.body.author;
  var date = req.body.date;
  var title = req.body.title;
  var body = req.body.body;
  var blog_insert_query = "insert into 332project.blog(author,date,title,body) values(";
  blog_insert_query += ("'"+author+"'"+","); blog_insert_query += ("'"+date+"'"+","); blog_insert_query += ("'"+title+"'"+","); blog_insert_query += ("'"+body+"'"+")");
  console.log(blog_insert_query);

  var connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
      
  });
connection.connect(function(err) { /*error?*/ });
var result;
var query = connection.query(blog_insert_query, function(err, result) {
  res.redirect('/mysql_test');
});
console.log(query.sql);


});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
