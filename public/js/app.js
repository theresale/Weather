"use strict";

var myWeather = new Weather();
//myWeather.getWeather();

var myLocation = new Location();
myLocation.getLocationWithIp(myLocation.getWeather);
myLocation.getLocationWithInput();

