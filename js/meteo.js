import { config, weatherCodes } from "../config/conf.js";

setInterval(() => {
    location.reload(true);
}, 3600000);

let weather = {
    fetchWeather: function (inseeCity) {
        fetch(`https://api.meteo-concept.com/api/forecast/nextHours?token=${config.token}&insee=${inseeCity}`)
            .then(Response => Response.json())
            .then(data => this.displayWeather(data));
    },

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
