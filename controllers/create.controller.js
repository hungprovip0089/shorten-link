// var db = require('../db');
var db = require('../models/link.model.js');
var shortid = require('shortid');
module.exports.create = function(req,res){
    res.render('create');
}
module.exports.createPost = async function(req,res){
    var id = shortid.generate();
    var link = req.body.link;
    var shortenlink = 'https:localhost:3000/api/'+id;
    var data = {
        id : id,
        link : link,
        shortenlink : shortenlink
    }
    await db.create(data);
    res.render('create',{
        data : data
    });
}
