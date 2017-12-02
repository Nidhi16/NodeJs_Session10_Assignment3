var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/contact', function(req, res, next) {
  console.log(req.body);
  details = JSON.stringify(req.body);
  res.send(details);
});

module.exports = router;
