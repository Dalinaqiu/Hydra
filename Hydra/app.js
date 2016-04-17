var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path')
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var settings = require('./settings');
var routes = require('./routes/index');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
	secret: settings.cookieSecret,
	key: settings.db,//cookie name
	cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},//30 days
	store: new MongoStore({
		url: 'mongodb://localhost/blog'
	})
}));

app.use(express.static(path.join(__dirname, '/')));
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

routes(app);

server.listen(3000,function(){
	console.log("listen on 3000");
});