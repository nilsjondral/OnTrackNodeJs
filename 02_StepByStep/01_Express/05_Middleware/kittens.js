var express = require('express');
var router = express.Router();

// // 3 http://localhost:5000/kittens/
// // router level Middleware
// router.use(function(req, res, next) {
//     console.log('kittens, kittens everywhere!');
//     next();
// });

router.get('/', function(req, res) {
    res.send('I like kittens');
});

router.get('/kitten', function(req, res){
    res.sendFile(__dirname + '/public/kitten.jpg', function(err) { console.log(err); });
});

module.exports = router;