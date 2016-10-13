var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

http.listen(5000, function(){
    console.log('listening on port 5000');
});