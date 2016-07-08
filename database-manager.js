"use strict";
var Pool = require("pg").Pool; //Pool is a class, so you need to instantiate it

process.on("unhandledRejection", function(e){
	console.log(e.message, e.stack);
}); //error code

module.exports = (function() {
	var config = {
		host: 	  "localhost",
		user: 	  "postgres",
		password: "tyler04",
		database: "postgres"
	};
	var pool = new Pool(config);

	var saveLocation = function(latitude,longitude,query_date) {
		pool.query(
			//format query date to fit SQL timestamp format
			"INSERT INTO location" + 
			"(latitude, longitude, query_date)" +
			"VALUES ($1, $2, $3);", [latitude,longitude,query_date], function(error, result) { //security meausures
				if (error) return console.error(error);
				console.log(result);
			}
		);
	}
	var readLocation = function(latitude,longitude,query_date){
		pool.query(
			//extract day from query day here
			var query_day = 
			"SELECT * FROM location"+
			"WHERE latitude<$1+1 AND latitude>$1-1"+
			"AND longitude<$2+2 AND latitude>$2-2"+
			"AND extract(DAY FROM query_date)=$3",[latitude,longitude,query_day], function(error, result){
				if (error) {
					return console.error(error);
				}
				console.log(result);
			});
	}

	};
})(); //iffy, what the function returns is what's going to become module.exports

/* somehwere else
var databaseManager = require("./databse=manager.js");
databaseManager.saveProfile(...);*/