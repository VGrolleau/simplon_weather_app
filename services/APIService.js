// Load environment variables if not in production
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// Retrieve OpenWeatherMap API key from environment variables
const appToken = process.env.OPEN_WEATHER_MAP_TOKEN;

// Import necessary modules
const axios = require('axios');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the port defined in environment variables or default to port 3000

// Import variables from config file
const config = require('../public/js/config.json');
const cityName = config.city.name;
const country = config.city.country;

// Validate the presence of the API key
if (!appToken) {
    console.error('Missing OpenWeatherMap API token. Please provide a valid token.');
    process.exit(1);
}

// Express server configuration
app.use(express.json());
app.use(express.static('public'));

// Endpoint to retrieve weather data
app.get('/weather', async (req, res) => {
    try {
        // Build the weather API URL with city parameters, API key, language, and units
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appToken}&lang=${country}&units=metric`;

        // Call the weather API using Axios
        const response = await axios({
            url: url,
            responseType: 'json'
        });

        // Return weather data as JSON response
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error);

        // In case of an error, return an error response with status 500
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server on the specified port
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});