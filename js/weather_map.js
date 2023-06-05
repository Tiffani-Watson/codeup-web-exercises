 $(document).ready(function () {
    let latLong = [-95.3698, 29.7604];
    let map;
    let marker;

    function updateWeatherForecast(lat, lon) {
    $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${MyOW_Key}`, function (data) {
    console.log(data);
    let weatherData = data.list;
    let weatherClasses = [];
    weatherData.forEach(function (item, index) {
    if (index % 8 === 0) {
    let weather = item.weather[0].main;
    let weatherClass = 'default';
    switch (weather) {
    case 'Clear':
    weatherClass = 'clear';
    break;
    case 'Clouds':
    weatherClass = 'clouds';
    break;
    case 'Rain':
    weatherClass = 'rain';
    break;
    // Add more cases for different weather conditions if needed
}
    weatherClasses.push(weatherClass);
    let date = new Date(item.dt * 1000);
    let dateString = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    $('.card').eq(index / 8).find('.date').text(dateString);
}
});
    $('.card').each(function (index) {
    $(this).addClass(weatherClasses[index]);
    $(this).find('.weather-info').text(weatherData[index * 8].weather[0].description);

    let temperatureCelsius = Math.round(weatherData[index * 8].main.temp - 273.15);
    let temperatureFahrenheit = Math.round((temperatureCelsius * 9 / 5) + 32);

    $(this).find('.temperature').text(temperatureFahrenheit + '\u00B0F');
});
});
}

    function updateCityState(latLng) {
    $.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${latLng[0]},${latLng[1]}.json?access_token=${MyApiKey}`, function (data) {
    let features = data.features;
    let city = "";
    let state = "";
    for (let i = 0; i < features.length; i++) {
    if (features[i].place_type.includes('place')) {
    city = features[i].text;
    state = features[i].context[0].text;
    break;
}
}
    $('.card h2').text(city + ", " + state);
});
}

    function searchLocation() {
    var location = $('#location-input').val();
    if (location) {
    $.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${MyApiKey}`, function (data) {
    if (data.features.length > 0) {
    var lngLat = data.features[0].geometry.coordinates;
    latLong = [lngLat[0], lngLat[1]];
    updateCityState(latLong);
    updateWeatherForecast(latLong[1], latLong[0]);
    map.flyTo({ center: latLong });
    marker.setLngLat(latLong);
} else {
    alert('Location not found.');
}
});
}
}

    function initializeMap() {
    mapboxgl.accessToken = MyApiKey;
    map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: latLong,
    zoom: 10
});

    marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat(latLong)
    .addTo(map);

    marker.on('dragend', function () {
    var lngLat = marker.getLngLat();
    latLong = [lngLat.lng, lngLat.lat];
    updateCityState(latLong);
    updateWeatherForecast(latLong[1], latLong[0]);
});
}

    initializeMap();
    updateWeatherForecast(latLong[1], latLong[0]);
    updateCityState(latLong);

    $('#search-btn').on('click', searchLocation);

    $('#location-input').on('keyup', function (event) {
    if (event.keyCode === 13) {
    searchLocation();
}
});
});

    setInterval(function () {
    var heading = document.getElementById('page-heading');
    if (heading.style.color === 'black') {
    heading.style.color = '#ff6ec7';
} else {
    heading.style.color = 'black';
}
}, 3000);
