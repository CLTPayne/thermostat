'use strict';


function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
  this.MINIMUM_TEMP = 10;
  this.powerSavingMode = true;
  this.POWER_SAVING_MAX_TEMP = 25;
  this.NON_POWER_SAVING_MAX_TEMP = 32;
  this.LOW_USAGE_THRESHOLD = 18;
  this.HIGH_USAGE_THRESHOLD = 25;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    throw new Error('Minimum temperature of 10 degrees');
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMP;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === true) {
    return this.temperature === this.POWER_SAVING_MAX_TEMP;
  }
  else
  return this.temperature === this.NON_POWER_SAVING_MAX_TEMP;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.turnPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.turnPowerSavingModeOn = function() {
  this.powerSavingMode = true;
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.LOW_USAGE_THRESHOLD) {
    return 'Low Usage';
  } else if (this.temperature > this.HIGH_USAGE_THRESHOLD) {
    return 'High Usage';
  } else {
    return 'Medium Usage';
  }
};
