var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('update', { title: 'Express' });
});

router.post('/',(res, req, next)=>{
        const oldname = req.body.oldname;
        const oldcategory = req.body.oldcatagory;
        const name = req.body.name;
        const category = req.body.catagory;
        const long = req.body.longitude;
        const lat = req.body.latitude;
        req.dbs.collection('locCollection').update({name: oldname, category: oldcategory},{$set:{name:name, category:category}}, (err, doc)=>{
            if(err) {
              console.error(erer);
              res.render('error', { message:err });
            }
            console.dir(doc);
            res.render('success', { message:"Data successfully updated!!"});
            db.close();
        });
});

module.exports = router;