var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
const Rx = require('@reactivex/rxjs');


//using Promise
/*router.get('/', function(req, res, next){
    fetch('http://jsonplaceholder.typicode.com/users/')
         .then(data => data.json())
         .then(data => res.render('users', {title:'Users data',
                                             users: data}));
});*/
//Observable
/*router.get('/', function(req,res, next){
    Rx.Observable.fromPromise(fetch('http://jsonplaceholder.typicode.com/users/'))
                 .map(users => users.json())
                 .subscribe(users => {
                   console.log(users);
                   res.render('users', {title:'Users data', users: users})
                  });
});*/
//Asnyc and wait
async function asnycAwait(){
            try {
                let results = await fetch('http://jsonplaceholder.typicode.com/users/');                             
            } catch (error) {
              console.log(error);
            }
        }
        
router.get('/', function(req,res, next){
    res.render('users', {title:'Users data', users: asnycAwait()});
});


module.exports = router;
