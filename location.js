"use strict";

function Location(){

	this.getLocation = function(){
		var url = "http://ip-api.com/json";
		$.getJSON(url, function(data){
		console.log(data.lon);
		console.log(data.lat);
		});
	}
}