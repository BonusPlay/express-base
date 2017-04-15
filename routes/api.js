var express = require('express');
var router 	= express.Router();

router.get('/', function (req, res) {
	res.send('Welcome to express-base api');
});

router.all('*', function (req, res) {
	res.status(404).send('API interface not found');
});

module.exports = router;