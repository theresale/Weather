"use strict";

function FbLocation(){

	this.getFbLocation = function (){
		FB.api('/me?fields=location', function(response) {
      		var location = response.location.name;
      	});
     }

	this.getLatLng = function(){
	  var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+location+"&key=AIzaSyDp2dB8A9x9BAGplFjWAqWHNUi256c6pWk";
      $.getJSON(url, function(){
        console.log(data)
      });
	}
}