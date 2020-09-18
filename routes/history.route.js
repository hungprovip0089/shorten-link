var express = require('express');
var router = express.Router();
var controller = require('../controllers/history.controller');

router.get('/' , controller.history);  
router.get('/search', controller.search);

module.exports = router;
