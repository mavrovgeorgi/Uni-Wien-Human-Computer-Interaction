Template.weather.helpers({

  weather_icon: function(){
      return Session.get('weather_icon')
  },

  outside_temp: function(){
      return Session.get('outside_temp')
  },

  weather_info: function(){
      return Session.get('weather_info')
  },

  wind_speed: function(){
      return Session.get('wind_speed');
  }
});
