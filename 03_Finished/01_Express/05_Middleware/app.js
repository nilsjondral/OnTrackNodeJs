var express = require('express');
var kittensRouter = require('./kittens'); // move to top

var app = express();

// static files
// app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));
// app.use(express.static('styles'));
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

// Middleware
//  application - Level middleware
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});
// Router - level middleware --> kittens.js
// Error handling middleware
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke :()');
});
// Built-in middleware --> static
// Third-party middleware TODO: find good example
//  npm install cookie-parser --save
var cookieParser = require('cookie-parser'); // Move to top
app.use(cookieParser());

app.listen(process.env.PORT, function() {
    console.log('Express server running on port ' + process.env.PORT);
});