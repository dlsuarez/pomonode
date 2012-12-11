var express = require('express');
var app = express();
require('./src/route');

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
});

route = new route(app);
route.routes();

app.listen(3030);
