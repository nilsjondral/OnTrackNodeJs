var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

// // 2-chatroom
// var chatroom = require('./routes/chatroom');

// // 3-swagbot
// var swagbot = require('./routes/swagbot');

var app = express();

// // 1-SocketIO
// var server = require('http').Server(app);
// var io = require('socket.io')(server);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
// // 2-chatroom
// app.use('/chatroom', chatroom);

// // 3-swagbot
// app.use('/swagbot', swagbot);

// // 2-socketIO
// io.on('connection', function(socket) {
//     var username = '';
//     socket.emit('connection');
//     console.log('connection');
//     socket.on('disconnect', function() {
//         console.log('user disconnected');
//         socket.broadcast.emit('message', {user: 'system', message: username + ' has left'});
//     });
//
//     socket.on('joined', function(event) {
//       username = event.user;
//       socket.broadcast.emit('message', {user : 'system', message:  username + ' joined'});
//     });
//
//     socket.on('sendMessage', function(event){
//       io.emit('message', event);
//     })
// });

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

// 3-Socket.IO
module.exports = app;
// module.exports = { app: app, server: server };
