class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.dewpoint= document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    print(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = `${weather.main.temp} ºC`;
        this.icon.setAttribute('src',`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
        this.dewpoint.textContent = `Pressure: ${weather.main.pressure} hPa`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} KM/h`;
      }
}