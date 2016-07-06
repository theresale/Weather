var express = require("express");
var app = express();

app.use(express.static("public"));

app.listen(3000,function(){
	console.log("listening on port", 3000);
});

app.get("/weather", function(request,response){
	var url = "	https://api.forecast.io/forecast/f61a611d2c990a1d977d6264c9a5d364/37.8267,-122.423";
	$.getJSON(url, function(data){
		response.send(data);
		});
});


function getJSON(url, callback) {
	var request = new XMLHttpRequest();
	request.open('GET', url, true);

	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			var data = JSON.parse(request.responseText);
			callback(undefined, data);
		} else {
			callback("We reached our target server, but it returned an error");
		}
	};

	request.onerror = function() {
		callback("Connection error");
	};

	request.send();
};
