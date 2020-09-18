var db = require('../db');
module.exports.linkexist = function(req,res,next){
    var link = req.body.link;
    if(!link){
        var error = "Link is required";
        res.render('create',{
            error : error
        });
        return;
    }
    var existLink = db.get('link').find({ link : link}).value();
    if(existLink){
        var error = "Link has already been shortened. Please check history";
        res.render('create',{
            error : error
        });
        return;
    }
    next();
}