var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname+'/public')));

app.set('view engine', 'ejs');

app.get('/',function(req, res){
    res.render('home');
});

app.get('/imgUp',function(req, res){
    res.render('imgUp');
});

app.get('/main',function(req, res){
    res.render('main');
});

app.listen(5000, function(){
    console.log("5000번 포트에서 대기중")
});