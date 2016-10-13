var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('Hello from express');
});

app.listen(5000, function() {
    console.log('Express server running on port ' + 5000);
});