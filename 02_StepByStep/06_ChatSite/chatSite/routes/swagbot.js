// 2-Chatbot
// var express = require('express');
// var fs = require('fs');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   fs.readFile(__dirname + '/../files/swagbot.txt', 'utf8', function (err, data) {
//       if (err) {
//           res.json({response: "swagbot is sad :("});
//       }
//       var responses = data.split('\r\n');
//       var i = Math.floor(Math.random() * (responses.length));
//       res.json({response : responses[i]});
//   })
// });

// module.exports = router;