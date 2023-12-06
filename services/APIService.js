if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const appToken = process.env.OPEN_WEATHER_MAP_TOKEN;
const axios = require('axios');
const express = require('express');
const app = express();

const config = require('../public/js/config.json');
const cityName = config.city.name;
const country = config.city.country;

app.use(express.json());
app.use(express.static('public'));

app.get('/weather', (req, res) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appToken}&lang=${country}&units=metric`;
    axios({
        url: url,
        responseType: 'json'
    })
        .then(data => res.json(data.data))
})

app.listen(3000, () => {
    console.log('Server started');
})