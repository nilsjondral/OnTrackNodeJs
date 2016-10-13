var express = require('express');
var kittensRouter = require('./kittens');

var app = express();

// static files
app.use('/static', express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/styles'));

// .all
app.all('/*', function (req, res, next) { // middleware
  console.log('processing request...');
  next(); // pass control to the next handler
});

// router
app.use('/kittens', kittensRouter);

app.get('/', function(req, res) {
    console.log('GET on ' + req.url);
    res.send('Hello from express');
});

app.listen(process.env.PORT, function() {
    console.log('Express server running on port ' + process.env.PORT);
});