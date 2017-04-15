var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	req.flash('info', 'test message');
	res.render('index', { messages: req.flash('info') });
});

module.exports = router;