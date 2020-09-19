var db = require('../models/link.model.js');
module.exports.api = async function(req,res){
    var id = req.params.id;
    var data = await db.findOne({id:id});
    res.redirect(data.link);
}