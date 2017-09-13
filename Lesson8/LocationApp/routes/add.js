var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('add', { title: 'Express' });
});

router.post('/',(req, res, next)=>{
        const name = req.body.name;
        const category = req.body.catagory;
        const long = parseFloat(req.body.longitude);
        const lat = parseFloat(req.body.latitude);
        console.log(req.dbs);
        req.dbs.collection('locCollection').insert([{location:{type:"Point", coordinates:[long, lat]},name: name, category: category}], (err, doc)=>{
            if(err) {
              console.error(err);
              res.render('error', { message:err });
            }
            console.dir(doc);
            res.render('add', { message:"Data successfully added!!"});
           // db.close();
        });
});

module.exports = router;