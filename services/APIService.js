if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const appToken = process.env.SIMPLON_WEATHER_APP_TOKEN;
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/weather', (req, res) => {

});

app.listen(3000, () => {
    console.log('Server started');
})