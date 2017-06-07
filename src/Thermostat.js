'use strict';

function Thermostat() {
    this.temperature = 20
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};
Thermostat.prototype.upTemperature = function () {
  this.temperature += 1
};
Thermostat.prototype.downTemperature = function () {
  this.temperature -= 1
};
