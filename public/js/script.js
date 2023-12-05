// import { config, weatherCodes } from "./config.js";

// const inseeCity = config.city.insee;
// const cityName = config.city.name;
// const country = config.city.country;

// const params = new URLSearchParams({
//     'q': cityName,
//     'appid': 'c43edb6d0a8f6c85292c5253dd66e1fe',
//     'lang': country,
//     'units': 'metric'
// })

fetch('/weather', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {
        setWeatherData(data)
    })
