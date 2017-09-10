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
router.get('/', function(req,res, next){
    Rx.Observable.fromPromise(fetch('http://jsonplaceholder.typicode.com/users/'))
                 .subscribe(users =>  res.render('users', {title:'Users data', users: data}));
});
//Asnyc and wait
/*var getJson = new Promise((resolve, reject) => {
                    fetch('http://jsonplaceholder.typicode.com/users/')
                        .then(res => {
                        if (res.ok) {
                            return res.json();
                        }
                        else {
                            reject("Data not found");
                        }
                        })
                        .then(data => resolve(data));
                    });
async function asnycAwait(){
            try {
                let users = await getJson;
                return users;                          
            } catch (error) {
              console.log(error);
            }
        }
        
router.get('/', function(req,res, next){
    asnycAwait().then(data => res.render('users', {title:'Users data', users: data}))
});*/

module.exports = router;
