var express = require('express');
var path = require('path');
var http = require('http');
var socketIo = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIo(server);
var port = 5000;

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket) {
    console.log('New connection made');
    
})

server.listen(port, function(){
    console.log('Server running on port: ' + port);
});