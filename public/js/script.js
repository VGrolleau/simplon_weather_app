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
        setWeatherData(data)
    })

const cityElement = document.querySelector('[data-city]');
const hourElement = document.querySelector('[data-hour]');
const iconElement = document.querySelector('[data-icon]');
const descriptionElement = document.querySelector('[data-description]');
const realElement = document.querySelector('[data-real]');
const feelElement = document.querySelector('[data-feel]');
const arrowElement = document.querySelector('[data-arrow]');
const speedElement = document.querySelector('[data-speed]');
const humidityElement = document.querySelector('[data-humidity]');

const setWeatherData = (data) => {
    cityElement.textContent = data.name;

    const timestamp = data.dt;
    const date = new Date(timestamp * 1000); // Convert timestamp in ms
    const hour = date.getHours(); // Use Date object method to get hour
    hourElement.textContent = hour;

    iconElement.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    descriptionElement.innerHTML = data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1);

    realElement.textContent = data.main.temp;
    feelElement.textContent = data.main.feels_like;

    arrowElement.style.transform = `rotate(${data.wind.deg}deg)`;
    speedElement.textContent = data.wind.speed;

    humidityElement.textContent = data.main.humidity;
};