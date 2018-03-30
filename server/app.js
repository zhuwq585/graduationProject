var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});


var app = express();

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//global path
global.prefixPath = path.resolve(__dirname);

//view engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.use(session({
  secret: 'my app secret',
  saveUninitialized: true,
  resave: false,
  cookie: {
    maxAge: 10 * 1000
  }
}));

require('./routes.js')(app);



/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

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


// app.listen(app.get('port'), function(){
// 	console.log( 'express started on localhost:' + app.get('port') + 'press ctrl-c to terminate' );
// });
app.listen(8080, function(){
	console.log( 'express started on localhost:8080 press ctrl-c to terminate' );
});

// var a = require('./model/login.js');
// var b = new a();
// b.login(1,'user1','1223456',function(reslut){console.log(reslut)});
