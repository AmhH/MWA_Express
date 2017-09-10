var express = require('express');
app = express();
cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
    res.render('hello', {name: 'World'});
});

app.listen(8000, () => console.log('Express server starteed on port 8000'));