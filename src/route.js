route = function(app) {

	this.routes = function() {

		app.get('/', function(req, res) {
			res.render('index.jade');
		});

		app.post('/hello', function(req, res) {
			var user = req.param('user', null);
			res.render('page.jade', { nameUser: user });
		});

	}

	return this;
}
