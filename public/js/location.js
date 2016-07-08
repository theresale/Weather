"use strict";

function IpLocation(){

	this.getLocationWithIp = function(callback){
		var url = "http://ip-api.com/json";
		$.getJSON(url, function(data){
			callback(data.lat,data.lon);	
		});
	}

	this.partiallyApplyGetWeather = function(callback){
		return (latitude,longitude)=>{
			this.getWeather(latitude,longitude,callback);
		};
	}

	this.getWeather = function(latitude,longitude,callback){
		$.getJSON ("/weather?latitude="+latitude+"&longitude="+longitude,function(data){
			callback(data.daily);
		});
	}

	this.makeWeatherTable = function(forecast){
		var buildTable = "<table class='table'><tr><th>" + "Day" + "</th><th>" + "High Temp" + "</th><th>" + "Low Temp" + "</th><th>" + "Summary" + "</th></tr>";
		for (var i=0; i < 5; i++) {	
			buildTable += "<tr><td>" + (i+1) + "</td><td>" + forecast.data[i].temperatureMax + "</td><td>" + forecast.data[i].temperatureMin + "</td><td>" + forecast.data[i].summary + "</td></tr>"; 
		}
		document.getElementById('buildTable').innerHTML = buildTable;
	}
}
