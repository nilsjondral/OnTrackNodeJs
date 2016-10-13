var express = require('express');

var app = express();

// // 1
// // http://localhost:5000/kitten.jpg
// app.use(express.static('public'));
// // http://localhost:5000/main.css
// app.use(express.static('styles'));

// // 2
// // http://localhost:5000/static/kitten.jpg
// app.use('/static', express.static(__dirname + '/public'));
// // http://localhost:5000/css/main.css
// app.use('/css', express.static(__dirname + '/styles'));

app.get('/', function(req, res) {
    console.log('GET on ' + req.url);
    res.send('Hello from express');
});

app.listen(process.env.PORT, function() {
    console.log('Express server running on port ' + process.env.PORT);
});