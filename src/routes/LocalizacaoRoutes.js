const { Router } = require('express');

const { LocalizacaoControler } = require('../controllers/LocalizacaoController')

const routes = Router();

const localizacaoControler = new LocalizacaoControler


routes.get('/', localizacaoControler.inicio);

routes.post('/', localizacaoControler.transformarcep);


module.exports = routes;