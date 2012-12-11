route = function(app) {

	this.routes = function() {

		app.get('/', function(req, res) {
			res.render('index.jade');
		});

	}

	return this;
}
