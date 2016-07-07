"use strict";

function Address(){

	/*this.getLocationWithInput = function(callback){
		var url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
		$.getJSON(url, function(data){
			callback(place.geometry.viewport.f.b,place.geometry.viewport.b.b)
			//callback(latitude,longitude)
		});
	}*/

	this.getWeather = function(latitude,longitude){
		$.getJSON ("/weather?latitude="+latitude+"&longitude="+longitude,function(data){
			console.log(data.daily);
		});
	}
}
	

	/*
	finds lat & lng from address
	this.getLocationWithInput = function(){
		var url = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDp2dB8A9x9BAGplFjWAqWHNUi256c6pWk";
		$.getJSON(url, function(data){
			console.log(data)
		});
	}*/