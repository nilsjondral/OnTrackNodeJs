var express = require('express');

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

app.get('/', function(req, res) {
    console.log('GET on ' + req.url);
    res.send('Hello from express');
});

// other http verbs
app.post('/', function (req, res) {
    res.send('received a POST request')
});
app.put('/user', function(req, res) {
    res.send('received a PUT request at /user');
});
app.delete('/user', function(req, res) {
    res.send('received a DELETE request at /user');
});

// app.route()
app.route('/book')
    .get(function(req, res) {
        res.send('GET a book');
    })
    .post(function (req, res) {
        res.send('POST a book');
    })
    .put(function(req, res) {
        res.send('PUT a book');
    });

// Simple RegEx ? + * ( )
app.get('/ab?cd', function(req, res) { // route path will match acd and abcd.
  res.send('ab?cd');
});
app.get('/ab+cd', function(req, res) { // route path will match abcd, abbcd, abbbcd, and so on.
  res.send('ab+cd');
});
app.get('/ab*cd', function(req, res) { // route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
  res.send('ab*cd');
});

// route Parameters
app.get('/users/:userId/books/:bookId', function(req, res) { // /users/34/books/8989
  res.send(req.params); // { "userId": "34", "bookId": "8989" }
});
// hyphen (-) and the dot (.) are interpreted literally
app.get('/flights/:from-:to', function(req, res) { // /flights/LAX-SFO
  res.send(req.params); // { "from": "LAX", "to": "SFO" }
});

// route handlers
var handler1 = function(req, res, next) {
    console.log('hello form handler 1');
    next();
}
var handler2 = function(req, res, next) {
    console.log('handler 2 does some work...');
    next();
}
var handler3 = function(req, res) {
    res.send('content from handler3');
}
app.get('/handlers',  [handler1, handler2, handler3]);

// response methods
app.get('/results' , function(req, res) {
    // Send a response of various types.
    res.send('Hello world');

    // Send a JSON response.
    //res.json({ user: 'nils' }); 

    // Render a view template.
    //res.render('index'); // will throw error: needs a default view enige

     // Prompt a file to be downloaded.
     //res.download(__dirname + '/public/kitten.jpg', function(err) { console.log(err); });

     //Send a file as an octet stream.
     //res.sendFile(__dirname + '/public/kitten.jpg', function(err) { console.log(err); });
    
    // End the response process.
    //res.status(404).end(); 

    // Redirect a request.
    //res.redirect('/foo/bar'); 
    //res.redirect(302, '../bar'); 
});

// router
var kittensRouter = require('./kittens'); // move to top
app.use('/kittens', kittensRouter);

app.listen(process.env.PORT, function() {
    console.log('Express server running on port ' + process.env.PORT);
});