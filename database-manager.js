"use strict";
var Pool = require("pg").Pool; //Pool is a class, so you need to instantiate it

process.on("unhandledRejection", function(e){
	console.log(e.message, e.stack);
}); //error code

module.exports = (function() {
	var config = {
		host: 	  "localhost",
		user: 	  "weather_server",
		password: "weather1234",
		database: "postgres"
	};
	var pool = new Pool(config);

	var saveLocation = function(latitude,longitude,query_date,callback) {
		pool.query(
			//format query date to fit SQL timestamp format
			"INSERT INTO location" + 
			" (latitude, longitude, query_date)" +
			" VALUES ($1, $2, $3) RETURNING id;", [latitude,longitude,query_date], function(error, result) { //security meausures
				if (error) return console.error(error);
				callback(result.rows[0].id);
			}
		);
	}
	var readLocation = function(latitude,longitude,query_date) {
		console.log(query_date);
		pool.query(
			"SELECT * FROM location"+
			" WHERE latitude<($1+1) AND latitude>($1-1)"+
			" AND longitude<($2+1) AND longitude>($2-1)"+
			" AND extract(DAY FROM query_date)=$3"
			" AND extract(MONTH FROM query_date)=$4"
			" AND extract(YEAR FROM query_date)=$5",
			[parseInt(latitude),parseInt(longitude),query_date.getDate(),query_date.getMonth(),query_date.getFullYear()], function(error, result) {
				if (error) {
					return console.error(error);
				}
				console.log(result);
		});
	}
	var saveForecast = function(temp_high,temp_low,summary,precip,location_ID) {
		pool.query(
			"INSERT INTO forecast" +
			" (temp_high, temp_low, summary, precip, location_ID)" +
			" VALUES ($1,$2,$3,$4,$5);", [temp_high,temp_low,summary,precip,location_ID], function(error,result) {
				if (error) return console.error(error);
				//console.log(result);
			}
		);
	}
	var readForecast = function(location_ID) {
		pool.query(
			"SELECT * FROM forecast"+
			" WHERE location_ID=$1", [location_ID], function(error,result) {
				if (error) return console.error(error);
				console.log(result);
			}
		);
	}

return {
	saveLocation: saveLocation,
	saveForecast: saveForecast,
	readLocation: readLocation,
	readForecast: readForecast,
};
})(); //iife, what the function returns is what's going to become module.exports
