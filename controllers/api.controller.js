//var db = require('../models/link.model.js');
var db = require('../db');
module.exports.api = function(req,res){
    var id = req.params.id;
    var data = db.get('link').find({id:id}).value();
    res.redirect(data.link);
}