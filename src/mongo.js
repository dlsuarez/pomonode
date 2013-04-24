Mongo = function(
	nameServer,
	nameDb,
	entity
) {
	var mongoose = require('mongoose');

	this.model = mongoose.model(entity.name);

	this.init = function() {
		this.connect();
	}

	this.connect = function() {
		mongoose.connect(nameServer, nameDb);
		console.log('Connect to mongodb');
	}

	this.save = function(data, callback) {
		var model = new entity.model(data);
		model.save(function(err) {
			if (err) console.log(err);
			callback(data);
		});
	}

	this.find = function(filter, callback) {
		this.model.find(filter, function(err, data) {
			if (err) console.log(err);
			callback(data);
		});
	}

	this.all = function(callback) {
		this.model.find(function(err, data) {
			if (err) console.log(err);
			callback(data);
		});
	}

	this.clear = function(callback) {
		this.model.remove({}, function(err) {
			if (err) console.log(err);
			callback();
		});
	}

	return this.init();
}
