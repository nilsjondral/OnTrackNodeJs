var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var users = [];

// parse application/json 
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.send('Hello from express');
});

app.get('/users', function(req, res) {
    res.send(JSON.stringify(users));
});

app.get('/user/:userId', function(req, res) {
    var result;
    users.forEach(function(element) {
      if (element.userId === req.params.userId) {
          result = element;
      }  
    }, this);
    res.send(JSON.stringify(result));
});

app.post('/user', function(req, res) {
    if (!req.body) return res.sendStatus(400)
    var user = req.body;
    users.push({
        id: users.length,
        name: user.name,
        age: user.age
    });
    res.send(JSON.stringify(users[users.length - 1]));
});

app.listen(5000, function() {
    console.log('Express server running on port ' + 5000);
});