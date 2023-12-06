// Weather API request
fetch('/weather', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setWeatherData(data);
    });

// Select HTML elements for displaying weather information
const cityElement = document.querySelector('[data-city]');
const hourElement = document.querySelector('[data-hour]');
const iconElement = document.querySelector('[data-icon]');
const descriptionElement = document.querySelector('[data-description]');
const realElement = document.querySelector('[data-real]');
const feelElement = document.querySelector('[data-feel]');
const arrowElement = document.querySelector('[data-arrow]');
const speedElement = document.querySelector('[data-speed]');
const humidityElement = document.querySelector('[data-humidity]');

// Function to format and display weather data
const setWeatherData = (data) => {
    // Update HTML elements with weather information

    // City name
    cityElement.textContent = data.name;

    // Date and time
    const timestamp = data.dt;
    const date = new Date(timestamp * 1000); // Convert timestamp in ms

    const month = date.getMonth() + 1; // Add one to get actual month
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    hourElement.textContent = `${hours}h${(minutes < 10 ? '0' : '') + minutes}`;

    // Update background based on date
    let imgParam = data.name;
    if ((month === 12 && day >= 1) || (month === 12 && day <= 25)) imgParam = "christmas";
    if ((month === 12 && day >= 26) || (month === 1 && day <= 5)) imgParam = "new-year";
    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${imgParam}')`;

    // Weather icon
    iconElement.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    // Weather description (first letter capitalized)
    descriptionElement.innerHTML = data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1);

    // Real and feels-like temperature
    realElement.textContent = data.main.temp;
    feelElement.textContent = data.main.feels_like;

    // Wind direction and speed
    arrowElement.style.transform = `rotate(${data.wind.deg}deg)`;
    speedElement.textContent = data.wind.speed;

    // Humidity
    humidityElement.textContent = data.main.humidity;
};