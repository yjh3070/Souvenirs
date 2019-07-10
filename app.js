var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname+'/public')));
app.use(express.static(path.join(__dirname+'/public/css')));
app.use(express.static(path.join(__dirname+'/public/img')));

app.set('view engine', 'ejs');

app.get('/',function(req, res){
    res.render('login', {massage: ''});
});

app.post('/login',function(req, res){
    res.render('login', {massage: '아이디 또는 비밀번호가 틀렸습니다'} );
});

app.get('/SignUp',function(req, res){
    res.render('SignUp');
});

app.get('/imgUp',function(req, res){
    res.render('imgUp');
});

app.get('/main',function(req, res){
    res.render('main');
});

app.post('/main',function(req, res){
    res.render('main');
});

app.get('/friend',function(req, res){
    res.render('Friend');
});

app.listen(5000, function(){
    console.log("5000번 포트에서 대기중")
});