"use strict";

function Weather(){
$(document).ready(function() {
	$.getJSON('https://api.forecast.io/forecast/f61a611d2c990a1d977d6264c9a5d364/37.8267,-122.423', function(data){
		var weather = data.daily.data.temperatureMax;
	});
});

this.getWeather = function(){
	
}
}