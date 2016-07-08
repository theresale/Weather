"use strict";

var myWeather = new Weather();
var facebook = new Facebook();

var address = new Address();
//address.getLocationWithInput();
address.getLocationWithInput(address.partiallyApplyGetWeather(address.makeWeatherTable));

var myLocation = new IpLocation();

//myLocation.getLocationWithIp(myLocation.partiallyApplyGetWeather(myLocation.makeWeatherTable));


