"use strict";

var myWeather = new Weather();
var facebook = new Facebook();
//facebook.getAPI(facebook.partialApplyGetFb);
//facebook.getAPI();

//var myFbLocation = new fbLocation();
//myFbLocation.getFbLocation();

var address = new Address();
address.getLocationWithInput(address.partiallyApplyGetWeather(address.makeWeatherTable));

var myLocation = new IpLocation();

//myLocation.getLocationWithIp(myLocation.partiallyApplyGetWeather(myLocation.makeWeatherTable));


