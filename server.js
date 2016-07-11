var express = require("express");
var app = express();
var databaseManager = require("./database-manager.js"); //database connection

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

app.get("/weather", function(request,response){
	var url = "https://api.forecast.io/forecast/f61a611d2c990a1d977d6264c9a5d364/"+request.query.latitude+","+request.query.longitude;
	getJSON(url, function(error,data){
		//console.log(data.daily.data);
		databaseManager.saveLocation(request.query.latitude, request.query.longitude, "07/11/2016", function(locationId){
			for(var i = 0; i<5;i++){
				//console.log(data.daily.data[i]);
			databaseManager.saveForecast(Math.round(data.daily.data[i].apparentTemperatureMax),
									 Math.round(data.daily.data[i].apparentTemperatureMin),
									 data.daily.data[i].summary,
									 data.daily.data[i].precipProbability,
									 locationId);

			}
		});

		response.send(JSON.stringify(data));
		});
});

/*var useApiToGetWeather = function(request,response){
	var url = "https://api.forecast.io/forecast/f61a611d2c990a1d977d6264c9a5d364/"+request.query.latitude+","+request.query.longitude;
	getJSON(url, function(error,data){
		//databaseManager.saveLocation;
		response.send(JSON.stringify(data));
	});
}

&var useDatabaseToGetWeather = function(request.response){
	databaseManager.readLocation
}

app.get("/weather", function(request,response){	
	useApiToGetWeather(request,response);
	
});*/

