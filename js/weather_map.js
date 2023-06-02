$(document).ready(function() {
    var apiKey = 'e37273f7d8371c5675f3c31021d626c5';
    var city = 'Huntsville';

    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            displayWeatherData(data);
        },
        error: function() {
            $('#weather').html('Error retrieving weather data.');
        }
    });

    function displayWeatherData(data) {
        var temperatureKelvin = data.main.temp;
        var temperatureFahrenheit = Math.round((temperatureKelvin - 273.15) * 9/5 + 32);
        var description = data.weather[0].description;

        $('#weather').html(`Current temperature: ${temperatureFahrenheit}&#176;F<br>Weather: ${description}`);
    }


});
