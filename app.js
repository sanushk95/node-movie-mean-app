var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var detailsRouter = require('./routes/details');
var categoryRouter = require('./routes/category');
var sortRouter = require('./routes/sort');

var app = express();

mongoose.connect('mongodb+srv://sanu:saniya1995@cluster0-5jk7j.mongodb.net/sample_mflix?retryWrites=true&w=majority',{useNewUrlParser: true},function(err) {

	if(err) {
		console.log('error connecting', err);
	}else{
		console.log('connected!');
	}

});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/details', detailsRouter);
app.use('/category', categoryRouter);
app.use('/sort', sortRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
