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

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
})
$('#current-city').change(function() {
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })
  // $.ajax({
  //   type: 'GET',
  //   url: "https://api.gettyimages.com/v3/search/images/creative?phrase=+london",
  //   beforeSend: function(request) {
  //     request.setRequestHeader("Api-Key", "nakry66tmg85e64uetcz3vm3");
  //   }
  var image_url = 'https://www.googleapis.com/customsearch/v1?q='+city+'+cityscape&searchType=image&fileType=jpg&imgSize=huge&num=1&key=AIzaSyCG8bW3rCS6pZ-7vM36CGffLamocsOykuY&cx=000312491013124124462:k_gkpvyhgqa'
  console.log(image_url);
  $.get(image_url, function(response) {
      console.log(response);
      var image_url = response.items[0].link;//.imageobject[0].url;
      $('body').css({background : 'url('+image_url+')  no-repeat fixed bottom left'});
      // $('#current-city-pic').text(response.items[0].pagemap.imageobject[0].url);
  })
  // $('#selected-city').text($('#current-city').name());
})


  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.getCurrentEnergyUsage());
  }


});
