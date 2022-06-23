const express = require('express')
const app = express();
const porta = 3000;
const { api } = require('./src/services/ApiWeather')
const axios = require('axios')

app.set('view engine', 'ejs');
app.set('views', './src/view');

app.use(express.static('public'));


app.use(express.urlencoded({
    extended: true
}))

app.use(express.json());


const localizacaoRoutes = require('./src/routes/LocalizacaoRoutes');
app.use('/localizacao', localizacaoRoutes);


app.get('/', (req, res) => {

    res.redirect('/localizacao')

})






app.listen(porta, () => console.log(`Ouvindo na porta ${porta}`));