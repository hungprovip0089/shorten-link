var db = require('../db');
var shortid = require('shortid');
module.exports.create = function(req,res){
    res.render('create');
}
module.exports.createPost = function(req,res){
    var id = shortid.generate();
    var link = req.body.link;
    var shortenlink = 'http://localhost:3000/api/'+id;
    var data = {
        id : id,
        link : link,
        shortenlink : shortenlink
    }
    db.get('link').push(data).write();
    res.render('create',{
        data : data
    });
}
