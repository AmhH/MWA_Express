var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('search', { title: 'Location App' });
});

router.post('/', function(req, res, next) {
    
    res.render('searchResult', { title: 'Location App' });
});

module.exports = router;
