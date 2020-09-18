var express = require('express');
var app = express();
var historyRoute = require('./routes/history.route');
var createRoute = require('./routes/create.route');
var linkMiddleware = require('./middleware/link.middleware');

app.set('view engine','pug');
app.set('views','./views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',function(req,res){
    res.render('shortenlink');
});

app.use('/history', historyRoute);
app.use('/create',linkMiddleware.linkexist, createRoute);


app.listen(3000,function(){
    console.log('Welcome to port '+ 3000);
});