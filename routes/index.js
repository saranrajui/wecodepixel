var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
  res.send('Thank you for Connecting! Our team will contact you within 24hrs.');
});

router.put('/', function(req, res) {
  res.send('Got a PUT Request');
});

router.delete('/', function(req, res) {
  res.send('Got a DELETE Request');
});

module.exports = router;
