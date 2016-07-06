"use strict";

function Location(){

	this.getLocationWithIp = function(){
		var url = "http://ip-api.com/json";
		$.getJSON(url, function(data){
		console.log(data.lon);
		console.log(data.lat);
		});
	}

	this.getLocationWithAddress = function(){
		var url = ""
	}
}
AIzaSyDp2dB8A9x9BAGplFjWAqWHNUi256c6pWk