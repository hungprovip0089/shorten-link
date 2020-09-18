var db = require('../db');
module.exports.history = function(req,res){
    var links = db.get('link').value();
    res.render('history',{
        links : links
    });
}
module.exports.search = function(req,res){
    var link = req.query.link;
    var Matchedlink = db.get('link').value().filter(function(data){
        return data.link===link;
    })
    res.render('history',{
        links : Matchedlink,
        value : link
    });
}