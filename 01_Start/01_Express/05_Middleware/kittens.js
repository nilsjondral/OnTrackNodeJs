var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('I like kittens');
});

router.get('/kitten', function(req, res){
    res.sendFile(__dirname + '/public/kitten.jpg', function(err) { console.log(err); });
});

module.exports = router;