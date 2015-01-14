var express = require('express');

//routes
var router_test = express.Router();

//controllers
var controller_test = require('./controller_test');

router_test.get('/:info', controller_test.showInfo);

//exports
exports.test = router_test;