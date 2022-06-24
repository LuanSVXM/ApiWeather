const { apiViaCep } = require('../services/ApiViaCep')

const {apiWeather} = require('../services/ApiWeather')

const Key_Weather = 'b3d819c395894e533c787503f0e18db7'


class Util {


    static async getCep(cep) {

        const { data } = await apiViaCep.get(`${cep}/json/`)

        if (!data || data.erro) {
            return false
        } else {
            return data
        }
    }

    static apenasNumeros(string) {


        var numeros = string.replace(/[^0-9]/g, '');
        return numeros.trim();

    }

    static async getTempo(cep) {
        console.log(cep)

    let Tempo =  await apiWeather.get(`weather?q=${cep.localidade},BR&appid=${Key_Weather}&units=metric`)
     .then(result => {return result} )
     .catch(err => {console.log(err);  return false})   
        
     return Tempo.data
        
    }





}


module.exports = { Util }