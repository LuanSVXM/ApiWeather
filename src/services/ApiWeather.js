const axios = require('axios');

const Key_Weather = 'b3d819c395894e533c787503f0e18db7'

const apiWeather = axios.create({
    baseURL: `https: //api.openweathermap.org/data/2.5/weather?appid=${Key_Weather}&`,
    timeout: 2000,
});




module.exports = { apiWeather }