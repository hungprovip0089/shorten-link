var express = require('express');
var router = express.Router();
var controller = require('../controllers/api.controller');

router.get('/:id', controller.api);

module.exports = router;