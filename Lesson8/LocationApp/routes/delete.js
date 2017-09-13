var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('delete', { title: 'Express' });
});

router.post('/',(res, req, next)=>{

});

module.exports = router;