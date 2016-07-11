"use strict";
function Facebook(){ 

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '995990820516035',
      xfbml      : true,
      version    : 'v2.6'
    });
  };

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  var statusChangeCallback = function(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      testAPI();
    } else if (response.status === 'not_authorized') {
      document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
    } else {
      document.getElementById('status').innerHTML = 'Please log ' +
      'into Facebook.';
    }
  }

  window.checkLoginState = function() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

    function login(){
      FB.login(function(response){

      }, {scope: 'user_location' });
    }

    function testAPI() {
      console.log('Welcome!  Fetching your information.... ');
      FB.api('/me?fields=location', function(response) {
        console.log(response.location.name);
      });
    }

    this.getAPI = function(callback){
      FB.api('/me?fields=location', function(response) {
        callback(response.location.name);
      });
    }

    this.getPartialFbLocation = function(callback){
      return (location)=>{
        this.getFbLocation(location,callback);
      };
    };

    this.getFbLocation = function(location,callback){
      var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+location+"&key=AIzaSyDp2dB8A9x9BAGplFjWAqWHNUi256c6pWk";
      $.getJSON(url, function(response){
        console.log(response);
          callback(response.results[0].geometry.location.lat, response.results[0].geometry.location.lng);
      });
    }

    this.partiallyApplyGetWeather = function(callback){
      return (latitude,longitude)=>{
        this.getWeather(latitude,longitude,callback);
      };
    };

    this.getWeather = function(latitude,longitude,callback){
      $.getJSON ("/weather?latitude="+latitude+"&longitude="+longitude,function(data){
        callback(data.daily);
      });
    }

    this.makeWeatherTable = function(forecast){
      var buildTable = "<table class='table'><tr><th>" + "Day" + "</th><th>" + "High Temp" + "</th><th>" + "Low Temp" + "</th><th>" + "Summary" + "</th></tr>";
      for (var i=0; i < 5; i++) { 
        buildTable += "<tr><td>" + (i+1) + "</td><td>" + forecast.data[i].temperatureMax + "</td><td>" + forecast.data[i].temperatureMin + "</td><td>" + forecast.data[i].summary + "</td></tr>"; 
      }
      document.getElementById('buildTable').innerHTML = buildTable;
    }

  }







