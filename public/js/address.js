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

	this.getWeather = function(latitude,longitude){
		$.getJSON ("/weather?latitude="+latitude+"&longitude="+longitude,function(data){
			console.log(data.daily);
		});
	}
}
	

