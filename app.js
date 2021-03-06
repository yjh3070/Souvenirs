var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname+'/public')));
app.use(express.static(path.join(__dirname+'/public/css')));
app.use(express.static(path.join(__dirname+'/public/img')));

app.set('view engine', 'ejs');

var loginRouter = require('./routers/login');
var postRouter = require('./routers/post');

app.use('/', loginRouter);
app.use('/login', loginRouter);
app.use('/PostUp', postRouter);

app.get('/SignUp',function(req, res){
    res.render('SignUp');
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