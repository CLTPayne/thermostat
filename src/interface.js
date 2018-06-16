$(document).ready( function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#select-city').submit( function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

  $('#increase-temp').click( function(event) {
    thermostat.up();
    updateTemperature();
  });

  $('#decrease-temp').click( function(event) {
    thermostat.down();
    updateTemperature();
  });

  $('#reset').click( function(event) {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#power-saving-on').click( function () {
    thermostat.turnPowerSavingModeOn();
    $('#power-saving-mode').text('ON');
    updateTemperature();
  });

  $('#power-saving-off').click( function () {
    thermostat.turnPowerSavingModeOff();
    $('#power-saving-mode').text('OFF');
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='
    var apiToken = '&appid=227195fdd3e0a279d6b3f593dabec5fe'
    var units = '&units=metric'
    $.get(url + city + apiToken + units, function(data) {
      $('#current-temp').text(data.main.temp);
    });
  };

});
