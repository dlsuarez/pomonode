var mongoose = require('mongoose');

User = function(
) {
	this.name = 'User';

	this.init = function() {
		var schema = mongoose.Schema({ name: 'string' });
		var user = {
			name: this.name,
			model: mongoose.model(this.name, schema)
		}
		return user;
	}

	return this.init();
}
