const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + "/index.html").pipe(res);

}).listen(1337, '127.0.0.1');

console.log('running on port 1337');