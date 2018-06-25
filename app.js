var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

var yunnan = require('./routes/yn_index');
var guangxi = require('./routes/gx_index');
var routes = require('./routes/index');
var users = require('./routes/users');
var buildings = require('./routes/buildings');
var gy_buildings = require('./routes/gongying');
var gy_customer = require('./routes/gy_customer');
var news = require('./routes/news');
var demand = require('./routes/demand');
var jinrong = require('./routes/jinrong');
var bieshu = require('./routes/bieshu');
var map = require('./routes/map');
var app = express();
app.use(session({
	  secret: '12345',
	 //name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
	cookie: {maxAge: 8000000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
   // cookie: { },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
	resave: false,
	saveUninitialized: true
	}));
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

app.use('/gx_index', guangxi);
app.use('/yn_index', yunnan);
app.use('/users', users);
app.use('/buildings', buildings);
app.use('/gy_customer', gy_customer);
app.use('/gy_buildings', gy_buildings);
app.use('/news', news);
app.use('/demand', demand);
app.use('/jinrong', jinrong);
app.use('/map', map);
app.use('/bieshu', bieshu);
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
