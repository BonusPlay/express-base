var path            = require('path');
var logger          = require('morgan');

var express         = require('express');
var session 		= require('express-session');
var subdomain       = require('express-subdomain');
var favicon         = require('serve-favicon');
var cookieParser    = require('cookie-parser');
var flash 			= require('connect-flash');
var bodyParser      = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// TODO: uncomment after adding icon
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('secret'));
app.use(session({
	secret: 'secret',
	cookie: {
		maxAge: 60000
	}
}));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

app.use(subdomain('api', require('./routes/api')));
app.use('/', require('./routes'));

app.use(function(req, res, next) {
	res.render('404');
});

app.use(function(err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;