var express = require('express');
var kittensRouter = require('./kittens');

var app = express();

// // 1 http://localhost:5000/ 
// // Middleware
// //  application - Level middleware
// app.use(function (req, res, next) {
//   console.log('Time:', Date.now());
//   next();
// });

// // 4: postman https://localhost:5000/ {"name": "nils", "age": 29}
// // Built-in middleware --> static
// // Third-party middleware
// // npm install body-parser --save
// // var bodyParser = require('body-parser'); // Move to top
// // app.use(bodyParser.json());
// app.post('/post', function(req, res) {
//   if (req.body)   {
//     console.log('name: ' + req.body.name);
//     console.log('age: ' + req.body.age);
//   }
//   res.send('processed');
// })

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

// // 2 http://localhost:5000/fail
// // Error handling middleware
// app.get('/fail', function (req, res) {
//   app.DoSomethingSilly(); // throws error
// });
// app.use(function(err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send('Something broke :(');
//   //next();
// });

app.listen(process.env.PORT, function() {
    console.log('Express server running on port ' + process.env.PORT);
});