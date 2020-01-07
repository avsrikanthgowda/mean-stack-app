// require('./api/data/dbconnection.js').open();
require('./api/data/db.js');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var routes = require('./api/routes');

app.set('port',3000);

app.use(function(req,res,next){
	console.log(req.method,req.url);
	next();
})

app.use(express.static(__dirname + '/public'));
app.use('/node_modules',express.static(__dirname + '/node_modules'));
app.use('/fonts', express.static(__dirname + '/fonts'));

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());


app.use('/api',routes);

var server = app.listen(app.get('port'),function(){
	var port = server.address().port;
	console.log("Magic happens on port " + port);
})