var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');

db = low(adapter);
// set default( neccessary if your db.json is empty)
db.defaults({ link : [] }).write();

module.exports = db;