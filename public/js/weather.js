"use strict";

function Weather(){

	this.getWeather = function(){
		var url = "/weather";
		$.getJSON(url, function(data){
			console.log(data);
		});
	}
}

