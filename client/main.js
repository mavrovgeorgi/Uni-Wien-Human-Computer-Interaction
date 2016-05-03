import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';
import './main.html';

Meteor.startup(function(){

/*
1. Make Get Reuest
2. In the Callback parse the response.
3. Send it to the UI

*/

HTTP.get("http://api.openweathermap.org/data/2.5/forecast/city?id=524901&units=metric&APPID=5b1d0f3b02fe18780dcd388eec94ba33", function(error, weather_data){
    console.log(weather_data);

    var outside_temp = weather_data.data.list[0]['main']['temp'];
    var weather_info = weather_data.data.list[0]['weather']['description'];
    var weather_icon = weather_data.data.list[0]['weather'][0]['icon'];
    var wind_speed = weather_data.data.list[0]['wind']['speed'];

    Session.set("outside_temp", outside_temp);
    Session.set("weather_info", weather_info);
    Session.set("weather_icon", weather_icon + '.png');
    Session.set("wind_speed", wind_speed);

    console.log(weather_icon);
});





});
/*make_API(function(weather_info, temp, weather_icon) {

    Session.set("weather_info", weather_info);
    Session.set("temp", parseInt(temp));
    Session.set("weather_icon" int_number(weather_icon).toString() + '.png');

    }

    function make_API(){

        var city ="2761369";

        var link = "http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=5b1d0f3b02fe18780dcd388eec94ba33";

    function weather_number(ID){
        ID = parseInt(ID);
        ID /= 100;

        switch (ID) {
            case 2:
                return "storm";
                break;
            case 3:
                return "rain";
                break;
            case 6:
                return "snow";
                break;
            case 7:
                return "fog";
                break;
            default:
                return "sunny";
                break;
        }
});

});*/
