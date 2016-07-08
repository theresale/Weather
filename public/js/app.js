"use strict";

var myWeather = new Weather();
//var facebook = new Facebook();

var address = new Address();
//address.getLocationWithInput();

var myLocation = new IpLocation();
myLocation.getLocationWithIp(myLocation.getWeather);

