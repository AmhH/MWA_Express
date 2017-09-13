var express = require('express');
var router = express.Router();
var mongo = require('mongoskin');
var db = mongo.db('mongodb://localhost:27017/LocationDB', { native_parser: true });

router.get('/', function(req, res, next) {
  res.render('add', { title: 'Express' });
});

router.post('/',(req, res, next)=>{
        const name = req.body.name;
        const category = req.body.catagory;
        const long = req.body.longitude;
        const lat = req.body.latitude;
        db.collection('locCollection').insert([{name: name, category: category, location:{type:"Point", coordinates:[long, lat]}}], (err, doc)=>{
            if(err) {
              console.error(erer);
              res.render('error', { message:err });
            }
            console.dir(doc);
            res.render('success', { message:"Data successfully added!!"});
            db.close();
        });
});

module.exports = router;