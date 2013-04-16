var express = require('express');
var app = express();
require('./src/route');
require('./src/mongo');
require('./model/User');

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
});

route = new route(app);
route.routes();

var mongo = new Mongo(
	'localhost',
	'pomonode',
	new User()
);
mongo.save({ name: 'Nachete' });
mongo.all(function(data) {
	var all = data;
});

app.listen(3030);
