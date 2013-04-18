var express = require('express');
var app = express();
require('./src/route');
require('./src/mongo');
require('./model/User');

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.bodyParser());
});

route = new route(app);
route.routes();

app.listen(3030);
