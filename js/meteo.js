import { config, weatherCodes } from "../config/conf.js";

/**
 * Reload the page all hours (3600000 ms) to refresh weather data.
 * 
 * @function
 */
setInterval(() => {
    location.reload(true);
}, 3600000);

let weather = {
    /**
     * Makes an API request to retrieve weather forecast data for a specified city using its INSEE code.
     * The fetched data is then passed to the displayWeather function for rendering.
     * 
     * @param { number } inseeCity - The INSEE code of the city.
     * @throws { Error } Throws an error if the API request fails or the response is not in JSON format.
     */
    fetchWeather: function (inseeCity) {
        // Make a GET request to the Meteo Concept API endpoint to fetch weather data.
        // The 'token' and 'insee' parameters are included in the URL.
        fetch(`https://api.meteo-concept.com/api/forecast/nextHours?token=${config.token}&insee=${inseeCity}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch weather data. Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => this.displayWeather(data))
            .catch(error => {
                // You might want to handle the error, log it, or notify the user.
                console.error("Weather data fetch error:", error.message);
            });
    },

    /**
     * Update the HTML elements on the page with the weather data received from the API.
     * 
     * @param {Object} data - Weather data received from the API.
     */
    displayWeather: function (data) {
        const { name, cp } = data.city;
        const { weather, temp2m, rh2m, wind10m, probarain } = data.forecast[0];

        document.querySelector(".city").innerText = `Temps à ${name} (${cp})`;
        document.querySelector(".icon").src = weatherCodes[weather].urlImg;
        document.querySelector(".description").innerText = weatherCodes[weather].weather;
        document.querySelector(".temp").innerText = temp2m + "°C";
        document.querySelector(".humidity").innerText = "Humidité: " + rh2m + "%";
        document.querySelector(".wind").innerText = "Vitesse du vent: " + wind10m + " km/h";
        document.querySelector(".rainProb").innerText = "Probabilité de pluie: " + probarain + "%";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    }
}

weather.fetchWeather(config.city.insee);
