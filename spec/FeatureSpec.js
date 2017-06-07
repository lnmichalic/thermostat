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

        it('', function() {

        });

    });




});
