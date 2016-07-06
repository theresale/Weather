"use strict";

function Weather(){

	this.getWeather = function(){
		var longitude = longitude;
		var latitude = latitude;
		var url = "https://api.forecast.io/forecast/f61a611d2c990a1d977d6264c9a5d364/" + latitude + "," + longitude;
		$.getJSON(url, function(data){
			console.log(data.daily.data.temperatureMax);
		});
	}
}

