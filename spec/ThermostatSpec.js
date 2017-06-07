'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
      thermostat = new Thermostat();
  })

  it('can switch off PSM', function(){
    thermostat.turnPowerSavingOff();
    expect(thermostat.powerSavingModeOn).toBe(false);
  });

  it('can switch on PSM', function(){
    thermostat.turnPowerSavingOn();
    expect(thermostat.powerSavingModeOn).toBe(true);
  });

  it('reset temperature to default value', function(){
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  })

    
  describe('Power saving mode ON: ', function() {
    it('has a max.temperature of 25C', function() {
      thermostat.turnPowerSavingOn();
      for(var i=0; i < 6; i++ ) {
        thermostat.upTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('Power saving mode OFF: ', function() {
    it('has a max.temperature of 32C', function() {
      for(var i=0; i < 13; i++ ) {
        thermostat.upTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });

  });

    describe('check energy usage', function() {
        
    it('returns low usage under 18C', function() {
      for(var i=0; i < 3; i++ ) {
        thermostat.downTemperature();
      }
      expect(thermostat.getCurrentEnergyUsage()).toEqual("low");
    });
        
    it('returns high usage above 25C', function() {
      for(var i=0; i < 6; i++ ) {
        thermostat.upTemperature();
      }
      expect(thermostat.getCurrentEnergyUsage()).toEqual("high");
    });
        
    it('returns medium usage between 18C and 25C', function() {
      for(var i=0; i < 2; i++ ) {
        thermostat.downTemperature();
      }
      expect(thermostat.getCurrentEnergyUsage()).toEqual("medium");
      for(var i=0; i < 7; i++ ) {
        thermostat.upTemperature();
      }
      expect(thermostat.getCurrentEnergyUsage()).toEqual("medium"); 
    });

  });
    

});
