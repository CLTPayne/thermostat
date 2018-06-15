'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Thermostat starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('Can be increased in temperature with up()', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('Can be decreased in temperature with down', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('It has a minimum temperature of 10 degrees', function() {
    for(var i = 1; i <= 10; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('Can not be decreased below 10 degrees', function() {
    for(var i = 0; i <= 9; i++) {
      thermostat.down();
    }
    expect(function() {thermostat.down(); }).toThrowError('Minimum temperature of 10 degrees');
  });

  it('Has a default powersaving mode turned on on', function() {
    expect(thermostat.isPowerSavingModeOn()).toEqual(true);
  });

  it('Can turn off powersaving mode', function() {
    thermostat.turnPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toEqual(false);
  });

  it('Can turn on powersaving mode', function() {
    thermostat.turnPowerSavingModeOff();
    thermostat.turnPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toEqual(true);
  });

  describe('Powersaving mode:', function() {
    it('Can not be increased above 25 degress if powers saving mode is on', function () {
      for(var i = 0; i <= 9; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it('Can not be increased above 32 degrees when power saving mode is off', function () {
      thermostat.turnPowerSavingModeOff();
      for(var i = 0; i <= 14; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });

  });

  it('Can reset the temperature to 20', function() {
    for(var i=0; i <= 4; i++) {
      thermostat.up();
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('Can display usage levels', function() {
    describe('When the temperature is below 18 degrees', function() {
      it('Can check if energy is in low usage mode', function() {
        for(var i = 0; i <= 2; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('Low Usage');
      });
    });

    describe('When the temperature is between 18 and 25 degrees', function() {
      it('Can check if energy is in medium usage mode', function() {
        for(var i = 0; i <= 3; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('Medium Usage');
      });
    });

    describe('When the temperature is over 25 degrees', function() {
      it('Can check if energy is in high usage mode', function() {
        thermostat.turnPowerSavingModeOff();
        for(var i = 0; i <= 7; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('High Usage');
      });
    });


  });

});
