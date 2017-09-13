var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('delete', { title: 'Express' });
});

router.post('/',(res, req, next)=>{
      const name = req.body.name;
        const category = req.body.category;
        req.dbs.collection('locCollection').remove([{name: name, category: category}], (err, removed)=>{
            if(err) {
              console.error(erer);
              res.render('error', { message:err });
            }
            console.dir(removed);
            res.render('success', { message:"Data successfully removed!!"});
            db.close();
        });
});

module.exports = router;