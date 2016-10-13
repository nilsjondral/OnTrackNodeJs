var express = require('express');
var http = require('http');

var app = express();
var server = http.Server(app);
var port = 5000;

app.use(express.static(path.join(__dirname, 'public')));

server.listen(port, function(){
    console.log('Server running on port: ' + port);
});