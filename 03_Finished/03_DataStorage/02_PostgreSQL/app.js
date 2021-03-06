var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');

var app = express();

var users = [];
var conString = 'postgres://postgres:Ordina@localhost:5432/node_users'

// parse application/json 
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.send('Hello from express');
});

app.get('/users', function(req, res, next) {
    pg.connect(conString, function(err, client, done) {
        if (err) { return next(err); }
        client.query('SELECT name, age FROM users', [], function (err, result) {
            done();
            if (err) { return next(err); } 
            res.json(result.rows);
        });
    });
});

app.post('/user', function(req, res, next) {
    if (!req.body) return res.sendStatus(400)
    pg.connect(conString, function (err, client, done) {
        if (err) { return next(err); }
        client.query('INSERT INTO users (name, age) VALUES ($1, $2);',  [req.body.name, req.body.age], function (err, result) {
            done();
            if (err) { return next(err); }
            res.send(200);
        });
    });
});

app.listen(5000, function() {
    console.log('Express server running on port ' + 5000);
});