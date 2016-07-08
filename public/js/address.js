"use strict";

function Address(){

	google.maps.event.addDomListener(window, 'load', this.getLocationWithInput);
  
    this.getLocationWithInput = function(callback) {
        var autocomplete = new google.maps.places.Autocomplete(document.getElementById("txtautocomplete"));
       
        google.maps.event.addListener(autocomplete, 'place_changed', function () {

        var place = autocomplete.getPlace();
        //console.log(place);
        var latitude = place.geometry.viewport.f.b;
        var longitude = place.geometry.viewport.b.b;
        callback(latitude,longitude);
        });
    };

    this.partiallyApplyGetWeather = function(callback){
		return (latitude,longitude)=>{
			this.getWeather(latitude,longitude,callback);
		};
	};

	this.getWeather = function(latitude,longitude,callback){
		$.getJSON ("/weather?latitude="+latitude+"&longitude="+longitude,function(data){
			callback(data.daily);
		});
	};

	this.makeWeatherTable = function(forecast){
		var buildTable = "<table class='table'><tr><th>" + "Day" + "</th><th>" + "High Temp" + "</th><th>" + "Low Temp" + "</th><th>" + "Summary" + "</th></tr>";
		for (var i=0; i < 5; i++) {	
			buildTable += "<tr><td>" + (i+1) + "</td><td>" + forecast.data[i].temperatureMax + "</td><td>" + forecast.data[i].temperatureMin + "</td><td>" + forecast.data[i].summary + "</td></tr>"; 
		}
		document.getElementById('buildTable').innerHTML = buildTable;
	}
}
	

