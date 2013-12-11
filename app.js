var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var compass = require('node-compass');
var hbs = require('express-hbs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);

app.engine('hbs', hbs.express3({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: __dirname + '/views/layouts/default.hbs',
    partialsDir: __dirname + '/views/partials'
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

app.use(compass({
    mode: 'compact',
    comments: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/pinterest', routes.pinterest);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
