const axios = require('axios');

const apiViaCep = axios.create({
    baseURL: `https://viacep.com.br/ws/`,
    timeout: 2000,
});

module.exports = { apiViaCep }