'use strict';

function Thermostat() {
    this.temperature = 20
    this.powerSavingModeOn = false;
    this.MINIMUM_TEMPERATURE = 10
    this.MAX_TEMPERATURE_PSM_ON = 25
    this.MAX_TEMPERATURE_PSM_OFF = 32
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.upTemperature = function () {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.downTemperature = function () {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function () {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.turnPowerSavingOn = function () {
  this.powerSavingModeOn = true;
};

Thermostat.prototype.turnPowerSavingOff = function () {
  this.powerSavingModeOn = false;
};

Thermostat.prototype.isMaximumTemperature = function () {
  if (this.powerSavingModeOn) {
      return this.temperature === this.MAX_TEMPERATURE_PSM_ON;
  }
    else {
      return this.temperature === this.MAX_TEMPERATURE_PSM_OFF;
  }

};
