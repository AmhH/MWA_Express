var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', (req, res)=>{
    res.render('newsLetter', { title: "News Letter", token: req.csrfToken() });
});


router.post('/', (req, res, next) => {
    req.assert('email','A valid email is required').notEmpty().isEmail();
    var error = req.validationErrors();
    if(error){
       return res.render('error', { error:error, message:'Invalid Email Address' });
    }
    fs.appendFile('subscribers.txt', "  "+req.body.email , function (err) {
        if (err) {
         return  next(err);
        } else {
            res.render('thanks', { email: req.body.email, title: 'Subscription Complete' });
        }
      });
  });
module.exports = router;