const axios = require('axios');

const apiWeather = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/`,
    timeout: 2000,
});




module.exports = { apiWeather }