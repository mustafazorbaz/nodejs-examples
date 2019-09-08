var express=require('express');
var path=require('path');
var fs=require('fs');
var app=express();
app.use('/public',express.static(path.join(__dirname,'/public')));

app.get('/',function (req,res) {
    fs.readFile('index.html',function (err, data) {
        res.write(data);
        res.end('Message :END');
        console.log('Home');
    })
});

app.get('/login',function (req,res) {
    fs.readFile('login.html',function (err,data) {
        res.write(data);
        res.end('Message END.');
        console.log('Login');
    });
});
app.listen(9595);
