$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() {
    thermostat.upTemperature();
    updateTemperature();
  });

  $('#temperature-down').on('click', function() {
    thermostat.downTemperature();
    updateTemperature();
  });

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').on('click', function() {
    thermostat.turnPowerSavingOn();
    updateTemperature();
  });

  $('#powersaving-off').on('click', function() {
    thermostat.turnPowerSavingOff();
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    if(thermostat.getCurrentEnergyUsage() === 'low') {
      $('#temperature').css('color', 'green')
    }
     else if(thermostat.getCurrentEnergyUsage() === 'medium') {
      $('#temperature').css('color', 'black')
    }
    else {
      $('#temperature').css('color', 'red')
    }
  }


});
