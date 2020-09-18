var db = require('../db');
module.exports.history = function(req,res){
    var links = db.get('link').value();
    res.render('history',{
        links : links
    });
}
module.exports.search = function(req,res){
    var link = req.query.link;
    var needlink = [
        db.get('link').find({ link : link}).value()
    ];
    res.render('history',{
        links : needlink,
        value : link
    });
}