var mongoose = require('mongoose');

var linkSchema = new mongoose.Schema({
    id : String,
    link : String,
    shortenlink : String
});

var Link = mongoose.model('Link', linkSchema, 'data');

module.exports = Link;