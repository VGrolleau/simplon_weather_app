const API_URL = '/weather';
const IMAGE_API_URL = 'https://source.unsplash.com/1600x900/?';

const weatherElements = {
    city: document.querySelector('[data-city]'),
    hour: document.querySelector('[data-hour]'),
    icon: document.querySelector('[data-icon]'),
    description: document.querySelector('[data-description]'),
    real: document.querySelector('[data-real]'),
    feel: document.querySelector('[data-feel]'),
    arrow: document.querySelector('[data-arrow]'),
    speed: document.querySelector('[data-speed]'),
    humidity: document.querySelector('[data-humidity]'),
};

// Function to make the Weather API request
const getWeatherData = async () => {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        setWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

// Function to format and display weather data
const setWeatherData = (data) => {
    // Update HTML elements with weather information
    const { city, hour, icon, description, real, feel, arrow, speed, humidity } = weatherElements;

    // City name
    city.textContent = data.name;

    // Date and time
    const timestamp = data.dt;
    const date = new Date(timestamp * 1000);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    hour.textContent = `${hours}h${(minutes < 10 ? '0' : '') + minutes}`;

    // Update background based on date
    let imgParam = data.name;
    if ((month === 12 && day >= 1 && day <= 25) || (month === 12 && day >= 26) || (month === 1 && day <= 5)) {
        imgParam = (month === 12 && day >= 26) ? "new-year" : "christmas";
        document.body.style.backgroundImage = `url('${IMAGE_API_URL}${imgParam}')`;
    }

    // Weather icon
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    // Weather description (first letter capitalized)
    description.innerHTML = data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1);

    // Real and feels-like temperature
    real.textContent = data.main.temp;
    feel.textContent = data.main.feels_like;

    // Wind direction and speed
    arrow.style.transform = `rotate(${data.wind.deg}deg)`;
    speed.textContent = data.wind.speed;

    // Humidity
    humidity.textContent = data.main.humidity;

    // Function to refresh page
    const refreshPage = () => {
        location.reload(true); // Reload the page ignoring cache
    };

    // Set a delay of one hour after initial loading
    setTimeout(refreshPage, 1 * 60 * 60 * 1000); // 60 minutes * 60 seconds * 1000 ms
};

// Initiate the weather data retrieval
getWeatherData();