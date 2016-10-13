var express = require('express');

var app = express();

// // 2
// // parse application/json 
// var bodyParser = require('body-parser'); // Move to top
// app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Hello from express');
});

// // 1
// var users = [];
// app.get('/users', function(req, res) { // GET http://localhost:5000/users
//     res.send(JSON.stringify(users));
// });

// app.get('/user/:userId', function(req, res) { // GET http://localhost:5000/user/1
//     var result;
//     users.forEach(function(element) {
//       if (element.userId === req.params.userId) {
//           result = element;
//       }  
//     }, this);
//     res.send(JSON.stringify(result));
// });

// app.post('/user', function(req, res) { // POST http://localhost:5000/user {"name": "Koen", "age": "42"}
//     if (!req.body) return res.sendStatus(400)
//     var user = req.body;
//     users.push({
//         id: users.length,
//         name: user.name,
//         age: user.age
//     });
//     res.send(JSON.stringify(users[users.length - 1]));
// });

app.listen(5000, function() {
    console.log('Express server running on port ' + 5000);
});