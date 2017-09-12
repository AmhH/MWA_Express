var express = require('express');
var router = express.Router();
var mongo = require('mongoskin');
const crypto = require("crypto");

var db = mongo.db('mongodb://localhost:27017/homework', {native_parser: true});
/*db.collection('homework7');*/

router.get('/', function(req, res, next){
    db.collection('homework7').findOne({}, (err, msg) => {
        if(err) throw err;
        const decipher = crypto.createDecipher('aes256', 'asaadsaad');
        let decrypted = decipher.update(msg.message,'hex','utf8');
        decrypted += decipher.final('utf8');
        db.close();
        res.render('secret',{message: decrypted});
    });
});

module.exports = router;