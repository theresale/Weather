"use strict";

function IpLocation(){

	this.getLocationWithIp = function(callback){
		var url = "http://ip-api.com/json";
		$.getJSON(url, function(data){
			callback(data.lat,data.lon);	
		});
	}

	this.getWeather = function(latitude,longitude){
		$.getJSON ("/weather?latitude="+latitude+"&longitude="+longitude,function(data){
			console.log(data.daily);
		});
	}

	this.makeWeatherTable = function(callback){
		var buildTable = "<table><tr><th>" + "Day" + "</th><th>" + "High Temp" + "</th><th>" + "Low Temp" + "</th><th>" + "Summary" + "</th></tr>";
		for (var i=0; i < 5; i++) {	
			buildTable += "<tr><td>" + (i+1) + "</td><td>" + "data.[i].temperatureMax" + "</td><td>" + "data.[i].temperatureMin" + "</td><td>" + "data.[i].summary" + "</td></tr>"; 
		}
		element.innerHTML = buildTable;
	}
}
