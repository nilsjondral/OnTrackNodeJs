var express = require('express');
var http = require('http');

var app = express();
var server = http.Server(app);
var port = 5000;

// // 1
// var socketIo = require('socket.io');
// var path = require('path');
// var io = socketIo(server);

app.use(express.static(path.join(__dirname, 'public')));

// 2
// io.on('connection', function(socket) {
//     console.log('New connection made');
//
//     socket.emit('message-from-server', {
//         greeting: 'hello from the server'
//     });
//
//     socket.on('message-from-client', function (message) {
//         console.log(message);
//     })
// });

server.listen(port, function(){
    console.log('Server running on port: ' + port);
});