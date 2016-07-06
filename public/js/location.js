"use strict";

function Location(){

	this.getLocationWithIp = function(){
		var url = "http://ip-api.com/json";
		$.getJSON(url, function(data){
		console.log(data.lon);
		console.log(data.lat);
		});
	}

	this.getLocationWithInput = function(){
		var url = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDp2dB8A9x9BAGplFjWAqWHNUi256c6pWk";
		$.getJSON(url, function(data){
			console.log(data)
		})

	}
}
