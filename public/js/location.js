"use strict";

function Location(){

	this.getLocationWithIp = function(callback){
		var url = "http://ip-api.com/json";
		$.getJSON(url, function(data){
			callback(data.lat,data.lon);	
		});
	}

	this.getWeather = function(latitude,longitude){
		$.getJSON ("/weather?latitude="+latitude+"&longitude="+longitude,function(data){
				console.log(data);
		});
	}

	this.getLocationWithInput = function(){
		var url = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDp2dB8A9x9BAGplFjWAqWHNUi256c6pWk";
		$.getJSON(url, function(data){
			console.log(data)
		});
	}

}
