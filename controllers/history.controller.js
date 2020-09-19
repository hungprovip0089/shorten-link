var db = require('../models/link.model.js');
module.exports.history = async function(req,res){
    var links = await db.find();
    res.render('history',{
        links : links
    })
}
module.exports.search = async function(req,res){
    var link = req.query.link;
    var Matchedlink = await db.find({link : link});
    res.render('history',{
        links : Matchedlink,
        value : link
    });
}