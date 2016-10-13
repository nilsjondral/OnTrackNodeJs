var express = require('express');

var app = express();

app.get('/', function(req, res) {
    console.log('GET on ' + req.url);
    res.send('Hello from express');
});

// // 1
// // View Engines
// // PUG ( formerly Jade ): npm install pug --save 
// app.set('view engine', 'pug');
// app.get('/pug', function(req, res) {
//   res.render('index', {title: 'View engine: PUG', message: 'This view is rendered by the PUG view engine!'});
// });

// // 2
// Hbs ( handlebars.js ): npm install hbs --save
// app.set('view engine', 'hbs');
// app.get('/hbs', function(req, res) {
//   res.render('index', {title: 'View engine: Hbs', message: 'this view is rendered by the HBS view engine!'});
// });

// // 3
// EJS: npm install ejs --save
// app.set('view engine', 'ejs');
// app.get('/ejs', function(req, res) {
//   res.render('index', {title: 'View engine: EJS', message: 'this view is rendered by the EJS view engine!'});
// });
// Note: https://github.com/expressjs/express/wiki?_ga=1.205954067.1414071814.1475496893#template-engines

app.listen(process.env.PORT, function() {
    console.log('Express server running on port ' + process.env.PORT);
});