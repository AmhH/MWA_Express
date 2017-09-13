var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('search', { title: 'Location App' });
});

router.post('/', function(req, res, next) {
    const lat = parseFloat(req.body.latitude);
    const long = parseFloat(req.body.longitude);
    
    var query ={$and:[{category:req.body.category},{"location.category":{$near:[long,lat]}}]}; 

    req.dbs.collection('locCollection').find(query).toArray(function(err, result) {
        if (err) throw err;
        //console.dir(result);
        res.render('searchResult',{title:"Location App",places:result});
    });
});

module.exports = router;
