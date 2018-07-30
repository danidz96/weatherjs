class Weather {
    constructor(city) {
        this.apiKey = '501bf5d129e948b8cbfde8868632b57e';
        this.city = city;
    }

    // Fetch weather from API

    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData;
    }

    changeLocation(city) {
        this.city = city;
    }
}