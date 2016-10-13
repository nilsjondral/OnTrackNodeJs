var express = require('express');

var app = express();

// app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));
// app.use(express.static('styles'));
app.use('/css', express.static(__dirname + '/styles'));

app.get('/', function(req, res) {
    console.log('GET on ' + req.url);
    res.send('Hello from express');
});

app.listen(process.env.PORT, function() {
    console.log('Express server running on port ' + process.env.PORT);
});