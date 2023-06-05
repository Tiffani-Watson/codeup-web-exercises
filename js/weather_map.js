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

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}
