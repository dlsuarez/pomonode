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

	this.save = function(data) {
		var model = new entity.model(data);
		model.save(function(err) {
 			if (err) console.log(err);
  			console.log(entity.name + ' saved');
		});
	}

	this.all = function(callback) {
		this.model.find(function(err, data) {
 			if (err) console.log(err);
			console.log('Data: ' + data);
			callback(data);
		});
	}

	return this.init();
}
