var express = require('express');

var app = express();

app.get('/', function(req, res) {
    console.log('GET on ' + req.url);
    res.send('Hello from express');
});

app.listen(process.env.PORT, function() {
    console.log('Express server running on port ' + process.env.PORT);
});