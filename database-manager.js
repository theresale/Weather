"use strict";
var Pool = require("pg").Pool; //Pool is a class, so you need to instantiate it

process.on("unhandledRejection", function(e){
	console.log(e.message, e.stack);
}); //error code

module.exports = (function() {
	var config = {
		host: "localhost",
		user: "postgres",
		password: "tyler04",
		database: "postgres"
	};
	var pool = new Pool(config);

	var saveProfile = function(username,email) {
		pool.query(
			"INSERT INTO profile" + 
			"(username, email)" +
			"VALUES ($1, $2);", [username, email], function(error, result) { //security meausures
				if (error) return console.error(error);
				console.log(result);
			}
		);
	}
	return {
		saveProfile: saveProfile,
		otherFunction: otherFunction

	};
})(); //iffy, what the function returns is what's going to become module.exports

/* somehwere else
var databaseManager = require("./databse=manager.js");
databaseManager.saveProfile(...);*/