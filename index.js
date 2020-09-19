require('dotenv').config()

var express = require('express');
var app = express();
const port = process.env.PORT || 3000;
var historyRoute = require('./routes/history.route');
var createRoute = require('./routes/create.route');
var apiRoute = require('./routes/api.route.js');
var linkMiddleware = require('./middleware/link.middleware');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

app.set('view engine','pug');
app.set('views','./views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/',function(req,res){
    res.render('shortenlink');
});

app.use('/history', historyRoute);
app.use('/create',linkMiddleware.linkexist, createRoute);
app.use('/api', apiRoute);


app.listen(port,function(){
    console.log('Welcome to port '+ port);
});