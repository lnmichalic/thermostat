'use strict';

describe('Feature test', function() {
    var thermostat;

    beforeEach(function() {
        thermostat = new Thermostat();

    })


    describe('Thermostat ', function() {

        it('starts at 20C', function() {
            expect(thermostat.getCurrentTemperature()).toEqual(20);
        });

        it('increases the temperature', function() {
            thermostat.upTemperature();
            expect(thermostat.getCurrentTemperature()).toEqual(21);
        });

        it('decrease the temperature', function() {
            thermostat.downTemperature();
            expect(thermostat.getCurrentTemperature()).toEqual(19);
        });

        it('has a minimum temperature', function() {
            for(var i=0; i < 11; i++ ) {
              thermostat.downTemperature();
            }
            expect(thermostat.getCurrentTemperature()).toEqual(10);
        });


        describe('Power saving mode ON: ', function() {
          it('has a max.temperature of 25C', function() {
            thermostat.turnPowerSavingOn();
            for(var i=0; i < 6; i++ ) {
              thermostat.upTemperature();
            }
            expect(thermostat.getCurrentTemperature()).toEqual(25);
           // expect(function() { thermostat.upTemperature(); }).toThrowError('cannot increase temperature further, reached the limit!') ;
          });

          it('can switch off PSM', function(){
            thermostat.turnPowerSavingOff();
            expect(thermostat.powerSavingModeOn).toBe(false);
          });
        });

        describe('Power saving mode OFF: ', function() {
          it('has a max.temperature of 32C', function() {
            for(var i=0; i < 13; i++ ) {
              thermostat.upTemperature();
            }
            expect(thermostat.getCurrentTemperature()).toEqual(32);
          });

          it('can switch on PSM', function(){
            thermostat.turnPowerSavingOn();
            expect(thermostat.powerSavingModeOn).toBe(true);
          });

        });

    });








});
