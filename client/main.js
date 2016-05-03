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
2643743
524901
*/

HTTP.get("http://api.openweathermap.org/data/2.5/forecast/city?id=2643743&units=metric&APPID=5b1d0f3b02fe18780dcd388eec94ba33", function(error, weather_data){
    console.log(weather_data);

    var outside_temp = weather_data.data.list[0]['main']['temp'];
    var weather_info = weather_data.data.list[0]['weather']['description'];
    var weather_icon = weather_data.data.list[0]['weather'][0]['icon'];
    var wind_speed = weather_data.data.list[0]['wind']['speed'];
    var city = weather_data.data['city']['id'];

    Session.set("outside_temp", outside_temp);
    Session.set("weather_info", weather_info);
    Session.set("weather_icon", weather_icon + '.png');
    Session.set("wind_speed", wind_speed);
    Session.set("clothes_icon", adjust_clothes(weather_icon));
    Session.set("city", adjust_city(city));
    console.log(adjust_clothes(weather_icon));
    console.log(city);
    console.log(weather_info);
});

function adjust_city(city){
    if(city == "2643743")
    {
        return "London";
    }
    else if(city == "524901"){
        return "Moscow";
    }
    else if(city == "727011"){
        return "Sofia";
    }
    else if(city == "2761369"){
        return "Vienna";
    }
    else if(city == "3054643"){
        return "Budapest";
    }
    else if(city == "2950159"){
        return "Berlin";
    }


}

function weather_condition(weather_info){
    weather_info = parseInt(weather_info);
    weather_info /= 100;

    if(weather_info == 2){
        return "storm";
    }

    else if(weather_info == 3){
        return "rain";
    }

    else if(weather_info == 6){
        return "snow";
    }

    else if(weather_info == 7){
        return "fog";
    }

    else {
        return "sunny";
    }
}
function adjust_clothes(weather_icon){
    if(weather_icon == "09d" || weather_icon == "10d" || weather_icon == "09n" || weather_icon == "10n" || weather_icon == "11d" || weather_icon == "11n" || weather_icon == "13d" || weather_icon == "13n"){
        return "jacket.png";
    }
    else if(weather_icon == "01d"){
        return "tshirt.png";
    }
    else if(weather_icon =="01n" || weather_icon =="02d" || weather_icon =="02n" || weather_icon =="03d" || weather_icon =="03n" || weather_icon =="04d" || weather_icon =="04n" || weather_icon =="50d" || weather_icon =="50n"){
        return "sweater.png"
    }
}





});
/*

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
