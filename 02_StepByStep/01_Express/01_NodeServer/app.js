var fs = require('fs');
var http = require('http');

var port = 5000;

http.createServer(function(req, res) {
    console.log('handling request: ' + req.url);
    if(req.url === '/ontrack') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/1_ontrack.html').pipe(res);
    } else {
    res.writeHead(200, {'Content-type': 'text/plain'});
        res.end('Hello World');
    }
}).listen(port);

console.log('Server running on port : ' + port);