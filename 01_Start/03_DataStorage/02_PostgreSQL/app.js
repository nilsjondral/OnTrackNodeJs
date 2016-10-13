var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// parse application/json 
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.send('Hello from express');
});

app.get('/users', function(req, res, next) {
    
});

app.post('/user', function(req, res, next) {
    
});

app.listen(5000, function() {
    console.log('Express server running on port ' + 5000);
});