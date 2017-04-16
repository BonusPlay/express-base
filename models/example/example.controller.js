var models 	= require('../');

exports.get = function(req, res, next) {
	if(!req.params.id)
		return res.status(422).json({error: {message: 'Must provide id'}});
		
	models.Example.findOne({
		where: {
			id: req.params.id
		}
	}).then(function (example, err) {
		if (err)
			return next(err);
		
		res.status(200).json(example);
	}).error(function(err) {
		console.log(err);
		res.status(500).send('Fatal Error');
	});
};

exports.getAll = function(req, res, next) {
	models.Example.findAll().then(function (examples, err) {
		if(err)
			return next(err);
		
		res.send(examples);
	}).error(function(err) {
		console.log(err);
		res.status(500).send('Forbidden');
	});
};

exports.post = function(req, res, next) {
	models.Example.create({
		text: req.body.text
	}).then(function(example) {
		return res.status(200).json(example);
	}).catch(function (err) {
		if(err)
			return res.status(422).json(err);
	});
};

exports.put = function(req, res, next) {
	if(!req.params.id)
		return res.status(422).json({error: {message: 'Must provide id'}});
	
	models.Example.findOne({
		where: {
			id: req.params.id
		}
	}).then(function (example, err) {
		if (err)
			return next(err);
		
		example.text = req.body.example;
			
		example.save().then(function(example, err) {
			if (err)
				return res.status(500).json(err);
			res.status(200).json(example);
		});
	}).error(function(err) {
		console.log(err);
		res.status(500).send('Fatal Error');
	});
};

exports.delete = function(req, res, next) {
	if(!req.params.id)
		return res.status(422).json({error: {message: 'Must provide id'}});
	
	models.Example.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(data, err) {
		if (err)
			return next(err);
		
		res.send(200);
	}).error(function(err) {
		console.log(err);
		res.status(500).send('Fatal Error');
	});
}