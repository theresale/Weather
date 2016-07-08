"use strict";
  
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

  function statusChangeCallback(response) {
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

  function checkLoginState() {
      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });
  }
  window.fbAsyncInit = function() {
      FB.init({
        appId      : '995990820516035',
      cookie     : true,  // enable cookies to allow the server to access 
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.5' // use graph api version 2.5
  });

  FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
  });
  };
    // Load the SDK asynchronously
  (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
    // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.

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

  /*
  finds lat & lng from address
  this.getLocationWithInput = function(){
    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDp2dB8A9x9BAGplFjWAqWHNUi256c6pWk";
    $.getJSON(url, function(data){
      console.log(data)
    });
  }*/

