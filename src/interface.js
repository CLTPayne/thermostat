$(document).ready( function() {
  var thermostat = new Thermostat();
  updateTemperature();

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

});
