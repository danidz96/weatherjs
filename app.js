// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city);

// Init UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location weather
document.getElementById('w-change-btn').addEventListener('click', e => {
    e.preventDefault();
    const city = document.getElementById('city').value;

    // Change location
    weather.changeLocation(city);

    // Set location in localStorage
    storage.setLocationData(city);

    // Get and display weather
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
    .then((result) => {
        ui.print(result);
    }).catch((err) => {
        console.log(err);
    });
}
