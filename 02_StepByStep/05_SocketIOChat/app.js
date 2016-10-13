var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// 1
// io.on('connection', function(socket) {
//     console.log('user connected');
//     socket.on('disconnect', function() {
//         console.log('user disconnected');
//     });
//     socket.on('chat message', function(msg){
//         console.log('message: ' + msg);
//         io.emit('chat message', msg);
//         // socket.broadcast.emit('hi');
//     });
// });

http.listen(5000, function(){
    console.log('listening on port 5000');
});