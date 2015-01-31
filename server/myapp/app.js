var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/public',express.static(__dirname + '/public'));

app.get('/index',function(req,res){
    res.render('index.ejs');
});

app.get('/form',function(req,res){
    res.render('form.ejs');
});

app.post('/formData', function (req,res){
    console.log(req,body);
    res.send(req,body);
});

app.listen(3000);