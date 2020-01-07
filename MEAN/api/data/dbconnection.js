var MongoClient = require('mongodb').MongoClient;
const dburl = "mongodb://localhost:27017";

var _connection = null;

var open = function(){
	MongoClient.connect(dburl,function(err,db){
		if(err){
			console.log("DB connection failed");
			return;
		}
		_connection = db.db('meanhotel');
		console.log("DB connection open");
	});
};

var get = function(){
	return _connection;
};

module.exports = {
	open:open,
	get:get
};