var express = require("express");
var app = express();
var databaseManager = require("./databse-manager.js");

app.use(express.static("public"));
app.listen(3000,function(){
	console.log("listening on port", 3000);
});

var https = require("https"); //middleware - allows you to do https

function getJSON(url, callback) { //replacement for $.getJSON
	https.get(url, (response) => {
		var body = '';
		response.on('data', function(d) {
			body += d;
		});
		response.on('end', function() {
			callback(null, JSON.parse(body));
		});
	}).on('error', function(e) { //e is a common convention for error, which is why the functino is named e
		callback(e);
	});
}

var useApiToGetWeather = function(request,response){
	var url = "https://api.forecast.io/forecast/f61a611d2c990a1d977d6264c9a5d364/"+request.query.latitude+","+request.query.longitude;
	getJSON(url, function(error,data){
		databaseManager.saveLocation;
		response.send(JSON.stringify(data));
	});
}

var useDatabaseToGetWeather = function(request.response){
	databaseManager.readLocation
}

app.get("/weather", function(request,response){	
	useApiToGetWeather(request,response);
	
});

